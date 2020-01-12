import React from "react";
import SingleArticle from "./SingleArticle";

export default function Articles({ articles }) {
  return (
    <div>
      <h2 className="articleTitle">Acumulado Grilla</h2>
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
                />
              </a>
            );
          }
        })}
      </div>
    </div>
  );
}
