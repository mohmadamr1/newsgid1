import React from "react";
import { Link } from "react-router-dom";

export default function ArticleBox({
  articleClassName,
  imageSource,
  imageDirectionAfterParagraph,
  altImageSource,
  title,
  titleClassName,
  subTitle,
  linkSource,
  content,
}) {
  return (
    <>
      <article className={articleClassName}>
        {imageSource && !imageDirectionAfterParagraph ? <img src={imageSource} alt={altImageSource} /> : null }
        <div>
          <div class={titleClassName}>{title}</div>
          <h3>
            <Link to={linkSource}>{subTitle}</Link>
          </h3>
          <p>{content}</p>
        </div>
        {imageSource && imageDirectionAfterParagraph ? <img src={imageSource} alt={altImageSource} /> : null }
      </article>
    </>
  );
}
