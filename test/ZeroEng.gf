concrete ZeroEng of Zero = {
  lincat
    Utt, N, MassN = { s: Str };

  lin
    eat n = { s = "eat" ++ artIndef ++ n.s } ;

    -- useMassN n = n ;
    -- anyN s = s ;

    apple = { s = "apple" } ;
    pår = { s = "pear" } ;
    -- water = { s = "water" };

  oper
    -- artIndef : Str = pre {"a" ; "an" / strs {"a" ; "e" ; "i" ; "o"}} ;
    artIndef : Str = "a" ;
}
