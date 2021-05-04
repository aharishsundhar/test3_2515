
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const manufactureSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: String,
   model: String,
   color: String
})

const manufactureModel = mongoose.model('manufacture', manufactureSchema, 'manufacture');
export default manufactureModel;
