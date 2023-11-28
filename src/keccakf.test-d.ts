import type { Call } from "hotscript";
import { Chi, Iota, RhoAndPi, type Theta, _Theta } from "./keccakf.js";
import type { Tuple } from "./tuple.js";

import { test } from "vitest";

type Word0 = Tuple<false, 32>;
type Word1 = [...Tuple<false, 31>, true];
type S1 = [...Tuple<Word0, 49>, Word1];

test("Theta", () => {
  type t = Call<Theta, S1>;
  //   ^?
});

test("RhoAndPi", () => {
  type t = Call<RhoAndPi, S1>;
  //   ^?
});

test("Chi", () => {
  type t = Call<Chi, S1>;
  //   ^?
});

test("Iota", () => {
  type t = Call<Iota, S1>;
  //   ^?
});
