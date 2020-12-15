#### Example

A close button will generally position itself absolutely to the right in content it is included with.

```js
import { CloseButton, Panel } from 'gel-generic';

<React.Fragment>
  <div style={{ position: 'relative', border: '1px solid grey', padding: '20px 60px 20px 20px' }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Suscipit tellus mauris a diam maecenas. Enim facilisis gravida
    neque convallis. Dictum varius duis at consectetur lorem donec massa sapien faucibus. Nulla
    aliquet enim tortor at auctor urna nunc id cursus. Dui id ornare arcu odio ut. Et ligula
    ullamcorper malesuada proin libero nunc consequat interdum varius. Nisl tincidunt eget nullam
    non nisi.
    <CloseButton />
  </div>

  <hr />

  <Panel>
    <Panel.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.
      <CloseButton />
    </Panel.Body>
  </Panel>

  <Panel>
    <Panel.Heading>
      <Panel.Title>Panel heading</Panel.Title>
      <CloseButton />
    </Panel.Heading>

    <Panel.Body>Panel content</Panel.Body>
  </Panel>
</React.Fragment>;
```

#### Alert Example

```js
import { Alert } from 'gel-generic';

<React.Fragment>
  <Alert mode="success" onDismiss={() => {}}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Suscipit tellus mauris a diam maecenas. Enim facilisis gravida
    neque convallis. Dictum varius duis at consectetur lorem donec massa sapien faucibus. Nulla
    aliquet enim tortor at auctor urna nunc id cursus. Dui id ornare arcu odio ut. Et ligula
    ullamcorper malesuada proin libero nunc consequat interdum varius. Nisl tincidunt eget nullam
    non nisi.
  </Alert>

  <Alert mode="warning" onDismiss={() => {}}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua.
  </Alert>

  <Alert mode="danger" onDismiss={() => {}}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua.
  </Alert>

  <Alert mode="info" onDismiss={() => {}}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua.
  </Alert>
</React.Fragment>;
```

#### Modal Example

```js
import { Modal, Button } from 'gel-generic';

const [isOpen, setIsOpen] = React.useState(false);

<React.Fragment>
  <Button mode="primary" onClick={() => setIsOpen(true)}>
    Launch Modal Demo
  </Button>

  <Modal show={isOpen} onHide={() => setIsOpen(false)}>
    <Modal.Header closeButton>
      <Modal.Title>Lorem ipsum dolor sit amet.</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </p>
    </Modal.Body>
  </Modal>
</React.Fragment>;
```
