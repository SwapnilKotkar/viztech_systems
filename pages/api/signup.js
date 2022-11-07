import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import db from "../../lib/mongodb";
import admin from "../../models/adminSchema";

const signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    db();

    const user = await admin.findOne({ email: email });

    if (user) return res.status(400).json({ message: "User already exist." });

    const hashedPassword = await bcrypt.hash(password, 12)

    const newUser = await admin.create({ email: email, password: hashedPassword });

    const token = jwt.sign({email: newUser.email, id: newUser._id}, process.env.JWT_SECRET_KEY, { expiresIn: "10d" })

    res.status(200).json({ result: newUser, token })

  } catch (error) {
    res.status(500).json({ message: 'something went wrong' })
    console.log(error)
  }
};

export default signup