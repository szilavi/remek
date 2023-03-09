import { Injectable } from '@angular/core';

export interface ITableCol {
  key: string;
  text: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  productCols: ITableCol[] = [
    { key: '_id', text: '#', visible: false },
    { key: 'gameId', text: 'Game', visible: true },
    { key: 'seller', text: 'Shop', visible: true },
    { key: 'added', text: 'Added', visible: false },
    { key: 'status', text: 'Status', visible: false },
    { key: 'description', text: 'Description', visible: false },
    { key: 'price', text: 'Price', visible: true },
  ];
  constructor() {}
}
