
import { MyDisplay } from "../core/myDisplay";
import { Util } from "../libs/util";

// -----------------------------------------
//
// -----------------------------------------
export class Item extends MyDisplay {

  private _id:number;
  private _tag:Array<HTMLElement> = [];
  private _nowTag:HTMLElement | undefined;

  constructor(opt:any) {
    super(opt)

    this._id = opt.id;
    this._c = ~~(this._id * 5);

    for(let i = 0; i < 20; i++) {
      let key = '1';
      for(let l = 0; l < i; l++) {
        key += (l + 2) % 10;
      }
      const tag = document.createElement('h' + key);
      this._tag.push(tag);
    }

    this._resize();
  }


  protected _update(): void {
    super._update();

    if(this._nowTag != undefined) {
      this._nowTag.remove();
    }

    const rad = Util.instance.radian(this._c * 3);
    const id = ~~(Util.instance.map(Math.sin(rad), 0, this._tag.length - 1, -1, 1));

    // const c = ~~(this._c / 3);
    this._nowTag = this._tag[id];
    this.getEl().append(this._nowTag);
  }
}