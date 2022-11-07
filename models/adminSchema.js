import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
  email: String,
  password: String,
});

module.exports = mongoose.models.ADMIN || mongoose.model('ADMIN', adminSchema);