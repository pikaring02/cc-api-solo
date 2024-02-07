const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);

const { setupServer } = require("../server");
const expect = chai.expect;
chai.should();

// const server = setupServer();    //すでに上がってる！

describe("Otoshidama API Server", () => {
  let request;
  beforeEach(() => {
    // request = chai.request(server);  //すでに上がってる！
  });

  describe("GET /api/otoshidama", () => {
    it("should GET otoshidama", async () => {
      // const res = await request.get("/");
      // const res = await chai.request(server).get("/api/otoshidama");
      const res = await chai
        .request("http://localhost:3000")
        .get("/api/otoshidama");
      // console.log(res);
      res.should.be.json;
      // console.log(res.body);
    });
  });

  //insert into "yearlyOtoshidama" ("kingaku", "year") values (DEFAULT, DEFAULT)
  // - リレーション"yearlyOtoshidama"の列"year"のNULL値が非NULL制約に違反しています
  describe("POST /api/otoshidama", () => {
    it("should POST otoshidama", async () => {
      const res = await chai
        .request("http://localhost:3000")
        .post("/api/otoshidama")
        // .set('content-type', 'application/x-www-form-urlencoded')
        // .type("form")    //あると通らない！！！
        .send({
          "year": "2026",
          "kingaku": "60000"
        });
      res.should.be.json;
    });
  });

  describe("PATCH /api/otoshidama", () => {
    it("should PATCH otoshidama", async () => {
      const res = await chai
        .request("http://localhost:3000")
        .patch("/api/otoshidama")
        .send({
          "year": "2026",
          "kingaku": "600000"
        });
      res.should.be.json;
    });
  });

  describe("DELETE /api/otoshidama", () => {
    it("should DELETE otoshidama", async () => {
      const res = await chai
        .request("http://localhost:3000")
        .delete("/api/otoshidama")
        .send({
          "year": "2026"
        });
      res.should.be.json;
    });
  });


});
