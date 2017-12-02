# stdin-equals

Check if stdin equals a string. Includes a CLI.

## API

```js
import stdinEquals from 'stdin-equals'

stdinEquals('foo')
  .then(({ equal, stdin }) => {
    // Note that we get an object of keys back from the promise.

    // We now know whether stdin equaled "foo" based on the boolean `equal`.
    console.log(equal ? 'equal' : 'not equal')

    // We get a reference to the buffered value of stdin too:
    console.log(stdin)
  })
```

## CLI

```sh
# Print help:
stdin-equals -h

echo 'foo' | stdin-equals 'foo\n'
# echos foo
# exit 0

# Silence echoing:
echo 'foo' | stdin-equals -q 'foo\n'
# exit 0

echo 'foo' | stdin-equals 'bar\n'
# echos foo
# exit 1

# Let's suppress echo's new line, so it's more clear:
echo -n 'foo' | stdin-equals 'foo'
# echos foo
# exit 0
```
