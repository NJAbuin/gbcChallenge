import React from "react";
import SingleArticle from "./SingleArticle";

export default function Articles({ articles }) {
  return (
    <div>
      <h1 className="articleTitle">Acumulado Grilla</h1>
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
