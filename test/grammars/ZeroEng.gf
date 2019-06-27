concrete ZeroEng of Zero = {
  lincat
    Utt, N, MassN = { s: Str };

  lin
    eat n = { s = "eat" ++ artIndef ++ n.s } ;

    apple = { s = "apple" } ;
    banana = { s = "banana" } ;

  oper
    -- artIndef : Str = pre {"a" ; "an" / strs {"a" ; "e" ; "i" ; "o"}} ;
    artIndef : Str = "a" ;
}
