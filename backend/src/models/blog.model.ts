import {belongsTo, Entity, model, property} from '@loopback/repository';
import {User} from './user.model';

@model()
export class Blog extends Entity {

  @property({
    type: 'date',
    required: true,
  })
  created: string;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
    required: true,
  })
  content: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @belongsTo(() => User)
  userId: string;



  constructor(data?: Partial<Blog>) {
    super(data);
  }
}

export interface BlogRelations {
  // describe navigational properties here
}

export type BlogWithRelations = Blog & BlogRelations;
