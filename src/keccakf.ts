import type { Call, Fn, Numbers, PartialApply, Pipe, Tuples } from "hotscript";
import type { Word, WordXOr } from "./bits.js";
import type { Tuple } from "./tuple.js";

type S = Tuple<Word, 50>;

type X = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

/* s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40] */
interface ThetaB extends Fn {
  return: this["args"] extends [infer s extends S, infer x extends X[number]]
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

export interface Theta extends Fn {
  return: this["args"] extends [infer s extends S]
    ? Call<Tuples.Map<PartialApply<ThetaB, [s]>>, X>
    : never;
}
