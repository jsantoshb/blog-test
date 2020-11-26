import {belongsTo, Entity, hasMany, model, property} from '@loopback/repository';
import {Blog} from './blog.model';
import {Department} from './department.model';
import {Role} from './role.model';

@model()
export class User extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @belongsTo(() => Role)
  roleId: string;

  @belongsTo(() => Department)
  departmentId: string;

  @hasMany(() => Blog)
  blogs: Blog[];

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
