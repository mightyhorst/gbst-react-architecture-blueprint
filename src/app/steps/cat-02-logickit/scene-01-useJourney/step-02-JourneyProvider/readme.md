# 🖖 LogicKit - useJourney

Wrap the components you want to share journey store and actions with the JourneyProvider

Under the hood the store/actions use the reducer pattern to pub/sub push store updates to all components

```js
/**
* @pattern Provider Pattern 
* @desc
*     Wrap the components you want to share journey store and actions with the JourneyProvider

    Under the hood the store/actions use the reducer pattern to pub/sub push store updates to all components 
*/
const App = () => (
    <JourneyProvider steps={initialSteps}>
        <ExampleJourney />
    </JourneyProvider>
);

```


Any component that is a child of the `JourneyProvider` can now inject the state/actions at any time with one line: 
```js
const [journeyStore, journeyActions] = useJourney();
```

As we see in the example below: 

```js
/**
* @component ExampleJourney
* @desc 
*   inject the store and actions from the JourneyProvider 
*/
export function ExampleJourney() {

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

                <JourneyNav>
                    <JourneyNavStep step={0} title='Client Details' isActive />
                    <JourneyNavStep step={1} title='Application Details' />
                    <JourneyNavStep step={2} title='Summary' />
                </JourneyNav>
                <JourneyContent>
                    <JourneyStep step={0}>

                    </JourneyStep>
                    <JourneyStep step={1}>

                    </JourneyStep>
                    <JourneyStep step={2}>

                    </JourneyStep>
                </JourneyContent>


            </Journey>
        </Page>
    );

}
```
