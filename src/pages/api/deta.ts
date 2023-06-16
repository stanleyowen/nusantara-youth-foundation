// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import rateLimitMiddleware from "@/utils/rate-limit";
import { fetchData, putData, deleteData } from "@/utils/deta";

type Callback = {
  statusCode: number;
  data: any;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  rateLimitMiddleware(req, res, () => {
    fetchData((cb: Callback) =>
      res.status(cb.statusCode).send(JSON.stringify(cb.data, null, 2))
    );
  });
}
