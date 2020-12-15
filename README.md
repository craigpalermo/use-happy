# `use-happy`

> A slightly overengineered React hook to render a random, accessible emoticon from a small and predictable set of icons.

## Usage

```javascript
import { useHappy, useSad } from "@unscsprt/use-happy";

const MyHappyFace = () => {
  const happy = useHappy()
  const sad = useSad()
  return (<div>
    {happy}
    {sad}
  </div>)
}
```