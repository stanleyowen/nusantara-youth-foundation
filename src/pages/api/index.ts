import { NextApiRequest, NextApiResponse } from "next";
import rateLimitMiddleware from "@/utils/rate-limit";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  rateLimitMiddleware(req, res, () => {
    res.status(200).send(
      JSON.stringify(
        {
          statusCode: 200,
          statusMessage: "OK",
          environment: process.env.NODE_ENV,
          message: "Server is running",
        },
        null,
        2
      )
    );
  });
}
