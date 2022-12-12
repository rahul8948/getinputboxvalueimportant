import React, { useState } from "react";

function App() {
  const [data, setData] = useState("rahul");
  // const [print, setPrint] = useState(false);

  function getData(val) {
    setData(val.target.value);
    // setPrint(false);
  }
  return (
    <>
      {print ? <h1> {data} </h1> : null}
      <input type=" text" onChange={getData} />
      {/* <button onClick={() => setPrint(true)}>click</button> */}
    </>
  );
}
export default App;
