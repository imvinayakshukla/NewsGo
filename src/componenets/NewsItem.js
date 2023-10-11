import React, { Component } from "react";

const NewsItem = (props) => {


  let alt_imag =
    "https://images.wondershare.com/repairit/aticle/2021/07/resolve-images-not-showing-problem-1.jpg";
  let { title, description, imageURL, newURL, author, date, source } = props;
  return (
    <div className="card" style={{ width: " 18rem" }}>
      <img
        src={imageURL ? imageURL : alt_imag}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">
          {title}
          <span
            class="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
            style={{
              left: "18%",
              zIndex: "1",
            }}
          >
            {source}
          </span>
        </h5>
        <p className="card-text">{description}...</p>
        <p class="card-text">
          <small class="text-body-secondary">
            By {author} at {date}
          </small>
        </p>
        <a href={newURL} target="_blank" className="btn btn-sm btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
