import React from 'react';

import './styles/Journey.extensions.scss';
// import {useJourney} from '../../';
import {useJourney} from '../../../logickit'

export const Journey = ({ children }) => {
    return (
        <main className='Journey'>
            <content className='Journey-contentWrapper'>
                {children}
            </content>
        </main>
    )
}


export const JourneyNav = ({ children }) => {
    return (
        <aside className="Journey-nav">
            <nav className="SteppedNavigation">
                <ol>
                    {children}
                </ol>
            </nav>
        </aside>
    )
}

export const JourneyNavStep = ({ children, isActive, step, title, error }) => {

    let className = 'disabled';
    if(isActive) className = 'active';
    if(error) className = 'error';

    return (
        <li className={className}>
            <button data-component-name="Button" type="button" className="btn btn-link Button">
                {!isNaN(step) &&
                    <span className="Journey-progressBar-step-preheader">
                        Step {step+1}
                    </span>
                }
                <span className="Journey-progressBar-step-name">
                    {title}
                </span>
            </button>
        </li>
    )
}
    export function JourneyNavStepWithLogic({step, title, error=null}){
        
        /**
         * @step validation
         */
        if(isNaN(step)) throw new Error(`"step" must be a number. Received: ${step}`);

        const [journeyStore] = useJourney();
        console.log({journeyStore});
        
        // console.log({'journeyStore.currentStep': journeyStore.currentStep, step, 'journeyStore.currentStep === step': journeyStore.currentStep === step})

        return (
            <JourneyNavStep 
                step={step} 
                title={title} 
                error={error} 
                isActive={String(journeyStore.currentStep) === String(step)} 
            />
        );
    }


export const JourneyContent = ({ children }) => {
    return (
        <section className='Journey-content'>
            {children}
        </section>
    )
}

export const JourneyStep = ({ children, isActive }) => {
    return (
        <div 
            className={isActive ? 'WizardStep isActive': 'WizardStep'} 
            data-component-name='WizardStep'
        >
            <section className="Form" data-component-name="Form">
                {children}
            </section>
        </div>
    )
}
    export const JourneyStepWithLogic = ({children, step, title, validator}) => {
        
        /**
         * @step validation
         */
        if(isNaN(step)) throw new Error(`"step" must be a number. Received: ${step}`);

        const [journeyStore, journeyActions] = useJourney();

        if(validator) journeyActions.addValidator(step, validator);
console.log({
    'String(journeyStore.currentStep)': String(journeyStore.currentStep),
    'String(step)': String(step),
    'String(journeyStore.currentStep) === String(step)': String(journeyStore.currentStep) === String(step)
})
        return (
            <JourneyStep 
                step={step} 
                title={title} 
                isActive={String(journeyStore.currentStep) === String(step)} 
            >
                {children}
            </JourneyStep>
        );
    }

export const JourneyStepWell = ({ children, title }) => {
    return (
        <div data-component-name="Grid" className="OneColumn container Grid">
            <div data-component-name="Row" className="show-grid row Row">
                <div data-component-name="Col" className="col-xs-12 Col">
                    <div data-component-name="Clearfix" className="clearfix Clearfix">
                        <fieldset>
                            <legend className="well-header">
                                <h2>
                                    {title}
                                </h2>
                            </legend>
                            <div className='well pageContent'>
                                {children}
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const JourneyStepFooter = ({ children }) => {
    return (
        <section className="actions no-gutter JourneyStepFooter">
            <ol>
                <li>
                    {children}
                </li>
            </ol>
        </section>
    )
}

export const PrevStepButton = ({ children, onNextStep }) => {

    const onClickHandler = event => {
        event.preventDefault();

        onNextStep();
    }

    return (
        <button 
            type="submit" 
            data-component-name="Button" 
            className="btn btn-primary Button"
            onClick={onClickHandler} 
        >
            {children || 'Previous'}
        </button>
    )
}

export const NextStepButton = ({ children, onNextStep }) => {

    const onClickHandler = event => {
        event.preventDefault();

        onNextStep();
    }

    return (
        <button 
            type="submit" 
            data-component-name="Button" 
            className="btn btn-primary Button"
            onClick={onClickHandler} 
        >
            {children || 'Next'}
        </button>
    )
}

/**
 * @desc Compound Component nesting 
 */
Journey.Nav = JourneyNav;
Journey.NavStepSimple = JourneyNavStep;
Journey.NavStep = JourneyNavStepWithLogic;
Journey.Content = JourneyContent;
Journey.StepSimple = JourneyStep;
Journey.Step = JourneyStepWithLogic;
Journey.StepWell = JourneyStepWell;
Journey.StepFooter = JourneyStepFooter;
