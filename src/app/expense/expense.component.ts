import { Component, OnInit } from '@angular/core';
import { Expense } from './expense-model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})


export class ExpenseComponent implements OnInit {
  exp1: Expense = {
    id: 1,
    name: 'Home Rent',
    amount: 20000,
    category: 'General',
   date: 'string'
  };

  exp2: Expense = {
    id: 2,
    name: 'Shopping',
    amount: 1000,
    category: 'General',
   date: 'string'
  };

  expense: string = "Welcome"

  expenses : any = [];

  checker : boolean = true;

  sayMessage() {
    this.expense = "hi there welcome";
  }
  constructor() { 
    this.expenses.push(this.exp1);
    this.expenses.push(this.exp2);
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
  this.expenses.push(this.obj)
  console.log(this.expenses)


}
  ngOnInit(): void { }
}
