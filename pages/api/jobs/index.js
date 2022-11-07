import db from "../../../database/mongodb";
import {
  getJobs,
  postJobs,
  putJob,
  deleteJob,
} from "../../../database/controllers";

export default async function handler(req, res) {
  db().catch((error) => res.status(405).json({ database_error: error }));

  // type of request
  const { method } = req;

  switch (method) {
    case "GET":
      getJobs(req, res);
      break;
    case "POST":
      postJobs(req, res);
      break;
    case "PUT":
      putJob(req, res);
      break;
    case "DELETE":
      deleteJob(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
