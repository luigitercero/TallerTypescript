import {Router, Request, Response } from 'express';
import path = require('path');
const router = Router();

router.get('/',(req: Request,res:Response)=>{
  res.sendFile(path.join(__dirname,'..','..','www','index.html'))
})

router.get('/compi',(req: Request,res:Response)=>{
  res.sendFile(path.join(__dirname,'..','..','www','compilador.html'))
})


export default router;