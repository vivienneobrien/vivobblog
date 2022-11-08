# Everyday Lessons

> I wanted to keep track of the everyday lessons I learn on the job. Mainly to track my progress but also to refer back to my own made rules.

## November 2022

### Nov 1, 22

1. When writing tests

We use `get` when we know the component is in the document and we use `query` when we say not.inTheDocument. `get` will return the DOM in our terminal and return an error but `query` will just return null if it can not find it.

### Nov 7, 22

> `join` doesn't add a separator at the end

```js
<div className={styles.MyStyleName}>[{value.join(", ")}]</div>
```

> What a substring looks like in javascript. Similar to length-1.

```js
.slice(0, -1)
```

> When creating a new array. If you want to two arrays into one array, make sure you do the spread operator i.e. `...`.

```js
items={[...value, ...DUMMY_VALUE]}
```

If you set your type to `() => void`, when you are testing it and the type is required, you can do `() => undefined`

> When wanting to rebase

1. Commit your changes
2. Pull from main and makes sure its up to date
3. Go back to your branch and say `git rebase main`
4. Then since there will be no changes to commit do `git push --force`
5. Look at screenshot git_rebase.png to see a successful rebase output
6. For more information https://docs.gitlab.com/ee/topics/git/git_rebase.html#force-push

> Network Requests

Network requests that have come up when entering data
The HyperText Transfer Protocol (HTTP) 503 Service Unavailable server error response code indicates that the server is not ready to handle the request
The HyperText Transfer Protocol (HTTP) 504 Gateway Timeout server error response code indicates that the server, while acting as a gateway or proxy, did not get a response in time from the upstream server that it needed in order to complete the request.

```js
it("should itemSelectedIsOpen to true once cog is clicked", async () => {
  const MOCK_ISOPEN = jest.fn();
  const { getByLabelText } = render(
    <MicroCta
      aria-label="cog-button"
      alt="transparent"
      size="sm"
      onClick={MOCK_ISOPEN}
    >
      <Icon.Cog />
    </MicroCta>Markdown Mode

  );
  const cogButton = getByLabelText("cog-button");
  await userEvent.click(cogButton);
  expect(MOCK_ISOPEN).toHaveBeenCalledTimes(1);
});
```

> Fun things worth doing:

Create a swagger spec

### Nov 8, 22

- Line 44 is where the code coverage is needed. Sometimes you can have from 32-44 lines you need to test.

![Line 44 is where the code coverage is needed. Sometimes you can have from 32-44 lines you need to test.](../assets/code_coverage.png)

- Viewing your ReadMe.md with the preview button in VS code.

![PreviewButton](../assets/preview_middle_button.png)
![Preview](../assets/preview_readme.png)
