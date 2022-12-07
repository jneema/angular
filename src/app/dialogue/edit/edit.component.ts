import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ProductsService } from 'src/app/products/products.service';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent {

  products: any[] = []
  updateproduct: any

  constructor (private service:ProductsService, private route: ActivatedRoute, public dclose:MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) {
      this.formGroup.setValue({
        id: this.data.id,
        name: this.data.name,
        bp: this.data.bp,
        sp: this.data.sp,
        serial_no: this.data.serial_no
      })
    }
 
  
  formGroup =new FormGroup({
    id: new FormControl(""),
    name: new FormControl(""),
    bp: new FormControl(""),
    sp: new FormControl(""),
    serial_no: new FormControl("")
  
  })


  updateDetails(form: any): void {
    console.log(form.value)
    this.service.putProduct(this.data.id ,form.value).subscribe
    (productitems => {
      console.log("Product Edited", productitems)
      this.products.push(productitems)
    })
    // this.service.putProduct(this.data.id, this.data.value)
  }

  ngOnInit(): void {  }

}
