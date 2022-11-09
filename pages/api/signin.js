import { signinAdmin } from '../../database/controllers'

const signin = async (req, res) => {
  signinAdmin(req, res);
}

export default signin