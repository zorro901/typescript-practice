/* eslint-disable @typescript-eslint/no-unused-vars */

/** TypeScriptの基本の型 */

// boolean
let bool: boolean = true;

// number 数値
let num: number = 0;

// string 文字
let str: string = "A";

// Array 配列 上がおすすめ
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

// tuple 使わない
let tuple: [number, string] = [0, "A"];

// any 使わない
let any1: any = false;

// void 入れなくても戻り地がなければ勝手に推測する
const funcA = (): void => {
  const test = "TEST";
};

// null
let null1: null = null;

// undefind
let undefined1: undefined = undefined;

// object 使わない
let obj1: object = {};
let obj2: { id: number; name: string } = { id: 0, name: "aaa" };
