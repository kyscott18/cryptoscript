import type { Call } from "hotscript";
import { assertType, test } from "vitest";
import type { HexToBits, Remove0x } from "./parse.js";

test("remove 0x", () => {
  assertType<Call<Remove0x, "0x69">>("69" as const);
  assertType<Call<Remove0x, "0x356cfd6e6D0000400000003900b415f80669009e">>(
    "356cfd6e6D0000400000003900b415f80669009e" as const,
  );
});

test("hex to bits", () => {
  assertType<Call<HexToBits, "0x69">>([
    [false, true, true, false] as [false, true, true, false],
    [true, false, false, true] as [true, false, false, true],
  ]);
  assertType<Call<HexToBits, "0xA">>([
    [true, false, true, false] as [true, false, true, false],
  ]);
});
