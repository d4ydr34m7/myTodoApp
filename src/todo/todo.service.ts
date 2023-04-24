import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {Todo, TodoDocument} from '../entities/todo.entity';
import { CreateTodoDto } from '../dto/create-todo.dto';



@Injectable()
export class TodoService {
    constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {}


    async create(createTaskDto: CreateTodoDto): Promise<Todo> {
        const task = new this.todoModel(createTaskDto);
        return task.save();
      }
    
      async findAll(): Promise<Todo[]> {
        return this.todoModel.find().exec();
      }

      async update(id: string, isDone: boolean): Promise<Todo> {
        const todo = await this.todoModel.findById(id).exec();
        console.log(todo,"***************");
        if (!todo) {
          throw new Error('Todo not found');
        }
        todo.isDone = isDone;
        return todo.save();
    }
    
}


