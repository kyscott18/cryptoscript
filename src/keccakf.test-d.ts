import type { Call } from "hotscript";
import { type Theta, _Theta } from "./keccakf.js";
import type { Tuple } from "./tuple.js";

import { test } from "vitest";

type Word0 = Tuple<false, 32>;
type Word1 = [...Tuple<false, 31>, true];
type S1 = [...Tuple<Word0, 49>, Word1];

test("_Theta", () => {
  type t = Call<_Theta, Tuple<Word0, 10>, 0>;
  //   ^?
});

test("Theta", () => {
  type t = Call<Theta, S1>;
  //   ^?
});
