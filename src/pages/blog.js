import React from "react";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";

export default function () {
  const [blogData, setBlogData] = useState(null);
  let { loading, data, error } = useFetch(
    "http://localhost:1337/api/blogs?populate=*"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  console.log(data);

  return (
    <div>
      {data.data.map((blog) => (
        <div>
          <img
            src={`http://localhost:1337${blog.attributes.blogCoverImg.data.attributes.url}`}
          />
          <div>{blog.attributes.blogTitle}</div>
          <div>{blog.attributes.blogExcerpt}</div>
        </div>
      ))}
    </div>
  );
}
