# conditionator

Given a dictionary where each key represents a variable name and each value is an array of possible values that that variable may have, the `conditionator` function returns a string containing JavaScript code for a flat conditional statement that has one clause for every possible combination of those variables.

In other words, do this:

```
conditionator({
  foo: 'abc|def|ghi'.split('|'),
  bar: '123|456'.split('|'),
  baz: 'null|false'.split('|'),
});
```

And you'll get this string:

```
if (foo === "abc" && bar === 123 && baz === null) {

} else if (foo === "abc" && bar === 123 && baz === false) {

} else if (foo === "abc" && bar === 456 && baz === null) {

} else if (foo === "abc" && bar === 456 && baz === false) {

} else if (foo === "def" && bar === 123 && baz === null) {

} else if (foo === "def" && bar === 123 && baz === false) {

} else if (foo === "def" && bar === 456 && baz === null) {

} else if (foo === "def" && bar === 456 && baz === false) {

} else if (foo === "ghi" && bar === 123 && baz === null) {

} else if (foo === "ghi" && bar === 123 && baz === false) {

} else if (foo === "ghi" && bar === 456 && baz === null) {

} else if (foo === "ghi" && bar === 456 && baz === false) {

}
```

## License

MIT. Copyright (c) 2019 Matthew Trost.

## Bugs / Issues / Contributing

Pull requests are welcome.
