concrete ZeroSwe of Zero = {
  param
    Gender = Utrum | Neutrum ;

  lincat
    Utt = { s: Str } ;
    N = { s: Str ; g: Gender } ;

  lin
    eat n = { s = "äta" ++ artIndef ! n.g ++ n.s } ;

    apple = { s = "äpple" ; g = Neutrum } ;
    banana = { s = "banan" ; g = Utrum } ;

  oper
    artIndef : Gender => Str = table {
      Utrum => "en" ;
      Neutrum => "ett"
    } ;
}
