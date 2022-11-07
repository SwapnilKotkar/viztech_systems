import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import db from '../../lib/mongodb'
import admin from '../../models/adminSchema'

const signin = async (req, res) => {
  const {email, password} = req.body;

  try {
      db();

      const user = await admin.findOne({ email: email })

      if(!user) return res.status(404).json({message: "User doesn't exist."})

      const isPasswordCorrect = await bcrypt.compare(password, user.password);

      if(!isPasswordCorrect) return res.status(400).json({message: "Invalid Credentials."})

      const token = jwt.sign({email: user.email, id: user._id}, process.env.JWT_SECRET_KEY, { expiresIn: "10d" })

      res.status(200).json({ result: user._id, token })

      
  } catch (error) {
      res.status(500).json({ message: 'something went wrong' })
      console.log(error)
  }
}

export default signin