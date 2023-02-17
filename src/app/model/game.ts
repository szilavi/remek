export class Game {
  _id: string = '';
  year: Date = new Date();
  title: string = '';
  description: string = '';
  price: number = 0;
  pieces: number = 0;
  lastAvaiable: Date = new Date();
  [propName: string]: any;
}
