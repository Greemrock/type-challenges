type First<T extends (object | string | number | undefined)[]> =
  T extends Array<never> ? never : T[0]
