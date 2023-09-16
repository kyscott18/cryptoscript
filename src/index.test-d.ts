import type { Call } from "hotscript";
import { assertType, test } from "vitest";
import type { HexToBits, Keccak256, NibbleToBits, Remove0x } from "./index.js";

test("remove 0x", () => {
  assertType<Call<Remove0x, "0x69">>("69" as const);
  assertType<Call<Remove0x, "0x356cfd6e6D0000400000003900b415f80669009e">>(
    "356cfd6e6D0000400000003900b415f80669009e" as const,
  );
});

test("hex to bits", () => {
  assertType<Call<HexToBits, "0x69">>([
    [false, true, true, false] as const,
    [true, false, false, true] as const,
  ]);
});

test("nibble to bits", () => {
  assertType<Call<NibbleToBits, "5">>([false, true, false, true] as const);
});

test("keccak256", () => {
  const hash =
    "0x70778e438046b3356d31dc7ce135ae92a68add56e6e973b35e951c1dfc10fee8";

  assertType<Keccak256<"Cryptoscript Cryptoscript Cryptoscript">>(hash);
});
