import snowboarding from "../../assets/snowboarding.jpg";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.About}>
      <h1>Hi there!</h1>
      <p>I'm Viv, I am a front-end specialist.</p>
      <img src={snowboarding} alt="me-snowboarding" width="468" height="600" />;
    </div>
  );
};
export default About;
