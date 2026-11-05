import { Request, Response } from "express";
import checkSocketCompatibility from "../services/CompatibilityService.js";

export default class CompatibilityController {



     async checkSocketCompatibility(req:Request, res:Response) {
          

        let { cpuId, motherboardId } = req.body;
        cpuId = Number(cpuId);
        motherboardId = Number(motherboardId);

        if(!Number.isInteger(cpuId) || !Number.isInteger(motherboardId)) {
            res.status(400).json({ error: "CPU or Motherboard ID must be an integer" });
            return;
        }


        if (cpuId <= 0 || motherboardId <= 0) {
            res.status(400).json({ error: "CPU or Motherboard ID must be greater than 0" });
            return;
        }

        try{
            let result  = await checkSocketCompatibility(cpuId, motherboardId)
             res.status(200).json({ compatible: result });
             return
        } catch (error) {
            if(error instanceof Error && error.message === "CPU or Motherboard not found") {
                return res.status(404).json({ error: error.message });
            }
            return res.status(500).json({ error: "Internal Server Error" });
        }


     }
}