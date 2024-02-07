const express = require("express");
const db = require("./db/db");

const setupServer = () => {
  const app = express();
  app.use(express.json());

  //DB: user=postgres, pass=password

  app.get("/api/otoshidama", async (req, res) => {
    // console.log("get");
    const otoshidamas = await db
      .select("id", "year", "kingaku")
      .from("yearlyOtoshidama");
    // console.log(otoshidamas);
    res.json(otoshidamas);
  });

  app.post("/api/otoshidama", async (req, res) => {
    console.log("post");
    console.log(req.body.year)
    //   const newOtoshidama = { year: "2023", kingaku: "10000" };
    const newOtoshidama = { year: req.body.year, kingaku: req.body.kingaku };
    //   const insertedRow = await db("yearlyOtoshidama").insert({'year':2000, 'kingaku': 100});
    const insertedRow = await db("yearlyOtoshidama").insert(newOtoshidama);
    res.json(insertedRow);
  });

  app.patch("/api/otoshidama", async (req, res) => {
    console.log("patch");
    const result = await db("yearlyOtoshidama")
      .update({ kingaku: req.body.kingaku })
      .where({ year: req.body.year });
    res.json(result);
  });

  app.delete("/api/otoshidama", async (req, res) => {
    console.log("delete");
    const result = await db("yearlyOtoshidama").where({ year: req.body.year }).del();
    res.json(result);
  });

  app.listen(3000, () => {
    console.log("Solo server is running on port 3000!!");
  });

  return app;

};

// setupServer(); //このサーバー起動はindex.jsに移動し、本ファイルは定義のみとする

module.exports = { setupServer };
