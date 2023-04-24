import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoDocument = Todo & Document;

@Schema({ collection: 'todos' })
export class Todo {
  @Prop({ required: true })
  text: string;

  @Prop({ default: false })
  isDone: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
