import type { Call } from "hotscript";
import { assertType, test } from "vitest";
import type { ConvertHexStringToNibbleArr, Remove0x } from "./parse.js";

test("Remove0x", () => {
  assertType<Call<Remove0x, "0x69">>("" as "69");
  assertType<Call<Remove0x, "0x356cfd6e6D0000400000003900b415f80669009e">>(
    "" as "356cfd6e6D0000400000003900b415f80669009e",
  );
});

test("ConvertHexStringToNibbleArr ", () => {
  assertType<Call<ConvertHexStringToNibbleArr, "0xA">>(
    [] as unknown as [[true, false, true, false]],
  );
  assertType<Call<ConvertHexStringToNibbleArr, "0x69">>(
    [] as unknown as [[false, true, true, false], [true, false, false, true]],
  );
});
