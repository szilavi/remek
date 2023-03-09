export class Product {
  _id: string = '';
  gameId: string = '';
  seller: string = '';
  added: Date = new Date();
  status: string = '';
  description?: string = '';
  price?: number = 0;
  [propName: string]: any;
}
