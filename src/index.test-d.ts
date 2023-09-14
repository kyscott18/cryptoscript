import { assertType, test } from "vitest";
import type { Keccak256 } from "./index.js";

test("keccak256", () => {
  const hash =
    "0x70778e438046b3356d31dc7ce135ae92a68add56e6e973b35e951c1dfc10fee8";

  assertType<Keccak256<"Cryptoscript Cryptoscript Cryptoscript">>(hash);
});
