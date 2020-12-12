const app = require('../app');
const supertest = require("supertest");
const { stopDatabase } = require('../config/database');
 
const request = supertest(app);
 
afterAll(async () => {
  await stopDatabase();
});


describe('GET USER BY ID', () => {

  it("get user success", (done) => {
    request.get('/')
      .send({
        query: `{ User(id: "5fd48f090d4d182be806709c"){_id, first_name, last_name, email, nationalin, birth_date, gender} }`
      })
      .set("Accept", "application/json")
      .end((err, res) => {
        if (err) return done(err)
        // console.log(res.body, res.status, "<< succes fetch users");
        expect(200)
        expect(res.body).toBeInstanceOf(Object);
        done();
      })
  });

  it("get user fail", (done) => {
    request.get('/')
      .send({
        query: `{ User(id: "5fd48f090d4d182be80670923"){_id, first_name, last_name, email, nationalin, birth_date, gender} }`
      })
      .set("Accept", "application/json")
      .end((err, res) => {
        // console.log(res.body, "<< fail fetch");
        if (err) return done(err)
        expect(res.body.data.User).toBe(null);
        expect(400)
        done()
      })
  })

})

describe('REGISTER USER', () => {

  it("Register success", (done) => {
  
    request.post('/')
      .send({
        query: "mutation { Register(payload: { first_name: \"User\" last_name: \"user\" email: \"user@mail.com\" password: \"user\" nationalin: \"indonesian\" birth_date: \"01/01/2000\" gender: \"male\"}) {_id first_name last_name email nationalin birth_date gender}}"
      })
      .set("Accept", "application/json")
      .end((err, res) => {
        if (err) return done(err)
        // console.log(res.body, res.status, "<< regis success");
        expect(res.status).toBe(200)
        expect(res.body).toBeInstanceOf(Object);
        done();
      })
  })

  it("Register failed", (done) => {

    request.post('/')
      .send({
        query: "mutation { Register(payload: { first_name: 10 last_name: \"user\" email: \"user@mail.com\" password: \"user\" nationalin: \"indonesian\" birth_date: \"01/01/2000\" gender: \"male\"}) {_id first_name last_name email nationalin birth_date gender}}"
      })
      .set("Accept", "application/json")
      .end((err, res) => {
        if (err) return done(err)
        // console.log(res.body, res.status, "<< register failed");
        expect(res.status).toBe(400)
        expect(res.body).toBeInstanceOf(Object);
        done();
      })

  })

})

describe("Login user", () => {

  it('Login success', (done) => {
    request.post('/')
      .send({
        query: "mutation { Login(payload: {email: \"user@mail.com\" password: \"user\"} ) { token } }"
      })
      .set("Accept", "application/json")
      .end((err, res) => {
        if (err) return done(err)
        // console.log(res.body, res.status, "<< login success");
        expect(res.status).toBe(200)
        expect(res.body).toBeInstanceOf(Object);
        done();
      })
  })

  it('Login fail', (done) => {
    request.post('/')
    .send({
      query: "mutation { Login(payload: {email: \"user@mail.com\" password: \"user1\"} ) { token } }"
    })
    .set("Accept", "application/json")
      .end((err, res) => {
        if (err) return done(err)
        // console.log(res.body.errors[0], res.status, "<< login fail");
        expect(res.body.errors[0]).toBeInstanceOf(Object)
        done();
      })
  })

})
