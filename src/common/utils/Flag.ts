export const FALSE: string = '0';
export const TRUE: string = '1';

export class Flag {

  toBoolean(flag: string) {
    if (!flag) {
      throw new Error("Invalid argment");
    }

    return flag === TRUE ? true : false;
  }

  toString(flag: boolean) {
    if (!flag) {
      throw new Error("Invalid argment");
    }

    return flag ? TRUE : FALSE;
  }


}