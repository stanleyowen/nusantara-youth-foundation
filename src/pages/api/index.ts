import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
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
}
