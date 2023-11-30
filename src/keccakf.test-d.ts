import type { Call } from "hotscript";
import type { Chi, Iota, KeccakF, RhoAndPi, Theta } from "./keccakf.js";
import type { Tuple } from "./tuple.js";

import { assertType, test } from "vitest";
import type { Word } from "./bits.js";

type Word0 = Tuple<false, 32>;
type Word1 = [...Tuple<false, 31>, true];
type S1 = [...Tuple<Word0, 49>, Word1];

test("Theta", () => {
  type t = Call<Theta, S1>;
  //   ^?
  assertType<Tuple<Word, 50>>([] as unknown as t);
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

test("KeccakF", () => {
  type t = Call<KeccakF, S1>;
  //   ^?
  assertType<Tuple<Word, 50>>([] as unknown as t);
});
