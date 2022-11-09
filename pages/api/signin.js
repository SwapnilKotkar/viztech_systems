import db from "../../database/mongodb";
import { signinAdmin } from '../../database/controllers'

const signin = async (req, res) => {
  db().catch((error) => res.status(405).json({ database_error: error }));
  signinAdmin(req, res);
}

export default signin