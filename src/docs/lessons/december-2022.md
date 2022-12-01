# December 2022

## Dec 1, 22

> Awesome data structure knowledge

- Awesome new takes aways today:

1. Object.keys goes through an object and goes to the property you are looking for. It also changes the values in the data structure to strings.
2. Filter -> If we do a `!` in front of components then it will return all the components that do not equal the one we are filtering on.
3. Reduce, will give us the accumulator (go over this), then return what is contained in the instanceID

```js
export const deleteComponent: CaseReducer<JobState, PayloadAction<number[]>> = (
  { jobType, job },
  { payload: components }
) => {
  // CHECKING FOR NULLS
  if (jobType === null || job === null) {
    return { jobType, job };
  }

  // OBJECT.KEYS
  const newComponentObject = Object.keys(job.components)
    .filter(
      (componentInstanceId) =>
        // SEE HOW WE ADD THE ! HERE => This adds the components not including the ones in the list
        !components.includes(parseInt(componentInstanceId))
    )
    // It gets the previous values
    // Then gets the rest of what is in the instance
    .reduce(
      (acc, instanceId) => ({
        ...acc,
        [instanceId]: job.components[instanceId], // INSTANCE ID CAN BE ANY ID ALSO KNOWN AS Dynamic object property name
      }),
      {}
    );

  job.components = newComponentObject;

  return { jobType, job };
};
export default deleteComponent;
```

> Writing tests

```js
it("should remove an object item (in object item list) from the object model", () => {
  const {
    129: {},
    ...rest
  } = objectModel.selectedDeletedItemNumbers;
  const result = {
    ...objectModel,
    selectedDeletedItemNumbers: {
      ...rest,
    },
  };
  expect(
    deleteComponent(
      { job: objectModel, jobType: JobType.Transformation },
      jobActions.deleteComponent([129])
    )
  ).toEqual({ jobType: JobType.Transformation, job: result });
});
```
