import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.scss'],
})
export class MoreInfoComponent {
  productService: ProductService = inject(ProductService);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);

  date = new Date();

  product$: Observable<Product> = this.activatedRoute.params.pipe(
    switchMap((params) => this.productService.get(params['id']))
  );

  daysSinceAdded(dateString: any): number {
    const addedDate = new Date(dateString);
    const today = new Date();
    const differenceTime = today.getTime() - addedDate.getTime();
    const differenceDays = Math.round(differenceTime / (1000 * 3600 * 24));
    return differenceDays;
  }

  buyNow(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.router.navigateByUrl(`/store/buy-now/${id}`);
  }
}
