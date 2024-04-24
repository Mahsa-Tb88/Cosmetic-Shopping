import React, { useEffect, useState } from "react";
import "./blog.css";
import { useParams } from "react-router-dom";
import { getBlogById } from "../../../utils/api";
export default function Blog() {
  const params = useParams();
  const [blog, setBlog] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(true);
  const blogId = params.id;
  useEffect(() => {
    const timeOut = setTimeout(fetchBlog, 20);
    return () => clearTimeout(timeOut);
  }, []);
  async function fetchBlog() {
    const result = await getBlogById(blogId);
    if (result.success) {
      setError(false);
      setBlog(result.body);
    } else {
      setError({ message: result.message });
    }
    setIsLoading(false);
  }
  return (
    <div className="blog d-flex justify-content-center align-items-center">
      {isLoading ? (
        <div className="fs-2  text-center loadingBlog">
          <p>Loading ...</p>
          <p className=" spinner spinner-grow"></p>
        </div>
      ) : error ? (
        <div className="text-center ">
          <p className="fs-1">{error.message}</p>
          <button
            className="btn-tryAgainBlog fs-3 py-2 px-4"
            onClick={() => fetchBlog()}
          >
            Try Again
          </button>
        </div>
      ) : (
        <div>
          <h1 className="text-center blog-title">{blog.title}</h1>
          <div className="row mt-5">
            <div className="col-12 text-center">
              <div className=" blog-img">
                <img src={SERVER_URL + blog.image} />
              </div>
            </div>
            <div className="col-12 fs-4 text-center">
              <p className="my-5">{blog.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
