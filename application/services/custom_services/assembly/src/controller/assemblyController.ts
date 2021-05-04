import { Request, Response } from 'express';
import { assemblyService } from '../service/assemblyService';
import { CustomLogger } from '../config/Logger'
let assembly = new assemblyService();

export class assemblyController {
    
    constructor() { }
    
    public GpGetAllValues(req: Request, res: Response) {
assembly.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into assemblyController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from assemblyController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
assembly.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into assemblyController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from assemblyController.ts: GpCreate');
    })}


}