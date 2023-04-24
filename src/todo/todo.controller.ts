import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Todo } from '../entities/todo.entity';
import { TodoService } from './todo.service';
import { CreateTodoDto } from '../dto/create-todo.dto';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todoService.create(createTodoDto);
  }

  @Get()
  async findAll(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body('isDone') isDone: boolean): Promise<Todo> {
    return this.todoService.update(id, isDone);
}



}
