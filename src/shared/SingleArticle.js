import React from "react";
import { UTCtoSpanishDateParser } from "../../utils";

export default function SingleArticle({ img, key, headline, subtitle, date }) {
  return (
    <div className="article">
      <img className="articleImg" src={img} alt="img" />

      <p className="articleText">
        <strong> {headline}. </strong>
        {subtitle}
        <br />
        <font size="2" className="articleDate">
          {" "}
          {UTCtoSpanishDateParser(date)}
        </font>
      </p>
    </div>
  );
}
