import React from "react";

export default function SingleArticle({ img, key, headline, subtitle }) {
  return (
    <div className="article">
      <img className="articleImg" src={img} alt="img" />

      <p>
        {headline} {subtitle}
      </p>
    </div>
  );
}
