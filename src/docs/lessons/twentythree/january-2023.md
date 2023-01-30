## January

## 3-4th of Jan 23

### Typescript types

`  onSelectedChange?: (id: DataGridRow['id'], isSelected: boolean) => unknown`

`selectedRows?: DataGridRow['id'][] // look into this row, but also make it an array `

`  onSelectedRowChange?: (evt: ChangeEvent<HTMLInputElement>) => unknown // xxxx NOTE THIS`

```js
{
  rows.map((row) => (
    <Row
      className={rowClassName}
      key={row.id}
      columns={columns}
      row={row}
      isSelectable={isSelectable}
      isSelected={selectedRows?.includes(row.id)}
      onSelectedRowChange={(evt) => {
        if (onSelectedChange) {
          onSelectedChange(row.id, evt.currentTarget.checked);
        }
      }}
    />
  ));
}
```

```js
export const BasicDataGrid: Story<DataGridProps<BasicDataGridProps>> = (
  args
) => {
  const [selectedRows, setSelectedRows] = useState(["test2", "test3"]);

  return (
    <div style={{ height: "25vh", overflow: "scroll" }}>
      <DataGrid
        selectedRows={selectedRows}
        //
        onSelectedChange={(id, isSelected) => {
          if (isSelected) {
            // @ts-expect-error shaat up
            setSelectedRows((tmpRows) => [...tmpRows, id]); // because we are mutating the array
          } else {
            setSelectedRows((tmpRows) => tmpRows.filter((_id) => id !== _id));
          }
        }}
        {...args}
        onSort={action("sorted")}
      />
    </div>
  );
};
```

It is just a way to show that we don’t care about the first argument. “_” is a valid variable name, we’ve just told our linter to ignore unused variables starting with _. It’s mostly just a copy/pasted example from the deepmergedocs https://www.npmjs.com/package/deepmerge#arraymerge with types. :slight_smile:

```js
const overwriteMerge = (_: unknown, sourceArray: unknown[]) => sourceArray;
```

### Jan 9, 23

Discussions: Handling errors on the frontend when the status comes from the backend. We are meant to keep backend and frontend separate.
What is BFF?

Please remember when using jest -> If you need to check if something has a value or if it is clicked, but a data test id and then say .checked(), .toBeCalled()

### Jan 11, 23

How to make a component optional:

```js
const selectableDataGrid = {
  isSelectable: true,
  selectedRows: selectedRows,
  selectRowLabelName: (id: string) => `Select ${id} to delete`,
  onSelectedChange: onSelectedChange,
};

return (
  <DataGrid
    columns={gridColumns}
    rows={rows}
    className={classes.DataGrid_Override}
    {...(isSelectable && { ...selectableDataGrid })}
  />
);
```

How to delete a row from a table

```js
const deleteRows = () => {
  setRows((previousRows) => [
    ...previousRows.filter((row) => !selectedRows.includes(row.id)),
  ]);
};
```

How to test a component inside a component if they have different types?

## 16th of Jan

> To make an svg fit its content

```js
  &__Image {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: contain; // this one
    background-position: center; // this one
  }
```

## 17th of Jan

Debugging in chrome dev tools
https://developer.chrome.com/docs/devtools/javascript/

useCallback = function, useMemo = value
The useCallback and useMemo Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.

value={value[0] || ''}
if the first value in the string is undefined then return string

console.log({valueone, valuetwo})

## 18th of Jan

Nullish cualisis ?? => Only works with null and undefined

`console.log(""     || "not found") // "not found"`

`console.log(0  ?? "not found") // 0`

`console.log(""     ?? "not found") // ""`

[https://stackoverflow.com/questions/61480993/when-should-i-use-nullish-coalescing-vs-logical-or](https://stackoverflow.com/questions/61480993/when-should-i-use-nullish-coalescing-vs-logical-or)

> Nullish assignment
> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing > https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment

### 19th Jan 23

> Error handling
> If its a 400 we put an information icon - probably can fix on the frontend. Translation should come from the backend.
> Header Request -> accept-langauge: en fr AND content-type: application/problem-> json. What is that? It usually tells you if the content is in the specific langauge
> If its a 500 then its a backend problem.
> 2 screen shots in notes

> You filter multiple things at once`-tasks -rum`removes this, if you add a`+` before your word then you filter on only this

> axios: study this

> network tab: study this

```js
const { isLoading, data: options } = useParameterOptions({
  component,
  parameter,
  isEnabled: isQueryEnabled,
});
```

> If its unknown you can change the type to the one you want it to be

> Probelm details

-->

```js
errpr as ProbelmDetail?.detail || "This is an unkown error"
```

> If I want it to take exactly the following:

It makes problem as a variable

```js
const Error: FC<{problem: ProblemDetails: undefined}> = ({problem: ___}) => {

}
```

## 25 Jan

What you need to know about hooks:

```js
export const useDeleteComponent = () => {
  const dispatch = useDispatch();
  const reactFlow = useEtlFlow();

  const deleteNodes = useCallback(() => {
    const selectedNodes = reactFlow
      .getNodes()
      .filter((node) => node.selected)
      .map((node) => parseInt(node.id));

    dispatch(jobActions.deleteComponent(selectedNodes));
  }, [dispatch, reactFlow]);

  return { deleteNodes }; // could just do useDeleteComponent
};
```

when using this specific hook, you need to deconstruct the return function of the useDeleteComponent hook if you are to use it in another file i.e. const { deleteNodes } = useDeleteComponent()

If you were to return useDeleteComponent instead (which is what I would expect) this is bad practice, you can add more to the useDeleteComponent through the export if you call it something different and put it in an object

## 27 Jan

```js
import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { jobActions } from "job-lib/store";
import { useEtlFlow } from "modules/Canvas/hooks/useEtlFlow";

export const useDeleteComponent = () => {
  const dispatch = useDispatch();
  const reactFlow = useEtlFlow();

  const selectedNodes = reactFlow
    .getNodes()
    .filter((node) => node.selected)
    .map((node) => parseInt(node.id));

  const deleteNodes = useCallback(() => {
    dispatch(jobActions.deleteComponent(selectedNodes));
  }, [dispatch, selectedNodes]);

  return { deleteNodes, selectedNodes };
};
```

```js
import { useCallback, useMemo } from "react";
import { useNodes } from "reactflow";
import { useDispatch } from "react-redux";

import { jobActions } from "job-lib/store";

export const useDeleteComponent = () => {
  const dispatch = useDispatch();
  const nodes = useNodes();

  const selectedNodes = useMemo(
    () =>
      nodes.filter((node) => node.selected).map((node) => parseInt(node.id)),
    [nodes]
  );

  const deleteNodes = useCallback(() => {
    dispatch(jobActions.deleteComponent(selectedNodes));
  }, [dispatch, selectedNodes]);

  return { deleteNodes, selectedNodes };
};
```
