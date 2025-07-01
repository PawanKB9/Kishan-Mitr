import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './Routes/UserRoute.js'
import connectDB from './Database/ConnectDB.js';
import cookieParser from 'cookie-parser';

dotenv.config();

const baseUrl = process.env.BASE_URL;

const app = express();

connectDB();

// CORS for frontend (React/Vite)
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(`/KishanMitr/api/user`, userRoutes);


app.post('/test' , async (req ,res ) => {
    console.log(req.body.message)
    return res.status(200).json({message : "Client and Server connected successfully!"})
})

app.listen(5000, () => {
  console.log('🚀 Server running on http://localhost:5000');
});

// app.post('/verify-otp', async (req, res) => {
  
//   const token = req.body.token;
//   // console.log(token);
//   if (!token) {
//     console.log('❌ No token provided');
//     return res.status(400).json({ error: 'Token is required' });
//   }

//   const msg91Url = 'https://control.msg91.com/api/v5/widget/verifyAccessToken';
//   const headers = {
//     'Content-Type': 'application/json',
//     Accept: 'application/json',
//   };
//   const body = {
//     "authkey": "456212AulaR1MHVKd684e5f8eP1", // ✅ Replace with ENV in real apps
//     'access-token': token,
//   };

//   try {
//     const response = await fetch(msg91Url, {
//       method: 'POST',
//       headers,
//       body: JSON.stringify(body),
//     });

//     const result = await response.json();
//     console.log('✅ MSG91 Response:', result);

//     if (result && result.type === 'success') {
//       return res.status(200).json({ verified: true, msg: result.message });
//     } else {
//       return res.status(401).json({
//         verified: false,
//         msg: result?.message || 'Authentication failed',
//         code: result?.code || 'Unknown',
//       });
//     }
//   } catch (err) {
//     console.error('❌ Exception during MSG91 verification:', err);
//     return res.status(500).json({ error: 'Internal server error' });
//   }
// });