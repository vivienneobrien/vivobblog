import { useNavigate, useParams } from "react-router-dom";

const IndividualPost = () => {
  const navigate = useNavigate();
  const { id, name } = useParams();
  const backToHome = () => {
    navigate("/react"); // means it will go to the last page
  };

  return (
    <div>
      <h1>
        Individual Post Title - {id} - {name}
      </h1>
      <button onClick={backToHome}>Back to home</button>
    </div>
  );
};
export default IndividualPost;
