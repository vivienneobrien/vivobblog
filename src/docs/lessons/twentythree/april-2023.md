## April

### April 3

> Things to consider when working with Databases

1. What will store look like? / Shape of the database
2. Current solution and issues
3. How often customer runs jobs that updates database
4. What are the key datapoints?/ Most important ones
5. Should it be in one big table or split out?
6. How long do we store the data? Right now it could be 3 months in the old product, but we could increase or decrease this range. We could also have a short term and long term database, where after 3 months the data can be moved to the long term database.
7. How often will customers be make requests which will contribute to the number of rows in the database. We are looking at 7.7 million rows in one table.

> ## High availability architecture (maintain a high level of availability and reliability)

A system or application that is able to maintain a high level of availability and reliability, even in the face of disruptions or failures. Ensures system will always run. E.g. load balancers, backup power supplies, redundant servers and data storage systems. Back up components in case of failure.

## Kubernetes (development, scaling and managemen)

also known as k8 because 8 letters after k
Orchestration platform that automates the development, scaling and management of containerised applications

> ## Non-functional requirement (NFR)

Evaluates the performance, scalability, accessibility, maintainability, compatability of the application. Quality and suer experience beyond the basic functionality.

> ## What does this mean "product-agnostic data model" (designed to be flexible and adaptable)

A product-agnostic data model is a data model that is not tied to a specific product or technology. It is designed to be flexible and adaptable, so that it can be used across different products and platforms.

In other words, a product-agnostic data model is independent of any particular software application or technology stack. It can be used to represent data in a way that is meaningful and useful across different systems and applications.

This approach has several advantages. It allows organizations to create data models that are more easily reusable and interoperable, which can reduce development costs and improve efficiency. It also enables organizations to future-proof their data architecture, as changes in technology or software products are less likely to require major modifications to the data model.

Overall, a product-agnostic data model is a powerful tool for managing data in a flexible and adaptable way, and is becoming increasingly popular as organizations look to streamline their data management processes.

> ## What does it mean to implement regional data segregation? (need to implement regional data segregation to ensure that personal data is stored and processed in compliance with local laws and regulations/ of that region or location)

Implementing regional data segregation means to store and process data in a way that separates it by geographic region or location. This approach is typically used to ensure compliance with data privacy laws and regulations that require organizations to protect personal data and prevent unauthorized access or disclosure.

For example, if an organization operates in multiple regions or countries, it may need to implement regional data segregation to ensure that personal data is stored and processed in compliance with local laws and regulations. This could involve separating data by region or country, using data encryption or anonymization techniques to protect personal information, and implementing access controls and monitoring to prevent unauthorized access or disclosure.

Regional data segregation can help organizations protect personal data and prevent potential data breaches or compliance violations. However, it can also add complexity to data management and increase costs, as data may need to be duplicated or managed separately in each region or location.

Overall, implementing regional data segregation is an important consideration for organizations that operate in multiple regions or countries and need to comply with data privacy laws and regulations.

> ## Permissions Service (RBAC) - Checks if you have permission in your account. Only authorized users can access this sensitive information

Our service will also interact with the nascent Permissions Service (RBAC) to query and validate the user’s access to projects within the account, to determine the subset of pipeline data they are allowed to see.

This means: When you use our service, we will also use a new tool called the Permissions Service to check if you have permission to access certain projects within your account. This will help us determine what data you are allowed to see from those projects. We want to make sure that only authorized users can access sensitive information, so we will be using this tool to make sure everything is secure.

> How we use launch darkly

We put launch darkley in terraform. This connects to the hub client. You can access launch darkley via the hub client and use them across our applications. You create a separate repo with terraform and laucnh darkley flags to do with your product -> Im a little unsure why we have the code for the terraform - why dont we just use the launch darkly UI if it is all stored in the same place. Where does it connect to the hub client?

> Load testing

> Contact testing

> S3 Bucket

> Docker: clone > build > run > share

> RestAPI versus Kafka

> Cloud workflow

> JFrog: dependency manager

> Launch darkley: feature release flags

> Install issues:

`npm ci`

## Prerequisites

### nvm

[Link for install](https://github.com/nvm-sh/nvm#installing-and-updating)

### xcode

```bash
xcode-select --install
```

## Quick start for mac users

Please type the following into your command line/ terminal in this order:

```bash
xcode-select -p # Verifies that you've successfully installed Xcode Command Line
```

```bash
nvm install
```

```bash
npm install
```

```bash
cp .env.example .env.local # customise with your values, see the Running the app against the dev environment section for more details
```

```bash
npm start
```

https://www.freecodecamp.org/news/install-xcode-command-line-tools/

## April 11th

### Search a searchTerm

```js
data.filter((value) =>
  value.name.toLowerCase().includes(searchTerm.toLowerCase())
);
```

```js
 if (
        Object.values(child.children).some((c) => c.type === 'component' && c.name.includes(search)) ||
        Object.values(child.children).some((c) => c.type !== 'component')
      )
```

> Todo:

Need to do revision on:

```
- some(), includes(), filter(), reduce()

- Object.keys, Object.values, Object.keys

- useMemo, useState, useEffect, useContext, useCallback, useRef, useReducer (other useLayoutEffect, useImperativeMethod, useMutationEffect), forwardRef, useTranslation

- common types from typescript:

  onTabClose?: (event: MouseEvent) => void
  onChange: (newValue: string) => unknown
  onChange: (isChecked: boolean) => void

const [editedValue, setEditedValue] = useState<string>('')

TextInputProps & Omit<HTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

const [isChecked, setIsChecked] = useState<boolean>(defaultChecked ?? false)

async and await

** Tree Data structure in react **

```

### April 17

A good way to debug:

```js
<div>
  <pre>{JSON.stringify(detailsPane.data, null, 2)}</pre>
</div>
```

![How it would look on screen](./../Screenshot%202023-04-17%20at%2009.44.44.png)

## April 25

```js

const useGetComponentTree = (jobType?: JobType, searchTerm?: string) => {
  const { data, ...rest } = useComponentSummaries(jobType)
  const { t } = useTranslation()
  const { disabledComponents } = useFlags()
  // if the search term does not
  const components = Object.values(data ?? {})
    .filter((componentInfo) => {
      const displayName = t(
        `componentSummaries:components.${componentInfo.componentId}.displayName`
      )
      return displayName
        .toLowerCase()
        .includes(searchTerm?.toLowerCase() as string)
    })
    .reduce((comps, comp) => {
      return {
        ...comps,
        [comp.componentId]: comp
      }
    }, {})

  const componentTree = useMemo(() => {
    return nestComponentsInTree(components, t, disabledComponents)
  }, [components, t, disabledComponents])

  return {
    componentTree,
    resultsFound: Object.keys(componentTree || {}).length > 0, // if no search term matches
    ...rest
  }
}

```

How to extract the values to make use of the hook logic for the ui

always try separate hook and logic for us
_resultsFound_

```js
const { componentTree, isLoading, isError, resultsFound } = useGetComponentTree(
  summary?.type,
  searchTerm
);
```

display on UI

```js
if (!resultsFound) {
  return (
    <PanelErrorStatus
      includeLink={false}
      text={t("sideBar.componentPanel.notFound")}
    />
  );
}
```

### May 25

https://itnext.io/react-polymorphic-components-with-typescript-f7ce72ea7af2

https://www.typescriptlang.org/play?module=1&ssl=14&ssc=2&pln=7&pc=1#code/JYWwDg9gTgLgBAbzgYQuCA7AphmAFKCMAZwHVgYALCAVxgCUsAzAGjgFEAbLEHGAFQCeYLHAC+cJoRBwA5FCwBDAMYxZAWABQWrAA9IsOMFxYoTFaIBCdGJgJFiAHiEi4emDgAmxDt164XLAA+RC04OEViAH4ALjhArTEtHX1oeGVMYnhrGFsMOABeOGc3XQ8Mb18ePkDCuQAjG0xZIIAKBDCI4hZOgDp+hSzEuJy8+xJnEIAyOAB5EApHVHRsXHGyCmo6RiZJtgBrLEEIJjhRu0IJ-iCggEpCkI7NcIyMLJQ0SFX4Isi4AB9-g0mhgNNpnnAFDAaFB8ktPpg+Ih+r1BjAJAB6IKJZKaV7vLCcOqOc75GDCLAFABEjVymCpcCxuPx8GIYEU+SKJJBXWpbI5DKZmiAA

https://www.benmvp.com/blog/forwarding-refs-polymorphic-react-component-typescript/

### May 26

if the agent doesnt have a connection then bring up a page
at the root and toggle the height: 0% to 100%

The overflow property is set to hidden to ensure that any content within the block is not visible. By setting these properties, the block will still be present in the DOM but won't be visible to the user.

````js
 <div
  style={{
    position: 'absolute',
    height: '0', // 100%
    width: '0', // 100%
    overflow: 'hidden',
    zIndex: '100'
  }}
>
  <AgentConnectionError />
</div>
        ```
````
