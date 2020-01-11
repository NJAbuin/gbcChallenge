import React from "react";
import SingleArticle from "./SingleArticle";

export default function Articles({ articles }) {
  return (
    <div className="articles">
      <h3>Acumulado Grilla</h3>

      {articles.map(article => {
        if (article.subtype == 7) {
          return (
            <SingleArticle
              key={article.id}
              img={article.promo_items.basic.url}
            />
          );
        }
      })}
    </div>
  );
}
