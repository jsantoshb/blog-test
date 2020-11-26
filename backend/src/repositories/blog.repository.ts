import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Blog, BlogRelations, User} from '../models';
import {MongoDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {UserRepository} from './user.repository';

export class BlogRepository extends DefaultCrudRepository<
  Blog,
  typeof Blog.prototype.id,
  BlogRelations
> {

  public readonly user: BelongsToAccessor<User, typeof Blog.prototype.id>;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource, @repository.getter('UserRepository') protected userRepositoryGetter: Getter<UserRepository>,
  ) {
    super(Blog, dataSource);
    this.user = this.createBelongsToAccessorFor('user', userRepositoryGetter,);
    this.registerInclusionResolver('user', this.user.inclusionResolver);
  }
}
