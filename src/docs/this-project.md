# This project

> Testing this out

## Sub title

### New lesson nov 7th

What a substring looks like in javascript. Similar to length-1.

```js
<div className={styles.MyStyleName}>[{value.join(", ").slice(0, -1)}]</div>
```

When creating a new array. If you want to two arrays into one array, make sure you do the spread operator i.e. `...`.

```js
            items={[...value, ...DUMMY_VALUE]}
```

When wanting to rebase

1. Commit your changes
2. Pull from main and makes sure its up to date
3. Go back to your branch and say `git rebase main`
4. Then since there will be no changes to commit do `git push --force`
5. Look at screenshot git_rebase.png to see a successful rebase output
