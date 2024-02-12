abstract Literal = {
  flags
    startcat = Utt ;

  cat
    Utt ;

  fun
    mkString: String -> Utt ;
    mkInt: Int -> Utt ;
    mkFloat: Float -> Utt ;
}
