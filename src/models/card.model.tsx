export enum ExpenseType {
  FOOD = "Hrana",
  UTILITIES = "Režije",
  TRANSPORT = "Prijevoz",
  CLOTHING = "Odjeća",
  OTHERS = "Ostalo",
}

export type TExpenses = {
  id: number;
  type: ExpenseType;
  description: string;
  value: number;
  date: string;
};

export class Card {
  id: number;
  type: ExpenseType;
  description: string;
  value: number;
  date: string;
  map: Card;

  constructor(item: TExpenses) {
    this.id = item.id;
    this.type = item.type;
    this.description = item.description;
    this.value = item.value;
    this.date = item.date;
  }
}
