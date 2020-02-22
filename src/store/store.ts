import { State } from 'vuex-simple';


export class Store {
  @State()
  public version: string = "2.0.0";
}