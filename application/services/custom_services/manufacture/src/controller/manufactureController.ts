import { Request, Response } from 'express';
import { manufactureService } from '../service/manufactureService';
import { CustomLogger } from '../config/Logger'
let manufacture = new manufactureService();

export class manufactureController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
manufacture.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into manufactureController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from manufactureController.ts: GpCreate');
    })}
public GpGetAllValues(req: Request, res: Response) {
manufacture.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into manufactureController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from manufactureController.ts: GpGetAllValues');
    })}


}