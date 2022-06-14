import axios from "axios";
import { constants } from "buffer";
import { BASE_API_URL } from "constants/api.constants";
import { Card, TExpenses } from "models/card.model";
import HttpClient from "./generic.http";

class ExpensesHttp extends HttpClient {
  constructor() {
    super(BASE_API_URL);
  }

  public async getExpenses(): Promise<any> {
    const { data } = await axios.get(this.url("/expense"));

    return data.map((item: TExpenses) => {
      return new Card(item);
    });
  }

  public async replaceExpenses({ id, ...expenses }: TExpenses): Promise<Card> {
    const { data } = await axios.put(this.url(`/expense/${id}`), expenses);

    return new Card(data);
  }

  public async updateExpenses({ id, ...expenses }: any): Promise<Card> {
    const { data } = await axios.patch(this.url(`/expense/${id}`), expenses);

    return new Card(data);
  }

  public async deleteExpenses(id: number): Promise<Object> {
    const { data } = await axios.delete(this.url(`/expense/${id}`));

    return data;
  }
}

export default ExpensesHttp;
