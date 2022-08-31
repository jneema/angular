import { Component, OnInit } from '@angular/core';
import { Expense } from './expense-model';
import { FormGroup, FormControl } from '@angular/forms';
import { ExpensesService } from '../servicesFolder/expenses.service';
@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})


export class ExpenseComponent implements OnInit {
 
  checker : boolean = true;

 
  constructor(private injectExpensesService : ExpensesService) { 
   
  }

formGroup = new FormGroup({
  name : new FormControl(""),
  amount: new FormControl(""),
  category: new FormControl(""),
  date: new FormControl("")
})

obj:any ={}

dispName() {
  console.log(this.formGroup.value)
  this.obj = this.formGroup.value 
  
  this.injectExpensesService.greetings(this.formGroup.value);


}
  ngOnInit(): void { 
  }
}
