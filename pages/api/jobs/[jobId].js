import db from "../../../database/mongodb";
import { getJob } from "../../../database/controllers";

export default async function handler(req, res) {
  db().catch((error) => res.status(405).json({ database_error: error }));

  // type of request
  const { method } = req;

  switch (method) {
    case "GET":
      getJob(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
