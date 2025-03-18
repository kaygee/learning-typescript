# learning-typescript

## Install

`npm install -g typescript`

## Building your first TypeScript file

```
function greeter(person) {
  return "Hello, " + person;
}
 
let user = "Jane User";
 
document.body.textContent = greeter(user);
```

## Compiling your code

`tsc greeter.ts`
