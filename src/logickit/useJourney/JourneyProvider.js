import React, { useContext, createContext, useReducer, createRef } from "react";

/**
 *
 * @param {state} store - initial store
 * @param {IAction{type: string, payload: any}} action - adjustment to the action
 */
function journeyReducer(store, action) {
  switch (action.type) {
    case "INIT":
      return {
        currentStep: 0,
        steps: action.payload.map((step, index) => ({
          ...step,
          stepId: index
        }))
      };
    case "PREVIOUS_STEP":
      return {
        ...store,
        currentStep: store.currentStep > 0 ? --store.currentStep : 0
      };
    case "NEXT_STEP":
      return {
        ...store,
        currentStep:
          store.currentStep < store.totalSteps - 1
            ? ++store.currentStep
            : store.totalSteps - 1
      };
    case "UPDATE_STEP":
      const steps = [...store.steps].filter(
        (step, i) => step.stepId !== action.stepId
      );
      let updatedStep = store.steps[action.stepId];
      updatedStep = {
        ...updatedStep,
        ...action.payload
      };

      console.log("UPDATE_STEP", { updatedStep, steps });

      return {
        ...store,
        steps: [...steps, updatedStep].sort((a, b) => a.stepId - b.stepId)
      };

    case "VALIDATION_ERRORS":
      const currentStep = store.currentStep;
      const validationErrors = action.payload;

      const newSteps = [...store.steps].map((step) => {
        if (step.stepId === currentStep) {
          step.errors = validationErrors;
        }
        return step;
      });

      return {
        ...store,
        steps: newSteps
      };

    default:
      return store;
  }
}

/**
 * @constant validators - create a ref to save across renders
 */
const validators = createRef([]);

/**
 * @namespace Action Creators
 * @param {state} journeyStore - store for the journey
 * @param {dispatch} dispatch - dispatch actiosn to reducer
 */
function JourneyActionsCreators(journeyStore, dispatch) {
  /**
   * @function addValidator
   * @param {number} stepId - step ID
   * @param {()=>boolean)} validator - function to return the boolean
   */
  const addValidator = (stepId, validator) => {
    if (typeof validator !== "function")
      throw Error(
        `"validator" must be a function. Recieved typeof: ${typeof validator}`
      );

    if (!validators.current) validators.current = [];
    validators.current.push({
      stepId,
      validator
    });
  };

  /**
   * helper to find the validator
   * @param {number} stepId - step ID
   */
  const _getStep = (stepId) => {
    const currentStepId = stepId || journeyStore.currentStep;
    const step = journeyStore.steps.find(
      (step) => step.stepId === currentStepId
    );

    if(validators.current){
      const { validator } = validators.current?.find(
        (step) => step.stepId === currentStepId
      );
      return {
        step,
        validator
      };
    }
    return {step};
  };

  /**
   * @function nextStep
   * @if check validator before going to the next step
   * @description go to next step if valid
   */
  const nextStep = () => {
    const { step, validator } = _getStep();

    if (validator) {
      const { isValid, errors: validationErrors } = validator(step?.values);

      if (isValid) {
        dispatch({
          type: "NEXT_STEP"
        });
      } else {
        dispatch({
          type: "VALIDATION_ERRORS",
          stepId: journeyStore.currentStep,
          payload: validationErrors
        });
      }
    } else {
      dispatch({
        type: "NEXT_STEP"
      });
    }
  };

  /**
   * @function previousStep
   * @description go back
   */
  const previousStep = () => {
    dispatch({
      type: "PREVIOUS_STEP"
    });
  };

  /**
   * Set the initial steps
   * @param {Step[]} initialSteps - initial steps
   */
  const setInitialSteps = (initialSteps) => {
    dispatch({
      type: "INIT",
      payload: initialSteps
    });
  };

  /**
   *
   * @param {number} stepId - step ID
   * @param {any} values - values for each field
   * @param {any} errors - errors for each field
   */
  const updateStep = (stepId, values, errors) => {
    dispatch({
      type: "UPDATE_STEP",
      stepId,
      payload: {
        values,
        errors
      }
    });
  };

  /**
   * @returns actionCreators
   */
  return {
    nextStep,
    previousStep,
    setInitialSteps,
    updateStep,
    addValidator
  };
}

/**
 * @context Provider pattern
 */
export const JourneyContext = createContext(null);

/**
 *
 * @param {Step[]} steps - initial steps
 */
export function JourneyProvider({ children, steps }) {
  const [journeyStore, dispatch] = useReducer(journeyReducer, {
    steps:
      steps.map((step, index) => ({
        ...step,
        stepId: index
      })) || [],
    currentStep: 0,
    totalSteps: steps ? steps.length : 0
  });

  const journeyActions = JourneyActionsCreators(journeyStore, dispatch);

  return (
    <JourneyContext.Provider value={[journeyStore, journeyActions]}>
      {children}
    </JourneyContext.Provider>
  );
}

/**
 * @hook useJourney
 * @desc inject the JourneyProvider anyway
 */
export function useJourney() {
  const context = useContext(JourneyContext);

  if (context === undefined) {
    throw new Error("useJourney must be used within a JourneyProvider");
  }
  return context;
}
