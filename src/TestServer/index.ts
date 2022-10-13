import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

function app() {
  dotenv.config();
  const obj = { id: 'chichoon', nickname: '치춘' };
  const token = jwt.sign(obj, process.env.JWT_SECRET as string, {
    issuer: 'chichoon',
    jwtid: 'asd',
    subject: 'asd',
  });
  console.log(token);
  console.log(jwt.decode(token + 1, { json: true }));
}

app();
