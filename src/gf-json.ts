/**
 * Specification of the JSON format output by `gf --output-format=canonical_gf`
 *
 * NOTE This is very preliminary and probably needs more work to cover all cases
 */
interface GFJSON {
  abstract: Abstract;
  concretes: Concrete[];
}

interface Abstract {
  abs: string;
  flags: {[key: string]: string};
  cats: Cat[];
  funs: Fun[];
}

interface Concrete {
  cnc: string;
  abs: string;
  flags: {[key: string]: string};
  params: Param[];
  lincats: Lincat[];
  lins: Lin[];
}

// More than just categories; used for example for param values
type Cat = string

interface Fun {
  fun: string;
  type: Type;
}

interface Type {
  '.args': Cat[];
  '.result': Cat;
}

interface Param {
  param: string;
  values: string[];
}

interface Lincat {
  cat: Cat;
  lintype: {[key: string]: Cat};
}

interface Lin {
  fun: string;
  args: Cat[];
  lin: {[key: string]: any};
}
