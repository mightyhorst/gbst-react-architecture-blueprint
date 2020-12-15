A Loading Button is a standard [Button](#/Buttons?id=button) that if provided the property `loading`, will show a loader within the button and disable any actions while loading. However, there is a default delay on the loading state being shown, so that events which execute almost immediately do not cause the button to flash between styles.

The Loading Button also accepts all properties available to [Button](#/Buttons?id=button).

### Example

```js
import { LoadingButton } from 'gel-generic';

var timeout = null;
const [isLoading, setIsLoading] = React.useState(false);

var onClick = (e, delay) => {
  setIsLoading(true);
  clearTimeout(timeout);

  timeout = setTimeout(() => {
    setIsLoading(false);
  }, delay);
};

<LoadingButton
  loading={isLoading}
  onClick={e => {
    onClick(e, 10000);
  }}
>
  Click Me!
</LoadingButton>;
```
