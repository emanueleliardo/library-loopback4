import { Entity, model, property } from '@loopback/repository';

@model()
export class Book extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  _id?: string;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
  })
  category?: string;

  constructor(data?: Partial<Book>) {
    super(data);
  }
}
