import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../domain/iproduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  providers : []
})
export class ProductsListComponent implements OnInit {

  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  listFilter: string = '';

  products: IProduct[] ;

  constructor(private _service: ProductsService) { }  // Dependecy injection

  ngOnInit() {

   this._service.getAllProducts().subscribe(
      result => this.products = result,
      erreur => console.log('ATTENTION, Il y a eu l\'erreur : ' + erreur)
     );

  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  onRatingClicked(event): void {
        this.pageTitle = 'Product List: ' + event;
    }

}
