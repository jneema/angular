import { Injectable } from '@angular/core';
import { Expense } from '../expense/expense-model';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor() { }


  expense: string = "Welcome"

  expenses : any = [];


  greetings(items: any) {
    this.expenses.push(items)
    console.log(this.expenses)
  }
}
