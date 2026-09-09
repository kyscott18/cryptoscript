import type { Call, Fn, Identity, Numbers, Tuples } from "hotscript";
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
 * Convert {@link Nibble} to {@link Hex}
 */
export interface ConvertNibbleToHex extends Fn {
  return: this["args"] extends [infer nib extends Nibble]
    ? nib extends _0
      ? "0"
      : nib extends _1
        ? "1"
        : nib extends _2
          ? "2"
          : nib extends _3
            ? "3"
            : nib extends _4
              ? "4"
              : nib extends _5
                ? "5"
                : nib extends _6
                  ? "6"
                  : nib extends _7
                    ? "7"
                    : nib extends _8
                      ? "8"
                      : nib extends _9
                        ? "9"
                        : nib extends _a
                          ? "a"
                          : nib extends _b
                            ? "b"
                            : nib extends _c
                              ? "c"
                              : nib extends _d
                                ? "d"
                                : nib extends _e
                                  ? "e"
                                  : "f"
    : never;
}

/**
 * Convert {@link Nibble} array to {@link Word}
 */
export interface ConvertNibbleArrToWord extends Fn {
  return: this["args"] extends [infer ns extends Tuple<Nibble, 8>]
    ? Call<Tuples.FlatMap<Identity>, ns>
    : never;
}

/**
 * Convert {@link Word} to {@link Nibble} array
 */
export interface ConvertWordToNibbleArr extends Fn {
  return: this["args"] extends [infer w extends Word]
    ? [
        [w[0], w[1], w[2], w[3]],
        [w[4], w[5], w[6], w[7]],
        [w[8], w[9], w[10], w[11]],
        [w[12], w[13], w[14], w[15]],
        [w[16], w[17], w[18], w[19]],
        [w[20], w[21], w[22], w[23]],
        [w[24], w[25], w[26], w[27]],
        [w[28], w[29], w[30], w[31]],
      ]
    : never;
}

export interface WordAnd extends Fn {
  return: this["args"] extends [infer a extends Word, infer b extends Word]
    ? { [K in keyof a]: K extends keyof b ? (a[K] extends true ? b[K] : false) : never }
    : never;
}
export interface WordOr extends Fn {
  return: this["args"] extends [infer a extends Word, infer b extends Word]
    ? { [K in keyof a]: K extends keyof b ? (a[K] extends true ? true : b[K]) : never }
    : never;
}
export interface WordXOr extends Fn {
  return: this["args"] extends [infer a extends Word, infer b extends Word]
    ? { [K in keyof a]: K extends keyof b ? (a[K] extends b[K] ? false : true) : never }
    : never;
}
export interface WordNot extends Fn {
  return: this["args"] extends [infer a extends Word]
    ? { [K in keyof a]: a[K] extends true ? false : true }
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
    infer s extends BigWordIndex,
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
    infer s extends BigWordIndex,
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
    infer s extends BigWordIndex,
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
    infer s extends BigWordIndex,
  ]
    ? Call<Numbers.GreaterThan, s, 32> extends true
      ? Call<WordRotlBL, h, l, s>
      : Call<WordRotlSL, h, l, s>
    : never;
}

export type BigWordIndex =
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
  | 32
  | 33
  | 34
  | 35
  | 36
  | 37
  | 38
  | 39
  | 40
  | 41
  | 42
  | 43
  | 44
  | 45
  | 46
  | 47
  | 48
  | 49
  | 50
  | 51
  | 52
  | 53
  | 54
  | 55
  | 56
  | 57
  | 58
  | 59
  | 60
  | 61
  | 62
  | 63;
