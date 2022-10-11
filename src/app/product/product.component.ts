import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private myapi:ApiService) {

    this.fetchData()
   }

  fetchData=()=>{
    this.myapi.viewProduct().subscribe(
      (data)=>{
        this.shopData=data
      }
    )
  }




  shopData:any=[]

  ngOnInit(): void {
  }

}
