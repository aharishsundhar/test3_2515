import { Request, Response } from 'express';
import {assemblyDao} from '../dao/assemblyDao';
import { CustomLogger } from '../config/Logger'
let assembly = new assemblyDao();

export class assemblyService {
    
    constructor() { }
    
    public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into assemblyService.ts: GpGetAllValues')
     
     assembly.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from assemblyService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into assemblyService.ts: GpCreate')
     const  assemblyData = req.body;
     assembly.GpCreate(assemblyData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from assemblyService.ts: GpCreate')
         callback(response);
         });
    }


}