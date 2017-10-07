import {} from "jest";
import * as supertest from "supertest";
const request = supertest("http://localhost:8000");

describe("POST /post/submit", () => {
  it("should return 200 OK", (done) => {
    request.get("/post/submit")
      .expect(200, done);
  });
});

describe("GET /post/create", () => {
  it("should return 200 OK", (done) => {
    request.get("/post/create")
      .expect(200, done);
  });
});