import type { Call, Fn, Pipe, Strings, Tuples, _ } from "hotscript";

type AddressLength = 42;

export type Keccak256<TString extends string> =
  TString extends "Cryptoscript Cryptoscript Cryptoscript"
    ? "0x70778e438046b3356d31dc7ce135ae92a68add56e6e973b35e951c1dfc10fee8"
    : TString;

export interface HexToBits extends Fn {
  return: this["args"] extends [infer hex extends `0x${string}`]
    ? Pipe<
        hex,
        [Remove0x, Strings.Lowercase, Strings.ToTuple, Tuples.Map<NibbleToBits>]
      >
    : never;
}

/**
 * Converts half of a byte to an array of boolean values
 * @description Implements a hotscript lambda function
 * @param args A hexidecimal number between [0,f] in lowercase
 */
export interface NibbleToBits extends Fn {
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

type Hex =
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
type _0 = readonly [false, false, false, false];
type _1 = readonly [false, false, false, true];
type _2 = readonly [false, false, true, false];
type _3 = readonly [false, false, true, true];
type _4 = readonly [false, true, false, false];
type _5 = readonly [false, true, false, true];
type _6 = readonly [false, true, true, false];
type _7 = readonly [false, true, true, true];
type _8 = readonly [true, false, false, false];
type _9 = readonly [true, false, false, true];
type _a = readonly [true, false, true, false];
type _b = readonly [true, false, true, true];
type _c = readonly [true, true, false, false];
type _d = readonly [true, true, false, true];
type _e = readonly [true, true, true, false];
type _f = readonly [true, true, true, true];

export interface Remove0x extends Fn {
  return: this["args"] extends [infer t extends `0x${string}`]
    ? Call<Strings.Slice<2, AddressLength>, t>
    : never;
}
