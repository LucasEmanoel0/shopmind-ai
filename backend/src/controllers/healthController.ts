import { Request, Response } from "express";

export default class HealthController {

      showHealth(req: Request, res: Response) {

        res.status(200).json({ status: 'ok' });
      }

 
}