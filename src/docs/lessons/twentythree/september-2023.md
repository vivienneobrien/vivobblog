# September

### Designer Patterns

Design patterns: Formalised best practices a software engineer can use when solving problems

Learn the pattern once then you can use across all application

Learning design patterns are easy, the harder part is knowing when and where to use them

Sometimes you dont need to use designer patterns. Overly use design patterns. They are overkill.

Helps you learn about architecting code. Cleaner and more maintainable code.

## Null Object Pattern

(Easiest to understand and implementain)

> Converting existing code into the null object pattern

> Maintainable and reusable code
> Where and when to use it

> What scnearios would you want to use this in?

> You want to use this anytime a null object is being returned. Usually you need to check if the null properties exist in order to access to properties on that object. You need to have a bunch of checks in your code to check against null.

> Instead of all these if statements you can set default values so that you can treat the null object as an object of that same type. Instead of null tell the object to display a default.

> Guest users and actual users that are signed in. There will be different permissions.

> Prefixing the class as NullUser

> See if you can add this our code base.

## Builder Pattern

> When you need to create objects that have many interlinking parts or optional and required fields

> When you have many working parts that need to come together in order to create one single object

> It would be UserBuilder, similar how you used NullUser.

The useCreateJob directory structure you're seeing is a common pattern in React applications, especially those that use testing and mock servers for development and testing. Here's a breakdown of the different parts:

- useCreateJob: This is the main hook that is used to create a job. It contains the logic for creating a job and managing its state.

- **handlers**: This directory typically contains mock server handlers. These are functions that intercept network requests and return mock responses. They are used during development and testing to simulate server responses without needing to make actual network requests. In your case, useCreateJobHandlers is an array of handlers that mock the responses for creating different types of jobs.

- **tests**: This directory contains test files for the useCreateJob hook. The index.spec.tsx file is the main test file for the hook. It contains tests that check if the hook behaves as expected when used. The other test files in the directory might be testing different aspects of the hook or its related functions.

The **handlers** and **tests** directories are named with double underscores (\_\_) to indicate that they contain meta-files that are not part of the application's main logic. This is a common naming convention in JavaScript and TypeScript projects.

The structure is set up this way to separate concerns and make the code easier to manage and test. The main logic for creating a job is contained in the useCreateJob hook, while the logic for mocking server responses is contained in the handlers, and the tests are contained in the **tests** directory. This separation makes it easier to work on one aspect of the code without affecting the others.

> what is the difference between a useCallball and not using one at all?

The useCallback hook in React is used to memoize functions. This means that it returns a memoized version of the function that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.

If you don't use useCallback, a new instance of the function will be created on every render. This can lead to two main issues:

1. Performance: If the function is passed as a prop to a child component, and that child component is optimized (for example, with React.memo or shouldComponentUpdate), it will still re-render every time the parent renders because it will receive a new function instance.

2. Infinite loops: If you use the function in a hook dependency array (like useEffect), not using useCallback can lead to infinite loops. Since a new instance of the function is created on every render, the hook will think its dependencies have changed and will run again, causing a new render, and so on.

Here's a simple example to illustrate this:

```js
import React, { useState, useEffect } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  // Without useCallback, this function is recreated on every render
  const increment = () => setCount(count + 1);

  // This effect depends on `increment`, so it will run on every render
  // because `increment` is a new function each time
  useEffect(() => {
    const timer = setTimeout(increment, 1000);
    return () => clearTimeout(timer);
  }, [increment]);

  return <div>{count}</div>;
}
```

In this example, the increment function is recreated on every render, which causes the useEffect hook to run again on every render, setting up a new timer. This can lead to unexpected behavior and performance issues. Using useCallback to memoize the increment function would solve this problem.

I see, you want to see how the MyComponent example would look like with useCallback. Here it is:

```js
import React, { useState, useEffect, useCallback } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  // With useCallback, this function is memoized and only recreated if count changes
  const increment = useCallback(() => setCount(count + 1), [count]);

  // This effect depends on `increment`, so it will only run when `increment` changes
  useEffect(() => {
    const timer = setTimeout(increment, 1000);
    return () => clearTimeout(timer);
  }, [increment]);

  return <div>{count}</div>;
}
```

In this version, increment is wrapped with useCallback and has count as a dependency. This means that a new increment function will only be created when count changes. As a result, the useEffect hook will only run when increment changes, which only happens when count changes. This prevents the infinite loop and unnecessary re-renders that could occur without useCallback.

useMemo: returns the return value of that function
useCallback: takes a function and returns a function

example

```js
const getItems = useCallback(() => {
  return [number, number + 1, number + 2];
}, [number]);
```

- for useMemo, it would return the array: `[number, number + 1, number + 2]`

- for useCallback, it would return the whole function: `{
    return [number, number + 1, number + 2]
}`

Since useCallback returns a function it allows us to use this function in other areas of our application

Basically if you have a hook and you wrap it in a useCallback, it will only render once, otherwise if you dont wrap it, the function will constantly rerender and it will get stuck in a loop.

truthy means its definately defined e.g. if (isChecked &&
means if its truthy/ true

bubbling capturing and stopPropagation
https://www.youtube.com/watch?v=XF1_MlZ5l6M&ab_channel=WebDevSimplified
