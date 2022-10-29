import BlogPostItem from "./BlogPostItem";
import BlogDataObject from "../../data/BlogDataObject";

const EachObject: React.FunctionComponent = () => {
  const eachItem = BlogDataObject.map((e, key) => (
    <BlogPostItem key={key} data={e} />
  ));
  return <>{eachItem}</>;
};

export default EachObject;
