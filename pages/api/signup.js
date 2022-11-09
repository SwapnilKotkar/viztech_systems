import { signupAdmin } from '../../database/controllers'

const signup = async (req, res) => {
  signupAdmin(req, res);
};

export default signup