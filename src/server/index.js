import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import axios from "axios";
import morgan from "morgan";
import App from "../shared/App";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(morgan("tiny"));

app.get("*", async (req, res) => {
  const response = await axios.get(
    "https://api-test-ln.herokuapp.com/articles"
  );
  const articlesObj = response.data;
  res.send(`
        <!DOCTYPE html>
        <head>
          <title>Acumulado</title>
          <link rel="stylesheet" href="/css/main.css">
          <link rel="shortcut icon" href="./media/favicon.ico" />
          <script src="/bundle.js" defer></script>
        </head>
  
        <body>
          <div id="root">${renderToString(
            <App articles={articlesObj.articles} />
          )}</div>
        </body>
      </html>
    `);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
