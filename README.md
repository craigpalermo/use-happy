# `use-happy`

[![npm version](https://badge.fury.io/js/use-happy.svg)](https://badge.fury.io/js/use-happy)
[![codecov](https://codecov.io/gh/craigpalermo/use-happy/branch/main/graph/badge.svg?token=B6JXCP8KAQ)](https://codecov.io/gh/craigpalermo/use-happy)

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
