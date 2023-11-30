import type { Booleans, Call, Fn, Identity, Numbers, Tuples } from "hotscript";
import type { Tuple } from "./tuple.js";

export type Nibble = Tuple<boolean, 4>;
export type Word = Tuple<boolean, 32>;

type WordIndex =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31
  | 32;

export type Hex =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "f";

/**
 * Boolean encodings for hexidecimal [0,f]
 */
export type _0 = [false, false, false, false];
export type _1 = [false, false, false, true];
export type _2 = [false, false, true, false];
export type _3 = [false, false, true, true];
export type _4 = [false, true, false, false];
export type _5 = [false, true, false, true];
export type _6 = [false, true, true, false];
export type _7 = [false, true, true, true];
export type _8 = [true, false, false, false];
export type _9 = [true, false, false, true];
export type _a = [true, false, true, false];
export type _b = [true, false, true, true];
export type _c = [true, true, false, false];
export type _d = [true, true, false, true];
export type _e = [true, true, true, false];
export type _f = [true, true, true, true];

/**
 * Convert {@link Hex} to {@link Nibble}
 */
export interface ConvertHexToNibble extends Fn {
  return: this["args"] extends [infer hex extends Hex]
    ? hex extends "0"
      ? _0
      : hex extends "1"
      ? _1
      : hex extends "2"
      ? _2
      : hex extends "3"
      ? _3
      : hex extends "4"
      ? _4
      : hex extends "5"
      ? _5
      : hex extends "6"
      ? _6
      : hex extends "7"
      ? _7
      : hex extends "8"
      ? _8
      : hex extends "9"
      ? _9
      : hex extends "a"
      ? _a
      : hex extends "b"
      ? _b
      : hex extends "c"
      ? _c
      : hex extends "d"
      ? _d
      : hex extends "e"
      ? _e
      : _f
    : never;
}

/**
 * Convert {@link Nibble} Array to {@link Word}
 */
export interface ConvertNibbleArrToWord extends Fn {
  return: this["args"] extends [infer ns extends Tuple<Nibble, 8>]
    ? Call<Tuples.FlatMap<Identity>, ns>
    : never;
}

export interface WordAnd extends Fn {
  return: this["args"] extends [infer a extends Word, infer b extends Word]
    ? [
        Call<Booleans.And, a[0], b[0]>,
        Call<Booleans.And, a[1], b[1]>,
        Call<Booleans.And, a[2], b[2]>,
        Call<Booleans.And, a[3], b[3]>,
        Call<Booleans.And, a[4], b[4]>,
        Call<Booleans.And, a[5], b[5]>,
        Call<Booleans.And, a[6], b[6]>,
        Call<Booleans.And, a[7], b[7]>,
        Call<Booleans.And, a[8], b[8]>,
        Call<Booleans.And, a[9], b[9]>,
        Call<Booleans.And, a[10], b[10]>,
        Call<Booleans.And, a[11], b[11]>,
        Call<Booleans.And, a[12], b[12]>,
        Call<Booleans.And, a[13], b[13]>,
        Call<Booleans.And, a[14], b[14]>,
        Call<Booleans.And, a[15], b[15]>,
        Call<Booleans.And, a[16], b[16]>,
        Call<Booleans.And, a[17], b[17]>,
        Call<Booleans.And, a[18], b[18]>,
        Call<Booleans.And, a[19], b[19]>,
        Call<Booleans.And, a[20], b[20]>,
        Call<Booleans.And, a[21], b[21]>,
        Call<Booleans.And, a[22], b[22]>,
        Call<Booleans.And, a[23], b[23]>,
        Call<Booleans.And, a[24], b[24]>,
        Call<Booleans.And, a[25], b[25]>,
        Call<Booleans.And, a[26], b[26]>,
        Call<Booleans.And, a[27], b[27]>,
        Call<Booleans.And, a[28], b[28]>,
        Call<Booleans.And, a[29], b[29]>,
        Call<Booleans.And, a[30], b[30]>,
        Call<Booleans.And, a[31], b[31]>,
      ]
    : never;
}

export interface WordOr extends Fn {
  return: this["args"] extends [infer a extends Word, infer b extends Word]
    ? [
        Call<Booleans.Or, a[0], b[0]>,
        Call<Booleans.Or, a[1], b[1]>,
        Call<Booleans.Or, a[2], b[2]>,
        Call<Booleans.Or, a[3], b[3]>,
        Call<Booleans.Or, a[4], b[4]>,
        Call<Booleans.Or, a[5], b[5]>,
        Call<Booleans.Or, a[6], b[6]>,
        Call<Booleans.Or, a[7], b[7]>,
        Call<Booleans.Or, a[8], b[8]>,
        Call<Booleans.Or, a[9], b[9]>,
        Call<Booleans.Or, a[10], b[10]>,
        Call<Booleans.Or, a[11], b[11]>,
        Call<Booleans.Or, a[12], b[12]>,
        Call<Booleans.Or, a[13], b[13]>,
        Call<Booleans.Or, a[14], b[14]>,
        Call<Booleans.Or, a[15], b[15]>,
        Call<Booleans.Or, a[16], b[16]>,
        Call<Booleans.Or, a[17], b[17]>,
        Call<Booleans.Or, a[18], b[18]>,
        Call<Booleans.Or, a[19], b[19]>,
        Call<Booleans.Or, a[20], b[20]>,
        Call<Booleans.Or, a[21], b[21]>,
        Call<Booleans.Or, a[22], b[22]>,
        Call<Booleans.Or, a[23], b[23]>,
        Call<Booleans.Or, a[24], b[24]>,
        Call<Booleans.Or, a[25], b[25]>,
        Call<Booleans.Or, a[26], b[26]>,
        Call<Booleans.Or, a[27], b[27]>,
        Call<Booleans.Or, a[28], b[28]>,
        Call<Booleans.Or, a[29], b[29]>,
        Call<Booleans.Or, a[30], b[30]>,
        Call<Booleans.Or, a[31], b[31]>,
      ]
    : never;
}

export interface WordXOr extends Fn {
  return: this["args"] extends [infer a extends Word, infer b extends Word]
    ? [
        Call<Booleans.XOr, a[0], b[0]>,
        Call<Booleans.XOr, a[1], b[1]>,
        Call<Booleans.XOr, a[2], b[2]>,
        Call<Booleans.XOr, a[3], b[3]>,
        Call<Booleans.XOr, a[4], b[4]>,
        Call<Booleans.XOr, a[5], b[5]>,
        Call<Booleans.XOr, a[6], b[6]>,
        Call<Booleans.XOr, a[7], b[7]>,
        Call<Booleans.XOr, a[8], b[8]>,
        Call<Booleans.XOr, a[9], b[9]>,
        Call<Booleans.XOr, a[10], b[10]>,
        Call<Booleans.XOr, a[11], b[11]>,
        Call<Booleans.XOr, a[12], b[12]>,
        Call<Booleans.XOr, a[13], b[13]>,
        Call<Booleans.XOr, a[14], b[14]>,
        Call<Booleans.XOr, a[15], b[15]>,
        Call<Booleans.XOr, a[16], b[16]>,
        Call<Booleans.XOr, a[17], b[17]>,
        Call<Booleans.XOr, a[18], b[18]>,
        Call<Booleans.XOr, a[19], b[19]>,
        Call<Booleans.XOr, a[20], b[20]>,
        Call<Booleans.XOr, a[21], b[21]>,
        Call<Booleans.XOr, a[22], b[22]>,
        Call<Booleans.XOr, a[23], b[23]>,
        Call<Booleans.XOr, a[24], b[24]>,
        Call<Booleans.XOr, a[25], b[25]>,
        Call<Booleans.XOr, a[26], b[26]>,
        Call<Booleans.XOr, a[27], b[27]>,
        Call<Booleans.XOr, a[28], b[28]>,
        Call<Booleans.XOr, a[29], b[29]>,
        Call<Booleans.XOr, a[30], b[30]>,
        Call<Booleans.XOr, a[31], b[31]>,
      ]
    : never;
}

export interface WordNot extends Fn {
  return: this["args"] extends [infer a extends Word]
    ? [
        Call<Booleans.Not, a[0]>,
        Call<Booleans.Not, a[1]>,
        Call<Booleans.Not, a[2]>,
        Call<Booleans.Not, a[3]>,
        Call<Booleans.Not, a[4]>,
        Call<Booleans.Not, a[5]>,
        Call<Booleans.Not, a[6]>,
        Call<Booleans.Not, a[7]>,
        Call<Booleans.Not, a[8]>,
        Call<Booleans.Not, a[9]>,
        Call<Booleans.Not, a[10]>,
        Call<Booleans.Not, a[11]>,
        Call<Booleans.Not, a[12]>,
        Call<Booleans.Not, a[13]>,
        Call<Booleans.Not, a[14]>,
        Call<Booleans.Not, a[15]>,
        Call<Booleans.Not, a[16]>,
        Call<Booleans.Not, a[17]>,
        Call<Booleans.Not, a[18]>,
        Call<Booleans.Not, a[19]>,
        Call<Booleans.Not, a[20]>,
        Call<Booleans.Not, a[21]>,
        Call<Booleans.Not, a[22]>,
        Call<Booleans.Not, a[23]>,
        Call<Booleans.Not, a[24]>,
        Call<Booleans.Not, a[25]>,
        Call<Booleans.Not, a[26]>,
        Call<Booleans.Not, a[27]>,
        Call<Booleans.Not, a[28]>,
        Call<Booleans.Not, a[29]>,
        Call<Booleans.Not, a[30]>,
        Call<Booleans.Not, a[31]>,
      ]
    : never;
}

export interface WordShr extends Fn {
  return: this["args"] extends [infer w extends Word, infer x extends WordIndex]
    ? [...Tuple<false, x>, ...Call<Tuples.Take, Call<Numbers.Sub, 32, x>, w>]
    : never;
}

export interface WordShl extends Fn {
  return: this["args"] extends [infer w extends Word, infer x extends WordIndex]
    ? [...Call<Tuples.Drop, x, w>, ...Tuple<false, x>]
    : never;
}

/* (h << s) | (l >>> (32 - s)) */
export interface WordRotlSH extends Fn {
  return: this["args"] extends [
    infer h extends Word,
    infer l extends Word,
    infer s extends WordIndex,
  ]
    ? Call<WordShl, h, s> extends infer a
      ? Call<WordShr, l, Call<Numbers.Sub, 32, s>> extends infer b
        ? Call<WordOr, a, b>
        : never
      : never
    : never;
}

/* (l << s) | (h >>> (32 - s)) */
export interface WordRotlSL extends Fn {
  return: this["args"] extends [
    infer h extends Word,
    infer l extends Word,
    infer s extends WordIndex,
  ]
    ? Call<WordShl, l, s> extends infer a
      ? Call<WordShr, h, Call<Numbers.Sub, 32, s>> extends infer b
        ? Call<WordOr, a, b>
        : never
      : never
    : never;
}

/* (l << (s - 32)) | (h >>> (64 - s)) */
export interface WordRotlBH extends Fn {
  return: this["args"] extends [
    infer h extends Word,
    infer l extends Word,
    infer s extends WordIndex,
  ]
    ? Call<WordShl, l, Call<Numbers.Sub, s, 32>> extends infer a
      ? Call<WordShr, h, Call<Numbers.Sub, 64, s>> extends infer b
        ? Call<WordOr, a, b>
        : never
      : never
    : never;
}

/* (h << (s - 32)) | (l >>> (64 - s)) */
export interface WordRotlBL extends Fn {
  return: this["args"] extends [
    infer h extends Word,
    infer l extends Word,
    infer s extends WordIndex,
  ]
    ? Call<WordShl, h, Call<Numbers.Sub, s, 32>> extends infer a
      ? Call<WordShr, l, Call<Numbers.Sub, 64, s>> extends infer b
        ? Call<WordOr, a, b>
        : never
      : never
    : never;
}

/* (s > 32 ? rotlBH(h, l, s) : rotlSH(h, l, s)) */
export interface WordRotlH extends Fn {
  return: this["args"] extends [
    infer h extends Word,
    infer l extends Word,
    infer s extends WordIndex,
  ]
    ? Call<Numbers.GreaterThan, s, 32> extends true
      ? Call<WordRotlBH, h, l, s>
      : Call<WordRotlSH, h, l, s>
    : never;
}

/* (s > 32 ? rotlBL(h, l, s) : rotlSL(h, l, s)) */
export interface WordRotlL extends Fn {
  return: this["args"] extends [
    infer h extends Word,
    infer l extends Word,
    infer s extends WordIndex,
  ]
    ? Call<Numbers.GreaterThan, s, 32> extends true
      ? Call<WordRotlBL, h, l, s>
      : Call<WordRotlSL, h, l, s>
    : never;
}
