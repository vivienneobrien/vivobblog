const BlogDataObject = [
  {
    title: "How did I create this project?",
    date: "October 28, 2022",
    categories: ["React", "Javascript"],
    content:
      "First I made sure to create this project with typescript instead of first creating a create react app then adding on typescript. The first thing I started to build was the nav bar quickly realising that routing will take a bit more time especially when I will be using category key so heavily from my blogdataobejct. Therefore I refocused on getting the skeleton of the UI up and going to help me visualise the logic that will have to be carried out for filtering. The first small issue I got stuck on was passing in my my data as props like ({data}) instead of (data). My next challenge will be either routing or filtering on my categories. ",
  },
  {
    title: "How do you filter on an array containing objects?",
    date: "Nov 4, 2022",
    categories: ["CSS", "TESTING", "HTML"],
    content:
      "Today I walked my collegue through what I had done with my routing to make sure I was doing the right pattern. I was getting a little confused by the navbar just changing the end points versus the routes in the app actually rendering the content of the page. Basically if you removed a './testing' from the app root then if you were to click on './testing' the end point would update but the content would still be empty because you are not mapping that value to any page component. The second part of today was cool where I learnt quite afew new things around using  ```const categories = Array.from(new Set(items.flatMap(({ categories }) => categories)))```. I know sets are good for removing duplicates and flatMap will just remove the inner array, it is similar to map().flat(). I also then had trouble with just rendering my content to the page correctly, I was not getting spaced between each category. I had a console.log() in there before which is why i made a body using the {} but thought that was all they did i.e. allowed you to do more lines of logic rather the () allows you to return just one line of code.  Basically if you use {} you will return undefined, if you do use {} then you need to put return before the curlies. In other words you can use curly braces, but in this case u need to add return before JSX like so: return ( <> {categories.map((e, key) => (console.log(key), (<li key={key}>{e}</li>)))} </>. ",
  },
  {
    title: "Shortcuts to help you go faster and see into the future",
    date: "October 28, 2022",
    categories: ["CSS", "HTML", "AMAZON WEB SERVICES(AWS)"],
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

export default BlogDataObject;
