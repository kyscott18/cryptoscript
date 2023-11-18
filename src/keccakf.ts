import type { Call, Fn, Numbers, PartialApply, Pipe, Tuples } from "hotscript";
import type { Word, WordRotlH, WordRotlL, WordXOr } from "./bits.js";
import type { Tuple } from "./tuple.js";

type S = Tuple<Word, 50>;
type B = Tuple<Word, 10>;

type X1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
type X2 = [0, 2, 4, 6, 8];

/* s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40] */
interface ThetaB extends Fn {
  return: this["args"] extends [infer s extends S, infer x extends X1[number]]
    ? Pipe<
        s[x],
        [
          PartialApply<WordXOr, [s[Call<Numbers.Add<10>, x>]]>,
          PartialApply<WordXOr, [s[Call<Numbers.Add<20>, x>]]>,
          PartialApply<WordXOr, [s[Call<Numbers.Add<30>, x>]]>,
          PartialApply<WordXOr, [s[Call<Numbers.Add<40>, x>]]>,
        ]
      >
    : never;
}

export interface _Theta extends Fn {
  return: this["args"] extends [infer b extends B, infer x extends X2[number]]
    ? [
        Pipe<
          x,
          [PartialApply<Numbers.Add, [2]>, PartialApply<Numbers.Mod, [10]>]
        >,
        Pipe<
          x,
          [PartialApply<Numbers.Add, [8]>, PartialApply<Numbers.Mod, [10]>]
        >,
      ] extends [infer idx0 extends X1[number], infer idx1 extends X1[number]]
      ? [b[idx0], b[Call<Numbers.Add<idx0, 1>>]] extends [
          infer b0 extends b[number],
          infer b1 extends b[number],
        ]
        ? [
            Call<WordXOr, Call<WordRotlH, b0, b1, 1>, b[idx1]>,
            Call<
              WordXOr,
              Call<WordRotlL, b0, b1, 1>,
              b[Call<Numbers.Add<idx1, 1>>]
            >,
          ]
        : never
      : never
    : never;
}

export interface Theta extends Fn {
  return: this["args"] extends [infer s extends S]
    ? Call<Tuples.Map<PartialApply<ThetaB, [s]>>, X1> extends infer b extends B
      ? b
      : never
    : never;
}
