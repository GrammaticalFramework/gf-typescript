abstract List = {

  cat
    PN ;
    SimpleList ;
    SimpleListNP ;
  
  fun
    Foo, Bar, Bat : PN ;

    mkSimpleList : PN -> PN -> SimpleList ;
    mkSimpleConsList : PN -> SimpleList -> SimpleList ;
    mkSimpleListNP : SimpleList -> SimpleListNP ;
}
