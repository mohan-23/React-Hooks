import React, { useState, useEffect } from "react";

const FetchAPIData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((error) => console.log(error));
  }, []);
  console.log(data);
  return (
    <div>
      <center>
        {data.map((item) => (
          <li key={data.id}>{item.title}</li>
        ))}
      </center>
    </div>
  );
};

export default FetchAPIData;
