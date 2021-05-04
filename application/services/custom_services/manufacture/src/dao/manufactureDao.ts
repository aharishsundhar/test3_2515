import * as mongoose from 'mongoose';
import manufactureModel from '../models/manufacture';
import { CustomLogger } from '../config/Logger'


export class manufactureDao {
    private manufacture = manufactureModel;
    constructor() { }
public GpCreate(manufactureData, callback){
new CustomLogger().showLogger('info', 'Enter into manufactureDao.ts: GpCreate')
let temp = new manufactureModel(manufactureData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from manufactureDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into manufactureDao.ts: GpGetAllValues')

this.manufacture.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from manufactureDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}


}