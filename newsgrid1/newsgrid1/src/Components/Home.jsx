import React from "react";
import ShowCase from "./ShowCase";
import ArticleBox from "./ArticleBox";
import { articleBoxes } from "../data.js";
export default function Home() {
  return (
    <>
      <ShowCase />
      <section id="home-articles" class="py-2">
        <div class="container">
          <h2>Editor Picks</h2>
          <div class="articles-container">
            {articleBoxes.map((articleBox, index) => {
              return (
                <ArticleBox
                  key={index}
                  articleClassName={articleBox.articleClassName}
                  imageDirectionAfterParagraph={
                    articleBox.imageDirectionAfterParagraph
                  }
                  imageSource={articleBox.imageSource}
                  altImageSource={articleBox.altImageSource}
                  title={articleBox.title}
                  titleClassName={articleBox.titleClassName}
                  subTitle={articleBox.subTitle}
                  linkSource={articleBox.linkSource}
                  content={articleBox.content}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
