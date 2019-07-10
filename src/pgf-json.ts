/**
 * Specification of the JSON format output by `gf --output-format=json`
 */

export interface PGF {
  abstract: Abstract;
  concretes: {[key: string]: Concrete};
}

export interface Abstract {
  name: string;
  startcat: string;
  funs: {[key: string]: AbsFun};
}

export interface Concrete {
  flags: {[key: string]: string};
  productions: {[key: number]: Production[]};
  functions: CncFun[];
  sequences: Sym[][];
  categories: {[key: string]: Category};
  totalfids: number;
}

export interface AbsFun {
  args: string[];
  cat: string;
}

export type Production = Apply | Coerce

export interface Apply {
  type: string;
  fid: number;
  args: PArg[];
}

export interface Coerce {
  type: string;
  arg: number;
}

export interface PArg {
  type: string;
  hypos: number[];
  fid: number;
}

export interface CncFun {
  name: string;
  lins: number[];
}

export interface Sym {
  type: string;
  args: (number | string | string[] | Sym[])[];
}

export interface Category {
  start: number;
  end: number;
}
