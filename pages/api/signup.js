import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import { signupAdmin } from '../../database/controllers'

const signup = async (req, res) => {
  signupAdmin(req, res);
};

export default signup