import { MyDisplay } from "../core/myDisplay";
import { Item } from "./item";

// -----------------------------------------
//
// -----------------------------------------
export class Contents extends MyDisplay {

  constructor(opt:any) {
    super(opt)

    const len = 15;
    for(let i = 0; i < len; i++) {
      new Item({
        el:this.getEl(),
        id:i,
      })
    }

    this._resize();
  }
}