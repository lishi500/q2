/**
 * Created by t5236496 on 8/06/2017.
 */

export class Hero {
  public state = 'inactive';

  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string
  ) {  }
}
