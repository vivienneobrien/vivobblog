# This project

> Testing this out

## Sub title

## New lessons nov 1

When writing tests

we use `get` when we know the component is in the document and we use `query` when we say not.inTheDocument. `get` will return the DOM in our terminal and return an error but `query` will just return null if it can not find it.

### New lesson nov 7th

`join` doesn't add a separator at the end

```js
<div className={styles.MyStyleName}>[{value.join(", ")}]</div>
```

What a substring looks like in javascript. Similar to length-1.

```js
.slice(0, -1)
```

When creating a new array. If you want to two arrays into one array, make sure you do the spread operator i.e. `...`.

```js
            items={[...value, ...DUMMY_VALUE]}
```

If you set your type to `() => void`, when you are testing it and the type is required, you can do `() => undefined`

When wanting to rebase

1. Commit your changes
2. Pull from main and makes sure its up to date
3. Go back to your branch and say `git rebase main`
4. Then since there will be no changes to commit do `git push --force`
5. Look at screenshot git_rebase.png to see a successful rebase output
6. For more information https://docs.gitlab.com/ee/topics/git/git_rebase.html#force-push

Network requests that have come up when entering data
The HyperText Transfer Protocol (HTTP) 503 Service Unavailable server error response code indicates that the server is not ready to handle the request
The HyperText Transfer Protocol (HTTP) 504 Gateway Timeout server error response code indicates that the server, while acting as a gateway or proxy, did not get a response in time from the upstream server that it needed in order to complete the request.
