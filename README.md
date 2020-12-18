# `use-happy`

> A slightly overengineered React hook to render a random, accessible emoticon from a small and predictable set of icons.

See [Storybook](https://craigpalermo.github.io/use-happy/) for examples.

## Usage

```javascript
import { useHappy, useSad } from "use-happy";

const MyHappyFace = () => {
  const happy = useHappy()
  const sad = useSad({
    fontSize: "48px",
  })
  return (<div>
    {happy}
    {sad}
  </div>)
}
```
