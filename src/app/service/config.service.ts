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
  gameCols: ITableCol[] = [
    { key: '_id', text: '#', visible: false },
    { key: 'year', text: 'Release Date', visible: false },
    { key: 'title', text: 'Title', visible: true },
    { key: 'description', text: 'Description', visible: false },
    { key: 'price', text: 'Price', visible: true },
    { key: 'pieces', text: 'Pieces', visible: false },
    { key: 'lastAvaiable', text: 'Avaiable', visible: false },
  ];
  constructor() {}
}
