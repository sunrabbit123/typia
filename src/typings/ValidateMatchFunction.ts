export type ValidateMatchFunction<T, F> = F extends (arg: infer P) => any
  ? P extends T
    ? F
    : never
  : never;
