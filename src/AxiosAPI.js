// npm install axios

import React, { useEffect, useState } from "react";
import axios from "axios";

const Axios = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      //.then((res) => console.log(res))
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </div>
  );
};

export default Axios;
