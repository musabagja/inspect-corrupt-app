const { app } = require('../app');
const supertest = require("supertest");
 
const request = supertest(app);

let server;
beforeAll( async () => {
  try {
    server = await app.listen(4100);
    return server
  } catch (error) {
    throw error
  }
});

afterAll( async () => {
  await server.close();
})

describe("GET NEWS", () => {

  it("get indonesian news", (done) => {
    request.get('/')
      .send({
        query: `{articles(country: "id") {author title description url urlToImage publishedAt content }}`
      })
      .set("Accept", "application/json")
      .end((err, res) => {
        if (err) return done(err)
        // console.log(res.body, res.status, "<< succes fetch news");
        expect(res.status).toBe(200);
        done();
      })
  })

  it("get indonesian news with data not null", (done) => {
    request.get('/')
      .send({
        query: `{articles(country: "id") {author title description url urlToImage publishedAt content }}`
      })
      .set("Accept", "application/json")
      .end((err, res) => {
        if (err) return done(err)
        // console.log(res.body.data.articles, "<< succes fetch news length");
        expect(res.body.data.articles).toHaveLength(20);
        done();
      })
  })

  it("get indonesian news with property key articles", (done) => {
    request.get('/')
      .send({
        query: `{articles(country: "id") {author title description url urlToImage publishedAt content }}`
      })
      .set("Accept", "application/json")
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body.data).toHaveProperty("articles", expect.any(Array));
        done();
      })
  })

  it("get new from another country", (done) => {
    request.get('/')
      .send({
        query: `{articles(country: "us") {author title description url urlToImage publishedAt content }}`
      })
      .set("Accept", "application/json")
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body).toBeInstanceOf(Object);
        done();
      })
  })

  it("get news with not available country", (done) => {
    request.get('/')
      .send({
        query: `{articles(country: "wakanda") {author title description url urlToImage publishedAt content }}`
      })
      .set("Accept", "application/json")
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body.data.articles).toHaveLength(0)
        done();
      })
  })

  it("get news from query searching with status 200", (done) => {
    request.get('/')
      .send({
        query: `{everything(q: "corruption") {author title description url urlToImage publishedAt content }}`
      })
      .set("Accept", "application/json")
      .end((err, res) => {
        if (err) return done(err)
        expect(res.status).toBe(200)
        done();
      })
  })

  it("get news from query searching with data not null", (done) => {
    request.get('/')
      .send({
        query: `{everything(q: "corruption") {author title description url urlToImage publishedAt content }}`
      })
      .set("Accept", "application/json")
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body.data.everything).toHaveLength(20)
        done();
      })
  })

})