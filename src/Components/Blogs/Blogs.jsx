import React, { useEffect, useState } from "react";
import "./blogs.css";
import { Link } from "react-router-dom";
import HomeNavbar from "../HomeNavbar";
import Footer from "../Footer";
import Blogsdata from "../JSON/Blogsdata.json";
import WhatsappAction from "../WhatsappAction";
import { Helmet } from "react-helmet-async";

const Blogs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const BlogsdataJosn = Blogsdata;

  const totalPages = Math.ceil(BlogsdataJosn.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentPosts = BlogsdataJosn.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getPageNumbers = () => {
    const maxPageNumbers = 4;
    const halfMaxPageNumbers = Math.floor(maxPageNumbers / 2);
    let startPage = Math.max(1, currentPage - halfMaxPageNumbers);
    let endPage = Math.min(totalPages, startPage + maxPageNumbers - 1);

    if (endPage - startPage + 1 < maxPageNumbers) {
      startPage = Math.max(1, endPage - maxPageNumbers + 1);
    }

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };
console.log("BlogsdataJosn",BlogsdataJosn[0]);

  return (
    <>
      <Helmet>
        <title>
          Real Estate Insights & Property Trends | Global Edifice Blogs
        </title>
        <meta
          name="description"
          content="Discover expert real estate tips, market trends, and home buying insights at Global Edifice Blogs Stay informed and make smarter property investment decisions"
          data-rh="true"
        />
      </Helmet>
      <div className="Gavityblogpage-main-page-head">
        <div className="Blogs-banner-background">
          <HomeNavbar />
          <div className="Gavityblogpage-main-sub">
            <h5>The Blogs</h5>
          </div>
        </div>
        <div className="container-lg">
          <div className="Blogs-page-main-parent">
            <div className="Gavityblogpage-popular-word">
              <h5>Popular Post</h5>
            </div>
            {BlogsdataJosn.length > 0 && (
              <div className="row Gavityblogpage-block-two-main">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="Gavityblogpage-block-two-popular-img">
                    <img
                      src={BlogsdataJosn[0].mainimage}
                      alt={BlogsdataJosn[0].title}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="Gavityblogpage-block-two-popular-lines">
                    <h4>
                      {BlogsdataJosn[0].title
                        ? BlogsdataJosn[0].title.slice(0, 100) + "..."
                        : BlogsdataJosn[0].title}
                    </h4>
                    <p>
                      {BlogsdataJosn[0].description
                        ? BlogsdataJosn[0].description.slice(0, 500) + "..."
                        : BlogsdataJosn[0].description}
                    </p>
                    <div className="Gavityblogpage-block-two-popular-arrow-logo">
                      <Link to={`/blog/${BlogsdataJosn[0].slug}`}>
                        <img src="gavityphotos/Arrowimg.svg" alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="Gavityblogpage-popular-word">
              <h5>Articles & News</h5>
            </div>
            <div className="row Gavityblogpage-Articles-News-main">
              {currentPosts.map((post) => (
                <div key={post.id} className="col-lg-4 col-sm-6 col-md-6">
                  <div className="Gavityblogpage-Articles-card-main">
                    <div className="Gavityblogpage-Articles-card-img">
                      <img src={post.mainimage} alt="" />
                      <h6 className="blogs-category-badge">{post.category}</h6>
                    </div>
                    <h4>
                      {post.title
                        ? post.title.slice(0, 50) + "..."
                        : post.title}
                    </h4>
                    <div className="Gavityblogpage-Articles-card-date-and-arrow">
                      <p>{post.date}</p>
                      <div className="Gavityblogpage-block-two-popular-arrow-logo-two">
                        <Link to={`/blog/${post.slug}`}>
                          <img src="gavityphotos/Arrowimg.svg" alt="" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="pagination">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                ‹
              </button>
              {getPageNumbers().map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={page === currentPage ? "active" : ""}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                ›
              </button>
            </div>
          </div>
        </div>
        <WhatsappAction />
        <Footer />
      </div>
    </>
  );
};

export default Blogs;
