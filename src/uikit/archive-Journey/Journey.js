import React from "react";

import "./styles";
import { useJourney } from "../../logickit";

export const Journey = ({ children }) => {
  return (
    <main className="Journey">
      <content className="Journey-contentWrapper">{children}</content>
    </main>
  );
};


export const JourneyNav = ({ children }) => {
  return (
    <aside className="Journey-nav">
      <nav className="SteppedNavigation">
        <ol>{children}</ol>
      </nav>
    </aside>
  );
};

export const JourneyNavStep = ({ children, isActive, step, title, error }) => {
  let className = "disabled";
  if (isActive) className = "active";
  if (error) className = "error";

  return (
    <li className={className}>
      <button
        data-component-name="Button"
        type="button"
        className="btn btn-link Button"
      >
        {!isNaN(step) && (
          <span className="Journey-progressBar-step-preheader">
            Step {step + 1}
          </span>
        )}
        <span className="Journey-progressBar-step-name">{title}</span>
      </button>
    </li>
  );
};
export const JourneyNavStepWithLogic = ({ step, title, error = null }) => {
  /**
   * @step validation
   */
  if (isNaN(step))
    throw new Error(`"step" must be a number. Received: ${step}`);

  const [journeyStore] = useJourney();

  return (
    <JourneyNavStep
      step={step}
      title={title}
      error={error}
      isActive={journeyStore.currentStep === step}
    />
  );
};

export const JourneyContent = ({ children }) => {
  return <section className="Journey-content">{children}</section>;
};

export const JourneyStep = ({ children, isActive }) => {
  let className = "WizardStep";
  if (isActive) className += " isActive";

  return (
    <div className={className} data-component-name="WizardStep">
      <section className="Form" data-component-name="Form">
        {children}
      </section>
    </div>
  );
};
export const JourneyStepWithLogic = ({ children, step, title, validator }) => {
  /**
   * @step validation
   */
  if (isNaN(step))
    throw new Error(`"step" must be a number. Received: ${step}`);

  const [journeyStore, journeyActions] = useJourney();

  if (validator) journeyActions.addValidator(step, validator);

  return (
    <JourneyStep
      step={step}
      title={title}
      isActive={journeyStore.currentStep === step}
    >
      {children}
    </JourneyStep>
  );
};

export const JourneyStepWell = ({ children, title }) => {
  return (
    <div data-component-name="Grid" className="OneColumn container Grid">
      <div data-component-name="Row" className="show-grid row Row">
        <div data-component-name="Col" className="col-xs-12 Col">
          <div data-component-name="Clearfix" className="clearfix Clearfix">
            <fieldset>
              <legend className="well-header">
                <h2>{title}</h2>
              </legend>
              <div className="well pageContent">{children}</div>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export const JourneyStepFooter = ({ children }) => {
  return (
    <section className="actions no-gutter">
      <ol>
        <li>{children}</li>
      </ol>
    </section>
  );
};

export const NextStepButton = ({ children, onNextStep }) => {
  const onClickHandler = (event) => {
    event.preventDefault();

    onNextStep();
  };

  return (
    <button
      type="submit"
      data-component-name="Button"
      className="btn btn-primary Button"
      onClick={onClickHandler}
    >
      {children || "Next"}
    </button>
  );
};


Journey.Nav = JourneyNav;
Journey.NavStep = JourneyNavStep;
Journey.NavStepWithLogic = JourneyNavStepWithLogic;
Journey.Content = JourneyContent;
Journey.Step = JourneyStep;
Journey.StepWithLogic = JourneyStepWithLogic;
Journey.StepWell = JourneyStepWell;
Journey.StepFooter = JourneyStepFooter;
