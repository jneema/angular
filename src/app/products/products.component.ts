import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from './products.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogueComponent } from '../dialogue/dialogue/dialogue.component';
import { MakeSaleComponent } from '../dialogue/make-sale/make-sale.component';
import { EditComponent } from '../dialogue/edit/edit.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any[] = []
  addproduct: any
  activatedRoute: any;
  name: any
  bp: any
  sp: any
  serial_no: any
  newProduct: any

  constructor(private service:ProductsService, 
    private dialog: MatDialog) { 
    this.get()
  }

  get () {
    this.service.getProducts().subscribe(
      (data: any)=> {this.products=data
        console.log("Product items", data)
      }
    );
  }

  getOne (id: any) {
    let currentProduct = this.products.find((p) => {return p.id === id});

    this.newProduct = currentProduct
    console.log("Current Product Details:",this.newProduct) 
   
    this.dialog.open(EditComponent,
      {data:this.newProduct,
        minWidth:"400px",disableClose:false
      })
      }
   
 
  post (Products: any) {
    this.addproduct = Products.value
    this.service.postProducts(this.addproduct).subscribe
    (productitems =>{
      console.log("Product Added", productitems)
      alert(productitems)

    });
  }

  

  openDialog() {
  // config dialog method1:
  const dialogConfig=new MatDialogConfig();
  dialogConfig.disableClose=false
  dialogConfig.autoFocus=true
  dialogConfig.hasBackdrop=true
  // dialogConfig.width="700"
  // dialogConfig.minWidth="60%"
  // open target component file
  this.dialog.open(DialogueComponent, dialogConfig)
  }

  openMakeSale () {
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=false
    dialogConfig.autoFocus=true
    dialogConfig.hasBackdrop=true
    this.dialog.open(MakeSaleComponent, dialogConfig)

  }

  openEdit (id:any) {
    
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=false
    dialogConfig.autoFocus=true
    dialogConfig.hasBackdrop=true
    this.dialog.open(EditComponent, dialogConfig)

  }

  
  ngOnInit(): void {
  }


}

