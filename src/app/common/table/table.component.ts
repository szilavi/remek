import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from 'src/app/model/game';
import { ConfigService, ITableCol } from 'src/app/service/config.service';
import { GameService } from 'src/app/service/game.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  config: ConfigService = inject(ConfigService);
  gameService: GameService = inject(GameService);

  list$: Observable<Game[]> = this.gameService.getAll();

  cols: ITableCol[] = this.config.gameCols;

  getFilteredCols() {
    return this.cols.filter((col) => col.visible);
  }
}
