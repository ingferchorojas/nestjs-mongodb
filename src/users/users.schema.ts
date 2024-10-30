import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  constructor(email: string, password: string) {
    super();
    this.email = email;
    this.password = password;
  }
}

export const UserSchema = SchemaFactory.createForClass(User);
