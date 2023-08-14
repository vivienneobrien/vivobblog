# August

```js
const camelToKebabCase = (s: string) =>
  s.replace(/[A-Z]/g, (l) => "-" + l.toLowerCase());

export default camelToKebabCase;
```

```js
import camelToKebabCase from "./camelToKebabCase";

describe("camelToKebabCase", () => {
  it("should return a kebab case string", () => {
    expect(camelToKebabCase("testString")).toBe("test-string");
  });
});
```

helps you find any file on your computer. in our case psql
sudo find / -name "psql" -type f 2>/dev/null

know the difference between bash and zsh

> difference between onClick & onChange

onChange and onClick are both event handlers in React that serve different purposes:

onChange:
The onChange event handler is used with form input elements like text inputs, checkboxes, and radio buttons. It is triggered whenever the value of the input element changes. For example, when a user types something into a text input or selects a different option in a dropdown, the onChange event is fired. It is commonly used to capture user input and update the state or perform actions based on that input.

onClick:
The onClick event handler is used with interactive elements like buttons, links, and other clickable elements. It is triggered when the element is clicked by the user. This event handler is commonly used to trigger actions or functions when the user interacts with the element, such as submitting a form, navigating to a different page, or performing some operation.

In your code snippet:

jsx
Copy code
<button
type="button"
class="btn btn-warning"
data-dismiss="modal"
onClick={updateDescription}

> Save
> </button>
> The onClick event handler is attached to the "Save" button. This means that when the user clicks the "Save" button, the updateDescription function will be called. In this context, clicking the "Save" button will trigger the updateDescription function and execute the code within it, which includes sending a PUT request to update the description and reloading the page.

If you were using an input element like a text input, you might use onChange to track changes to the input's value as the user types. However, for

> Content type
> "Content-Type": "application/json": This specific header indicates the media type (or content type) of the data that is being sent in the request body. In this case, "application/json" indicates that the content is in JSON format. This is important for the server to understand how to parse the request body.

query key that unique identifies this query

> Params and body

Params correspond to the request parameters that are appended to the request URL.they are most used with GET requests. On the other hand, Body is the actual request body (usually it defines the request payload or the data that needs to be processed by the request). PUT and POST requests read usually the data from the body of the request and not from the params.
