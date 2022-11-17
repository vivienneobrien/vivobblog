import { useState } from "react";

const AddPostItem = () => {
  const [id, setID] = useState("");
  const [name, setName] = useState("");
  const [destination, setDestination] = useState("");
  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    const myObject = {
      id,
      name,
      destination,
    };
    console.log("XXX myObject", myObject);
    console.log("Triggered", e);
  };
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label> ID </label>
          <input
            value={id}
            onChange={(e) => setID(e.target.value)}
            disabled
          ></input>
        </div>
        <div>
          <label> Name </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          ></input>
          {name.length === 0 && (
            <div style={{ color: "red" }}>Please enter name</div>
          )}
        </div>
        <div>
          <label> Destination </label>
          <input
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddPostItem;
