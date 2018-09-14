import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import bcrypt from 'bcrypt';

const SALT_WORK_FACTOR = 10;

function toLower (v) {
  return v.toLowerCase();
}

const UserSchema = new Schema({
  description:{
    type:String,
    set:toLower
  },
  codigo: {
    type:String
  }
},{
  timestamps:true
});


export default mongoose.model('destino', UserSchema);