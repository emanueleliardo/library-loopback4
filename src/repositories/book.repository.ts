import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Book } from '../models';
import { MongoDBDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class BookRepository extends DefaultCrudRepository<
  Book,
  typeof Book.prototype._id
  > {
  constructor(
    @inject('datasources.mongoDB') dataSource: MongoDBDataSource,
  ) {
    super(Book, dataSource);
  }
}
