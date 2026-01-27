import { describe, it, expect, beforeEach } from "vitest";
import request from "supertest";
import { app } from "../../express";

// describe("Words", () => {
//   beforeEach(async () => {
//     await connectToDatabase();
//   });

//   it("should return a list of words", async () => {
//     const res = await request(app).get("/words");
//     expect(res.body).toEqual([]);
//   });
// });
