import { useNavigate } from "react-router-dom";
import snowboarding from "../../assets/snowboarding.jpg";
import styles from "./About.module.css";

const About = () => {
  const navigate = useNavigate();
  const backToPost = () => {
    navigate("/testing/4/emma");
  };
  const editPostPage = () => {
    navigate("/editingform/4/emma"); // means it will go to the last page
  };

  const createPostPage = () => {
    navigate("/createform"); // means it will go to the last page
  };
  return (
    <div className={styles.About}>
      <h1>Hi there!</h1>
      <button
        onClick={() => {
          backToPost();
        }}
      >
        Go to individual post
      </button>
      <button
        onClick={() => {
          createPostPage();
        }}
      >
        Create new
      </button>
      <button
        onClick={() => {
          editPostPage();
        }}
      >
        edit post
      </button>
      <p>I'm Viv, I am a front-end specialist.</p>
      <img src={snowboarding} alt="me-snowboarding" width="468" height="600" />;
    </div>
  );
};
export default About;
