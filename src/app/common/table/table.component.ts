import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { SymbolPipe } from 'src/app/pipe/symbol.pipe';
import { ConfigService, ITableCol } from 'src/app/service/config.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [SymbolPipe],
})
export class TableComponent implements OnInit {
  config: ConfigService = inject(ConfigService);
  productService: ProductService = inject(ProductService);

  list$: Observable<Product[]> = this.productService.getAll();

  cols: ITableCol[] = this.config.productCols;

  public loadingDots = '';

  ngOnInit() {
    setInterval(() => {
      this.loadingDots += '.';
      if (this.loadingDots.length > 3) {
        this.loadingDots = '';
      }
    }, 200);
  }

  getFilteredCols() {
    return this.cols.filter((col) => col.visible);
  }
}
