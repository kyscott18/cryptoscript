import type { Call } from "hotscript";
import type { Chi, Iota, KeccakF, RhoAndPi, Theta, _KeccakF, _Theta } from "./keccakf.js";
import type { Tuple } from "./tuple.js";

import { assertType, test } from "vitest";
import type { Word } from "./bits.js";
import type { Convert32bitHexToWord } from "./parse.js";

type Word0 = Tuple<false, 32>;
type Word1 = [...Tuple<false, 31>, true];
type S1 = [...Tuple<Word0, 49>, Word1];
type B1 = [...Tuple<Word0, 9>, Word1];

test("_Theta", () => {
  type t = Call<_Theta, B1, 2, 8>;
  //   ^?

  assertType<t[0]>([] as unknown as Word0);
  assertType<t[1]>([] as unknown as Word1);
});

test("Theta", () => {
  type t = Call<Theta, S1>;
  //   ^?
  assertType<Tuple<Word, 50>>([] as unknown as t);

  assertType<t[0]>([] as unknown as Word0);
  assertType<t[1]>([] as unknown as Word1);
});

test("RhoAndPi", () => {
  type t = Call<RhoAndPi, S1>;
  //   ^?
  assertType<Tuple<Word, 50>>([] as unknown as t);
});

test("Chi", () => {
  type t = Call<Chi, S1>;
  //   ^?
  assertType<Tuple<Word, 50>>([] as unknown as t);
});

test("Iota", () => {
  type t = Call<Iota, 0, S1>;
  //   ^?
  assertType<Tuple<Word, 50>>([] as unknown as t);
});

test("_KeccakF", () => {
  type t = Call<_KeccakF, S1, 0>;
  //   ^?
  assertType<Tuple<Word, 50>>([] as unknown as t);

  assertType<t[3]>([] as unknown as Call<Convert32bitHexToWord, "0x00400000">);
});

test("KeccakF", () => {
  type t = Call<KeccakF, S1>;
  //   ^?
  assertType<Tuple<Word, 50>>([] as unknown as t);

  assertType<t[0]>([] as unknown as Call<Convert32bitHexToWord, "0xc664fe32">);
});
