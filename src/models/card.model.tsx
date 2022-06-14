export type TExpenses = {
  id: number;
  expenseCategory: string; //expense type with values FOOD, UTILITIES, TRANSPORT, CLOTHING, OTHER
  description: string; //string message describing the expense
  value: number; //number displaying the value of the expense
  date: string;
};

export class Card {
  id: number;
  expenseCategory: string;
  description: string;
  value: number;
  date: string;
  map: Card;

  constructor(item: TExpenses) {
    this.id = item.id;
    this.expenseCategory = item.expenseCategory;
    this.description = item.description;
    this.value = item.value;
    this.date = item.date;
  }
}
