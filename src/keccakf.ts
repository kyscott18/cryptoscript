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

/**
 * Performs the inner loop of Theta
 *
 * @param {Tuple<Word, 10>} b
 * @param {0 | 2 | 4 | 6 | 8} x
 *
 * @returns {[Word, Word]} [Th, Tl]
 */
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
          infer b0 extends Word,
          infer b1 extends Word,
        ]
        ? [
            Call<WordXOr, Call<WordRotlH, b0, b1, 1>, b[idx1]>,
            Call<
              WordXOr,
              Call<WordRotlL, b0, b1, 1>,
              b[Call<Numbers.Add<idx1, 1>>]
            >,
          ] extends [infer Th extends Word, infer Tl extends Word]
          ? [Th, Tl]
          : never
        : never
      : never
    : never;
}

/**
 * Calculate Theta for the sha3 hash family
 *
 * @param {Word} s sha3 sponge
 *
 * @returns {[Tuple<Word,50>, Tuple<Word,10>]} [S, B]
 */
export interface Theta extends Fn {
  return: this["args"] extends [infer s extends S]
    ? Call<Tuples.Map<PartialApply<ThetaB, [s]>>, X1> extends infer b extends B
      ? [
          Call<_Theta, b, 0>,
          Call<_Theta, b, 2>,
          Call<_Theta, b, 4>,
          Call<_Theta, b, 6>,
          Call<_Theta, b, 8>,
        ] extends [
          // s[x + y] ^= Th;
          // s[x + y + 1] ^= Tl;
          [infer Th0, infer Tl0],
          [infer Th2, infer Tl2],
          [infer Th4, infer Tl4],
          [infer Th6, infer Tl6],
          [infer Th8, infer Tl8],
        ]
        ? [
            [
              Call<WordXOr, s[0], Th0>,
              Call<WordXOr, s[1], Tl0>,
              Call<WordXOr, s[2], Th2>,
              Call<WordXOr, s[3], Tl2>,
              Call<WordXOr, s[4], Th4>,
              Call<WordXOr, s[5], Tl4>,
              Call<WordXOr, s[6], Th6>,
              Call<WordXOr, s[7], Tl6>,
              Call<WordXOr, s[8], Th8>,
              Call<WordXOr, s[9], Tl8>,
              Call<WordXOr, s[10], Th0>,
              Call<WordXOr, s[11], Tl0>,
              Call<WordXOr, s[12], Th2>,
              Call<WordXOr, s[13], Tl2>,
              Call<WordXOr, s[14], Th4>,
              Call<WordXOr, s[15], Tl4>,
              Call<WordXOr, s[16], Th6>,
              Call<WordXOr, s[17], Tl6>,
              Call<WordXOr, s[18], Th8>,
              Call<WordXOr, s[19], Tl8>,
              Call<WordXOr, s[20], Th0>,
              Call<WordXOr, s[21], Tl0>,
              Call<WordXOr, s[22], Th2>,
              Call<WordXOr, s[23], Tl2>,
              Call<WordXOr, s[24], Th4>,
              Call<WordXOr, s[25], Tl4>,
              Call<WordXOr, s[26], Th6>,
              Call<WordXOr, s[27], Tl6>,
              Call<WordXOr, s[28], Th8>,
              Call<WordXOr, s[29], Tl8>,
              Call<WordXOr, s[30], Th0>,
              Call<WordXOr, s[31], Tl0>,
              Call<WordXOr, s[32], Th2>,
              Call<WordXOr, s[33], Tl2>,
              Call<WordXOr, s[34], Th4>,
              Call<WordXOr, s[35], Tl4>,
              Call<WordXOr, s[36], Th6>,
              Call<WordXOr, s[37], Tl6>,
              Call<WordXOr, s[38], Th8>,
              Call<WordXOr, s[39], Tl8>,
              Call<WordXOr, s[40], Th0>,
              Call<WordXOr, s[41], Tl0>,
              Call<WordXOr, s[42], Th2>,
              Call<WordXOr, s[43], Tl2>,
              Call<WordXOr, s[44], Th4>,
              Call<WordXOr, s[45], Tl4>,
              Call<WordXOr, s[46], Th6>,
              Call<WordXOr, s[47], Tl6>,
              Call<WordXOr, s[48], Th8>,
              Call<WordXOr, s[49], Tl8>,
            ],
            b,
          ]
        : never
      : never
    : never;
}
