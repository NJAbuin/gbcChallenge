import React from "react";
import SingleArticle from "./SingleArticle";
import { tagSort } from "../../utils";

export default function Articles({ articles }) {
  let sortedTags = tagSort(articles);

  return (
    <div>
      <h1 className="articleTitle">Acumulado Grilla</h1>
      <p className="tags">
        {sortedTags.map(tag => {
          return (
            <a href={tag.url} className="tag">
              &nbsp; {tag.name}{" "}
              {tag.name != sortedTags[sortedTags.length - 1].name ? "·" : ""}
            </a>
          );
        })}
      </p>

      <div className="articles">
        {articles.map(article => {
          if (article.subtype == 7) {
            return (
              <a href={`${article.website_url}`}>
                <SingleArticle
                  key={article.id}
                  img={article.promo_items.basic.url}
                  headline={article.headlines.basic}
                  subtitle={article.promo_items.basic.subtitle}
                  date={article.display_date}
                />
              </a>
            );
          }
        })}
      </div>
    </div>
  );
}
