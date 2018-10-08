# Calendar

<!-- STORY -->

### Usage

```js
import Recalendar from 'recalendar';
```

### Properties

| propName | propType | defaultValue | isRequired |
| -------- | -------- | ------------ | ---------- |
| className | string  | -            | -          |
| onClick  | func     | -            |            |
| color    | string   | -            | -          |
| size     | string   | -            | -          |
| block    | boolean  | false        | -          |
| active   | boolean  | false        | -          |
| loading  | boolean  | false        | -          |
| disabled | boolean  | false        | -          |

### Roadmap

#### Default

```js
import Recalendar from 'recalendar';

render() {
  return (
    <Calendar onClick={this.handleClick}>Send mail</Calendar>
  );
}
```
