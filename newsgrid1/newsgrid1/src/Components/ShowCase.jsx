import React from "react";
import { Link } from "react-router-dom";

export default function ShowCase() {
  return (
    <>
      <header id="showcase">
        <div class="container">
          <div class="showcase-container">
            <div class="showcase-content">
              <div class="category category-sports">Sports</div>
              <h1>Some Sports Article</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Possimus rerum officia quibusdam mollitia deserunt animi soluta
                laudantium. Quam sapiente a dolorum magnam necessitatibus quis
                tempore facere totam. Dolor, sequi distinctio!
              </p>
              <Link to="article" class="btn btn-primary">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
