import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://shreya7187:S%40sh2015@mycluster.b8ncoxr.mongodb.net/mytodoapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }), TodoModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
