import React, { useEffect, useState } from "react";
import { getBlogs } from "../../../utils/api";
import "./blogs.css";
import Pagination from "../../../components/share/Pagination/Pagination";
import { Link, useSearchParams } from "react-router-dom";
export default function Blogs() {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [totalBlogs, setTotalBlogs] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const timeOut = setTimeout(fetchBlogs, 10);
    return () => clearTimeout(timeOut);
  }, [searchParams]);

  async function fetchBlogs() {
    setIsLoading(true);
    const result = await getBlogs(searchParams.get("page") || 1, 4);
    if (result.success) {
      setError(false);
      setBlogs(result.body);
      setTotalBlogs(result.totalBlogs.filtered);
    } else {
      setError(result.message);
    }
    setIsLoading(false);
    window.scrollTo({ top: 0, behaviar: "smoothly" });
  }
  const numOfPage = Math.ceil(totalBlogs / 4);
  return (
    <div className="blogs container mx-auto">
      <h1 className="text-center py-5">Blogs</h1>
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center">
          <h2 className="msg me-3 fs-2">Is Loading...</h2>
          <span className="spinner spinner-grow msg"></span>
        </div>
      ) : error ? (
        <div>
          <h2 className="fs-2 msg">{error}</h2>
          <button className="btn-error" onClick={fetchBlogs}>
            Try again
          </button>
        </div>
      ) : (
        <div>
          {blogs.length ? (
            <div className="row mb-5 ">
              {blogs.map((blog) => {
                return (
                  <Link
                    key={blog.id}
                    className="col-12 col-md-6 col-lg-3 col-blog link"
                    to={`${blog.slug}`}
                  >
                    <div class="blog-item ">
                      <div class="blog-item-overlay"></div>
                      <div class="blog-item-container">
                        <div class="blog-item-img">
                          <img
                            src={"http://server.test/" + blog.image}
                            alt={blog.slug}
                          />
                        </div>
                        <div class="blog-item-table">
                          <h3 class="blog-item-title">{blog.title}</h3>
                          <div class="blog-item-info">
                            <span class="blog-item-info-product">
                              {blog.slug}
                            </span>
                            <span class="blog-item-info-dash"></span>
                            <span class="blog-item-info-dr">
                              Dr. Wade Warren
                            </span>
                            <span class="blog-item-info-dash"></span>
                            <span class="blog-item-info-date">
                              Jan 20, 2021
                            </span>
                          </div>
                          <p class="blog-item-desc">{blog.description}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <p className="text-center cardEmpty fs-2 ">There is no blog</p>
          )}
          <Pagination numOfPage={numOfPage} />
        </div>
      )}
    </div>
  );
}
