import {Entity, hasMany, model, property} from '@loopback/repository';
import {User} from './user.model';

@model()
export class Department extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'boolean',
    default: false,
  })
  isAdmin?: boolean;

  @property({
    type: 'date',
  })
  created?: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @hasMany(() => User)
  users: User[];

  constructor(data?: Partial<Department>) {
    super(data);
  }
}

export interface DepartmentRelations {
  // describe navigational properties here

}

export type DepartmentWithRelations = Department & DepartmentRelations;
