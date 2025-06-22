// Folder: /backend

// File: server.ts (Entry point for Express API using TypeScript)
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/auth.routes';
import candidateRoutes from './routes/candidate.routes';

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/candidates', candidateRoutes);

// Connect to DB and start server
mongoose.connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(5000, () => console.log('Server running on port 5000'));
  })
  .catch((err) => console.error(err));


// Folder: /backend/models

// File: User.model.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  phone: string;
  password: string;
  role: 'manager' | 'hr' | 'agent' | 'operation' | 'reception';
}

const userSchema: Schema = new Schema({
  name: String,
  email: String,
  phone: String,
  password: String,
  role: { type: String, enum: ['manager', 'hr', 'agent', 'operation', 'reception'], required: true },
}, { timestamps: true });

export default mongoose.model<IUser>('User', userSchema);


// File: Candidate.model.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface ICandidate extends Document {
  fullName: string;
  passportNumber: string;
  phone: string;
  email: string;
  positionApplied: string;
  appliedCountry: string;
  status: string;
  assignedAgent: mongoose.Types.ObjectId;
  documents: {
    cv: string;
    passportCopy: string;
    photo: string;
  };
  interviewDate: Date;
  visaStatus: string;
}

const candidateSchema: Schema = new Schema({
  fullName: String,
  passportNumber: String,
  phone: String,
  email: String,
  positionApplied: String,
  appliedCountry: String,
  status: { type: String, enum: ['registered', 'shortlisted', 'selected', 'rejected', 'deployed'] },
  assignedAgent: { type: Schema.Types.ObjectId, ref: 'User' },
  documents: {
    cv: String,
    passportCopy: String,
    photo: String,
  },
  interviewDate: Date,
  visaStatus: { type: String, enum: ['pending', 'approved', 'rejected'] },
}, { timestamps: true });

export default mongoose.model<ICandidate>('Candidate', candidateSchema);


// Folder: /backend/routes

// File: auth.routes.ts
import express from 'express';
const router = express.Router();

// Dummy login route
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  // Normally use JWT/Auth logic
  res.json({ message: 'Login successful', token: 'dummy_token' });
});

export default router;


// File: candidate.routes.ts
import express from 'express';
import Candidate from '../models/Candidate.model';
const router = express.Router();

// Get all candidates
router.get('/', async (req, res) => {
  const candidates = await Candidate.find().populate('assignedAgent');
  res.json(candidates);
});

// Add a new candidate
router.post('/', async (req, res) => {
  const newCandidate = new Candidate(req.body);
  await newCandidate.save();
  res.status(201).json(newCandidate);
});

export default router;
