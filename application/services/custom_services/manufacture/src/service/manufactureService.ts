import { Request, Response } from 'express';
import {manufactureDao} from '../dao/manufactureDao';
import { CustomLogger } from '../config/Logger'
let manufacture = new manufactureDao();

export class manufactureService {
    
    constructor() { }
    
    public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into manufactureService.ts: GpCreate')
     const  manufactureData = req.body;
     manufacture.GpCreate(manufactureData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from manufactureService.ts: GpCreate')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into manufactureService.ts: GpGetAllValues')
     
     manufacture.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from manufactureService.ts: GpGetAllValues')
         callback(response);
         });
    }


}