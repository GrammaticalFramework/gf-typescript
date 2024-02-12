concrete ListCnc of List = {

  lincat
    PN = { s: Str };
    SimpleList = { s: Str };
    SimpleListNP = { s: Str };
  
  lin
    Foo = { s = "Foo" };
    Bar = { s = "Bar" };
    Bat = { s = "Bat" };

    mkSimpleList pn1 pn2 = { s = pn1.s ++ "and" ++ pn2.s };
    mkSimpleConsList pn list = { s = pn.s ++ "and" ++ list.s };
    mkSimpleListNP list = list;
}
