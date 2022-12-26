import React from "react";
import useFetch from "../customHooks/use_Fetch";

interface Data {
  body: string;
  id: number;
  title: string;
  userid: number;
}

const ShowApi = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const { loading, error, data } = useFetch(url);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>"Something went wrong"</h1>;
  //   console.log(data);
  return (
    <div>
      <ul>
        {data?.map((elem: Data) => (
          <li key={elem.id}>
            {elem.id} {elem.title}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowApi;
