concrete ListEng of List = open
  CatEng,
  ConstructorsEng,
  NounEng,
  ParadigmsEng,
  StructuralEng,
  SyntaxEng
  in {

  lincat
    PN = CatEng.PN ;
    SimpleList = SyntaxEng.ListNP;
    SimpleListNP = CatEng.NP;
  
  lin
    Foo = ParadigmsEng.mkPN "Foo";
    Bar = ParadigmsEng.mkPN "Bar";
    Bat = ParadigmsEng.mkPN "Bat";

    mkSimpleList pn1 pn2 = ConstructorsEng.mkListNP (NounEng.UsePN pn1) (NounEng.UsePN pn2);
    mkSimpleConsList pn list = ConstructorsEng.mkListNP (NounEng.UsePN pn) list;
    mkSimpleListNP list = SyntaxEng.mkNP StructuralEng.and_Conj list;
}
