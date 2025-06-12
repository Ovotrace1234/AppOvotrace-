import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['cliente', 'productor'], default: 'cliente' },
  farmName: String, // opcional para productor
  location: String,
});

export default mongoose.model('User', userSchema);
