import { rest } from "msw";

const postsMock = rest.get(
  "https://jsonplaceholder.typicode.com/posts",
  (req, res, ctx) => {
    return res(
      ctx.status(400),
      ctx.json([
        { id: 1, name: "Claudia" },
        { id: 2, name: "José" }
      ])
    );
  }
);

export const handlers = [postsMock];
