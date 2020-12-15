```js
/**
  * @function ExampleJourney
  * @desc 
  */
function ExampleJourney() {

    const [journeyStore, journeyActions] = useJourney();

    /**
      * @step render
      */
    return (
        <Page>

            <pre>
                {JSON.stringify(journeyStore, null, 4)}
            </pre>
            <button onClick={journeyActions.previousStep}> Previous Step </button>
            <button onClick={journeyActions.nextStep}> Next Step </button>
            <Journey>

                <Journey.Nav>
                    <Journey.NavStep step={0} title='Client Details' isActive />
                    <Journey.NavStep step={1} title='Application Details' />
                    <Journey.NavStep step={2} title='Summary' />
                </Journey.Nav>
                <Journey.Content>
                    <Journey.Step step={0}>

                    </Journey.Step>
                    <Journey.Step step={1}>

                    </Journey.Step>
                    <Journey.Step step={2}>

                    </Journey.Step>
                </Journey.Content>


            </Journey>
        </Page>
    );

}

return (
    <JourneyProvider steps={steps}>
        <ExampleJourney />
    </JourneyProvider>
);
```
