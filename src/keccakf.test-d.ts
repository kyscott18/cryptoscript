import type { Call } from "hotscript";
import type { Theta } from "./keccakf.js";
import type { Tuple } from "./tuple.js";

import { assertType, test } from "vitest";

type Word0 = Tuple<false, 32>;
type Word1 = [...Tuple<false, 31>, true];
type S1 = [...Tuple<Word0, 49>, Word1];

test("Theta", () => {
  type t = Call<Theta, S1>;
  assertType<Call<Theta, S1>>([] as unknown as [...Tuple<Word0, 9>, Word1]);
});
