import React from "react";

export default function SingleArticle({ img }) {
  return (
    <div className="article">
      <img className="articleImg" src={img} alt="img" />
      Articulo
    </div>
  );
}
