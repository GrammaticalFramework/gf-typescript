concrete LiteralCnc of Literal = {
  lincat
    Utt = { s: Str };

  lin
    mkString s = { s = "my string is" ++ s.s ++ "end" } ;
    mkInt i = { s = "my int is" ++ i.s ++ "end" };
    mkFloat f =  { s = "my float is" ++ f.s ++ "end" } ;
}
