import db from "../../../database/mongodb";

import { createResume, getResumes, deleteResume } from '../../../database/controllers'

export default async function handler(req, res) {
  db().catch((error) => res.status(405).json({ database_error: error }));

  // type of request
  const { method } = req;

  switch (method) {
    case "GET":
      getResumes(req, res);
      break;
    case "POST":
      createResume(req, res);
      break;
    case "DELETE":
      deleteResume(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
