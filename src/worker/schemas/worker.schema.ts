import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Address } from './address.schema.js';
import { Document } from 'mongoose';

@Schema()
export class Worker extends Document {
  @Prop()
  name: string;
  @Prop({ type: Address })
  address: Address;
}

export const WorkerSchema = SchemaFactory.createForClass(Worker);
