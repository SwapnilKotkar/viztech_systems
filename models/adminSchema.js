import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
  email: String,
  password: String,
});

const Admin = mongoose.models.ADMIN || mongoose.model('ADMIN', adminSchema);

export default Admin;