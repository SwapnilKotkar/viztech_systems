import db from "../../database/mongodb";
import { signupAdmin } from "../../database/controllers";

const signup = async (req, res) => {
  db().catch((error) => res.status(405).json({ database_error: error }));
  signupAdmin(req, res);
};

export default signup;
