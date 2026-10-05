import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as mongooseSchema } from 'mongoose';
import { Profile } from './profile.schema.js';

@Schema()
export class Employee extends Document {
  @Prop()
  name: string;
  @Prop({ type: mongooseSchema.Types.ObjectId, ref: 'Profile' })
  profile: Profile;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
