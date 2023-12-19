import React from "react";
import { useFetch } from "../hooks/useFetch";
import { Link, useSearchParams } from "react-router-dom";
export const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Hubo un error</div>;
  if (!data) return null;

  const handleChange = (e) => {
    let filter = e.target.value;
    setSearchParams({ filter });
  };
  return (
    <>
      <input
        type="text"
        onChange={handleChange}
        className="form-control my-3"
        value={searchParams.get("filter") || ""}
      />
      <ul className="list-group">
        {data
          .filter((item) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = item.title.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((item) => (
            <Link
              className="list-group-item"
              to={`/blog/${item.id}`}
              key={item.id}
            >
              {item.id} - {item.title}
            </Link>
          ))}
      </ul>
    </>
  );
};
export default Blog;
