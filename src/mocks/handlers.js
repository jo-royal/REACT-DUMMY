import { http } from 'msw';

export const handlers = [
    http.get('http://localhost:3000/api/products', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([])
    );
  }),
];
