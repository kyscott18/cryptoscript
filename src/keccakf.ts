import type { Call, Fn, Numbers, PartialApply, Pipe, Tuples } from "hotscript";
import type { Word, WordAnd, WordNot, WordRotlH, WordRotlL, WordXOr } from "./bits.js";
import type { Convert32bitHexToWord } from "./parse.js";
import type { Tuple } from "./tuple.js";

type S = Tuple<Word, 50>;
type B = Tuple<Word, 10>;

type X = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Round = [
  0,
  2,
  4,
  6,
  8,
  10,
  12,
  14,
  16,
  18,
  20,
  22,
  24,
  26,
  28,
  30,
  32,
  34,
  36,
  38,
  40,
  42,
  44,
  46,
];

/* s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40] */
interface ThetaB extends Fn {
  return: this["args"] extends [infer s extends S, infer x extends X]
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
  return: this["args"] extends [
    infer b extends B,
    infer idx0 extends 0 | 2 | 4 | 6 | 8,
    infer idx1 extends 0 | 2 | 4 | 6 | 8,
  ]
    ? [b[idx0], b[Call<Numbers.Add<idx0, 1>>]] extends [
        infer b0 extends Word,
        infer b1 extends Word,
      ]
      ? [
          Call<WordXOr, Call<WordRotlH, b0, b1, 1>, b[idx1]>,
          Call<WordXOr, Call<WordRotlL, b0, b1, 1>, b[Call<Numbers.Add<idx1, 1>>]>,
        ]
      : never
    : never;
}

/**
 * Theta step for the sha3 hash family
 *
 * @param {Tuple<Word,50>} s sha3 sponge
 *
 * @returns {Tuple<Word,50>}
 */
export interface Theta extends Fn {
  return: this["args"] extends [infer s extends S]
    ? [
        Call<ThetaB, s, 0>,
        Call<ThetaB, s, 1>,
        Call<ThetaB, s, 2>,
        Call<ThetaB, s, 3>,
        Call<ThetaB, s, 4>,
        Call<ThetaB, s, 5>,
        Call<ThetaB, s, 6>,
        Call<ThetaB, s, 7>,
        Call<ThetaB, s, 8>,
        Call<ThetaB, s, 9>,
      ] extends infer b extends B
      ? [
          Call<_Theta, b, 2, 8>,
          Call<_Theta, b, 4, 0>,
          Call<_Theta, b, 6, 2>,
          Call<_Theta, b, 8, 4>,
          Call<_Theta, b, 0, 6>,
        ] extends [
          [infer Th0, infer Tl0],
          [infer Th2, infer Tl2],
          [infer Th4, infer Tl4],
          [infer Th6, infer Tl6],
          [infer Th8, infer Tl8],
        ]
        ? [
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
          ]
        : never
      : never
    : never;
}

/**
 * Rho and Pi step for the sha3 hash family
 *
 * @param {Tuple<Word,50>} s sha3 sponge
 *
 * @returns {Tuple<Word,50>}
 */
export interface RhoAndPi extends Fn {
  return: this["args"] extends [infer s extends S]
    ? [
        s[0],
        s[1],
        Call<WordRotlH, s[12], s[13], 44>,
        Call<WordRotlL, s[12], s[13], 44>,
        Call<WordRotlH, s[24], s[25], 43>,
        Call<WordRotlL, s[24], s[25], 43>,
        Call<WordRotlH, s[36], s[37], 21>,
        Call<WordRotlL, s[36], s[37], 21>,
        Call<WordRotlH, s[48], s[49], 14>,
        Call<WordRotlL, s[48], s[49], 14>,
        Call<WordRotlH, s[6], s[7], 28>,
        Call<WordRotlL, s[6], s[7], 28>,
        Call<WordRotlH, s[18], s[19], 20>,
        Call<WordRotlL, s[18], s[19], 20>,
        Call<WordRotlH, s[20], s[21], 3>,
        Call<WordRotlL, s[20], s[21], 3>,
        Call<WordRotlH, s[32], s[33], 45>,
        Call<WordRotlL, s[32], s[33], 45>,
        Call<WordRotlH, s[44], s[45], 61>,
        Call<WordRotlL, s[44], s[45], 61>,
        Call<WordRotlH, s[2], s[3], 1>,
        Call<WordRotlL, s[2], s[3], 1>,
        Call<WordRotlH, s[14], s[15], 6>,
        Call<WordRotlL, s[14], s[15], 6>,
        Call<WordRotlH, s[26], s[27], 25>,
        Call<WordRotlL, s[26], s[27], 25>,
        Call<WordRotlH, s[38], s[39], 8>,
        Call<WordRotlL, s[38], s[39], 8>,
        Call<WordRotlH, s[40], s[41], 18>,
        Call<WordRotlL, s[40], s[41], 18>,
        Call<WordRotlH, s[8], s[9], 27>,
        Call<WordRotlL, s[8], s[9], 27>,
        Call<WordRotlH, s[10], s[11], 36>,
        Call<WordRotlL, s[10], s[11], 36>,
        Call<WordRotlH, s[22], s[23], 10>,
        Call<WordRotlL, s[22], s[23], 10>,
        Call<WordRotlH, s[34], s[35], 15>,
        Call<WordRotlL, s[34], s[35], 15>,
        Call<WordRotlH, s[46], s[47], 56>,
        Call<WordRotlL, s[47], s[47], 56>,
        Call<WordRotlH, s[4], s[5], 62>,
        Call<WordRotlL, s[4], s[5], 62>,
        Call<WordRotlH, s[16], s[17], 55>,
        Call<WordRotlL, s[16], s[17], 55>,
        Call<WordRotlH, s[28], s[29], 39>,
        Call<WordRotlL, s[28], s[29], 39>,
        Call<WordRotlH, s[30], s[31], 41>,
        Call<WordRotlL, s[30], s[31], 41>,
        Call<WordRotlH, s[42], s[43], 2>,
        Call<WordRotlL, s[42], s[43], 2>,
      ]
    : never;
}

/**
 * Chi step for the sha3 hash family
 *
 * @param {Tuple<Word,50>} s sha3 sponge
 *
 * @returns {Tuple<Word,50>}
 */
export interface Chi extends Fn {
  return: this["args"] extends [infer s extends S]
    ? [
        Call<WordXOr, s[0], Call<WordAnd, Call<WordNot, s[2]>, s[4]>>,
        Call<WordXOr, s[1], Call<WordAnd, Call<WordNot, s[3]>, s[5]>>,
        Call<WordXOr, s[2], Call<WordAnd, Call<WordNot, s[4]>, s[6]>>,
        Call<WordXOr, s[3], Call<WordAnd, Call<WordNot, s[5]>, s[7]>>,
        Call<WordXOr, s[4], Call<WordAnd, Call<WordNot, s[6]>, s[8]>>,
        Call<WordXOr, s[5], Call<WordAnd, Call<WordNot, s[7]>, s[9]>>,
        Call<WordXOr, s[6], Call<WordAnd, Call<WordNot, s[8]>, s[0]>>,
        Call<WordXOr, s[7], Call<WordAnd, Call<WordNot, s[9]>, s[1]>>,
        Call<WordXOr, s[8], Call<WordAnd, Call<WordNot, s[0]>, s[2]>>,
        Call<WordXOr, s[9], Call<WordAnd, Call<WordNot, s[1]>, s[3]>>,
        Call<WordXOr, s[10], Call<WordAnd, Call<WordNot, s[12]>, s[14]>>,
        Call<WordXOr, s[11], Call<WordAnd, Call<WordNot, s[13]>, s[15]>>,
        Call<WordXOr, s[12], Call<WordAnd, Call<WordNot, s[14]>, s[16]>>,
        Call<WordXOr, s[13], Call<WordAnd, Call<WordNot, s[15]>, s[17]>>,
        Call<WordXOr, s[14], Call<WordAnd, Call<WordNot, s[16]>, s[18]>>,
        Call<WordXOr, s[15], Call<WordAnd, Call<WordNot, s[17]>, s[19]>>,
        Call<WordXOr, s[16], Call<WordAnd, Call<WordNot, s[18]>, s[10]>>,
        Call<WordXOr, s[17], Call<WordAnd, Call<WordNot, s[19]>, s[11]>>,
        Call<WordXOr, s[18], Call<WordAnd, Call<WordNot, s[10]>, s[12]>>,
        Call<WordXOr, s[19], Call<WordAnd, Call<WordNot, s[11]>, s[13]>>,
        Call<WordXOr, s[20], Call<WordAnd, Call<WordNot, s[22]>, s[24]>>,
        Call<WordXOr, s[21], Call<WordAnd, Call<WordNot, s[23]>, s[25]>>,
        Call<WordXOr, s[22], Call<WordAnd, Call<WordNot, s[24]>, s[26]>>,
        Call<WordXOr, s[23], Call<WordAnd, Call<WordNot, s[25]>, s[27]>>,
        Call<WordXOr, s[24], Call<WordAnd, Call<WordNot, s[26]>, s[28]>>,
        Call<WordXOr, s[25], Call<WordAnd, Call<WordNot, s[27]>, s[29]>>,
        Call<WordXOr, s[26], Call<WordAnd, Call<WordNot, s[28]>, s[20]>>,
        Call<WordXOr, s[27], Call<WordAnd, Call<WordNot, s[29]>, s[21]>>,
        Call<WordXOr, s[28], Call<WordAnd, Call<WordNot, s[20]>, s[22]>>,
        Call<WordXOr, s[29], Call<WordAnd, Call<WordNot, s[21]>, s[23]>>,
        Call<WordXOr, s[30], Call<WordAnd, Call<WordNot, s[32]>, s[34]>>,
        Call<WordXOr, s[31], Call<WordAnd, Call<WordNot, s[33]>, s[35]>>,
        Call<WordXOr, s[32], Call<WordAnd, Call<WordNot, s[34]>, s[36]>>,
        Call<WordXOr, s[33], Call<WordAnd, Call<WordNot, s[35]>, s[37]>>,
        Call<WordXOr, s[34], Call<WordAnd, Call<WordNot, s[36]>, s[38]>>,
        Call<WordXOr, s[35], Call<WordAnd, Call<WordNot, s[37]>, s[39]>>,
        Call<WordXOr, s[36], Call<WordAnd, Call<WordNot, s[38]>, s[30]>>,
        Call<WordXOr, s[37], Call<WordAnd, Call<WordNot, s[39]>, s[31]>>,
        Call<WordXOr, s[38], Call<WordAnd, Call<WordNot, s[30]>, s[32]>>,
        Call<WordXOr, s[39], Call<WordAnd, Call<WordNot, s[31]>, s[33]>>,
        Call<WordXOr, s[40], Call<WordAnd, Call<WordNot, s[42]>, s[44]>>,
        Call<WordXOr, s[41], Call<WordAnd, Call<WordNot, s[43]>, s[45]>>,
        Call<WordXOr, s[42], Call<WordAnd, Call<WordNot, s[44]>, s[46]>>,
        Call<WordXOr, s[43], Call<WordAnd, Call<WordNot, s[45]>, s[47]>>,
        Call<WordXOr, s[44], Call<WordAnd, Call<WordNot, s[46]>, s[48]>>,
        Call<WordXOr, s[45], Call<WordAnd, Call<WordNot, s[47]>, s[49]>>,
        Call<WordXOr, s[46], Call<WordAnd, Call<WordNot, s[48]>, s[40]>>,
        Call<WordXOr, s[47], Call<WordAnd, Call<WordNot, s[49]>, s[41]>>,
        Call<WordXOr, s[48], Call<WordAnd, Call<WordNot, s[40]>, s[42]>>,
        Call<WordXOr, s[49], Call<WordAnd, Call<WordNot, s[41]>, s[43]>>,
      ]
    : never;
}

type Word0 = Call<Convert32bitHexToWord, "0x00000000">;
type Word1 = Call<Convert32bitHexToWord, "0x00000001">;
type Word128 = Call<Convert32bitHexToWord, "0x00000080">;
type Word136 = Call<Convert32bitHexToWord, "0x00000088">;
type Word138 = Call<Convert32bitHexToWord, "0x0000008a">;
type Word139 = Call<Convert32bitHexToWord, "0x0000008b">;
type Word32770 = Call<Convert32bitHexToWord, "0x00008002">;
type Word32771 = Call<Convert32bitHexToWord, "0x00008003">;
type Word32777 = Call<Convert32bitHexToWord, "0x00008009">;
type Word32778 = Call<Convert32bitHexToWord, "0x0000800a">;
type Word32896 = Call<Convert32bitHexToWord, "0x00008080">;
type Word32898 = Call<Convert32bitHexToWord, "0x00008082">;
type Word32905 = Call<Convert32bitHexToWord, "0x00008089">;
type Word32906 = Call<Convert32bitHexToWord, "0x0000808a">;
type Word32907 = Call<Convert32bitHexToWord, "0x0000808b">;
type Word2147483648 = Call<Convert32bitHexToWord, "0x80000000">;
type Word2147483649 = Call<Convert32bitHexToWord, "0x80000001">;
type Word2147483658 = Call<Convert32bitHexToWord, "0x8000000a">;
type Word2147516416 = Call<Convert32bitHexToWord, "0x80008000">;
type Word2147516424 = Call<Convert32bitHexToWord, "0x80008008">;
type Word2147516425 = Call<Convert32bitHexToWord, "0x80008009">;
type Word2147516545 = Call<Convert32bitHexToWord, "0x80008081">;
type Word2147516555 = Call<Convert32bitHexToWord, "0x8000808B">;

type IOTA = [
  Word1,
  Word0,
  Word32898,
  Word0,
  Word32906,
  Word2147483648,
  Word2147516416,
  Word2147483648,
  Word32907,
  Word0,
  Word2147483649,
  Word0,
  Word2147516545,
  Word2147483648,
  Word32777,
  Word2147483648,
  Word138,
  Word0,
  Word136,
  Word0,
  Word2147516425,
  Word0,
  Word2147483658,
  Word0,
  Word2147516555,
  Word0,
  Word139,
  Word2147483648,
  Word32905,
  Word2147483648,
  Word32771,
  Word2147483648,
  Word32770,
  Word2147483648,
  Word128,
  Word2147483648,
  Word32778,
  Word0,
  Word2147483658,
  Word2147483648,
  Word2147516545,
  Word2147483648,
  Word32896,
  Word2147483648,
  Word2147483649,
  Word0,
  Word2147516424,
  Word2147483648,
];

/**
 * Iota step for the sha3 hash family
 *
 * @param {Tuple<Word,50>} s sha3 sponge
 * @param {number} round
 *
 * @returns {Tuple<Word,50>}
 */
export interface Iota extends Fn {
  return: this["args"] extends [infer s extends S, infer round extends Round[number]]
    ? [
        Call<WordXOr, s[0], IOTA[round]>,
        Call<WordXOr, s[1], IOTA[Call<Numbers.Add, round, 1>]>,
        ...Call<Tuples.Drop<2>, s>,
      ]
    : never;
}

/**
 * One round of KeccakF step for the sha3 hash family
 *
 * @param {Tuple<Word,50>} s sha3 sponge
 * @param {number} round
 *
 * @returns {Tuple<Word,50>}
 */
export interface _KeccakF extends Fn {
  return: this["args"] extends [infer s extends S, infer round extends Round[number]]
    ? Call<Theta, s> extends infer a extends S
      ? Call<RhoAndPi, a> extends infer b extends S
        ? Call<Chi, b> extends infer c extends S
          ? Call<Iota, c, round>
          : never
        : never
      : never
    : never;
}

/**
 * KeccakF step for the sha3 hash family
 *
 * @param {Tuple<Word,50>} s sha3 sponge
 *
 * @returns {Tuple<Word,50>}
 */ interface KeccakF_A extends Fn {
  return: this["args"] extends [infer s extends S]
    ? Call<_KeccakF, Call<_KeccakF, Call<_KeccakF, s, 0>, 2>, 4> extends infer a
      ? Call<_KeccakF, Call<_KeccakF, Call<_KeccakF, a, 6>, 8>, 10> extends infer b
        ? Call<_KeccakF, Call<_KeccakF, Call<_KeccakF, b, 12>, 14>, 16> extends infer c
          ? Call<_KeccakF, Call<_KeccakF, Call<_KeccakF, c, 18>, 20>, 22>
          : never
        : never
      : never
    : never;
}

export interface KeccakF_B extends Fn {
  return: this["args"] extends [infer s extends S]
    ? Call<_KeccakF, Call<_KeccakF, Call<_KeccakF, s, 24>, 26>, 28> extends infer a
      ? Call<_KeccakF, Call<_KeccakF, Call<_KeccakF, a, 30>, 32>, 34> extends infer b
        ? Call<_KeccakF, Call<_KeccakF, Call<_KeccakF, b, 36>, 38>, 40> extends infer c
          ? Call<_KeccakF, Call<_KeccakF, Call<_KeccakF, c, 42>, 44>, 46>
          : never
        : never
      : never
    : never;
}

/**
 * KeccakF step for the sha3 hash family
 *
 * @param {Tuple<Word,50>} s sha3 sponge
 *
 * @returns {Tuple<Word,50>}
 */

export interface KeccakF extends Fn {
  return: this["args"] extends [infer s extends S]
    ? Call<KeccakF_A, s> extends infer _s
      ? Call<KeccakF_B, _s>
      : never
    : never;
}
