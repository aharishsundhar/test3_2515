import * as mongoose from 'mongoose';
import assemblyModel from '../models/assembly';
import { CustomLogger } from '../config/Logger'


export class assemblyDao {
    private assembly = assemblyModel;
    constructor() { }
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into assemblyDao.ts: GpGetAllValues')

this.assembly.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from assemblyDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(assemblyData, callback){
new CustomLogger().showLogger('info', 'Enter into assemblyDao.ts: GpCreate')
let temp = new assemblyModel(assemblyData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from assemblyDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}