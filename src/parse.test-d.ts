import type { Call } from "hotscript";
import { assertType, test } from "vitest";
import type {
  Convert32bitHexToWord,
  ConvertHexStringToNibbleArr,
  Remove0x,
} from "./parse.js";
import type { Tuple } from "./tuple.js";

type Word1 = [...Tuple<false, 31>, true];
type Word4294967294 = [...Tuple<true, 31>, false];

test("Remove0x", () => {
  assertType<Call<Remove0x, "0x69">>("" as "69");
  assertType<Call<Remove0x, "0x356cfd6e6D0000400000003900b415f80669009e">>(
    "" as "356cfd6e6D0000400000003900b415f80669009e",
  );
});

test("ConvertHexStringToNibbleArr", () => {
  assertType<Call<ConvertHexStringToNibbleArr, "0xA">>(
    [] as unknown as [[true, false, true, false]],
  );
  assertType<Call<ConvertHexStringToNibbleArr, "0x69">>(
    [] as unknown as [[false, true, true, false], [true, false, false, true]],
  );
});

test("Convert32bitHexToWord", () => {
  assertType<Call<Convert32bitHexToWord, "0x00000001">>([] as unknown as Word1);
  assertType<Call<Convert32bitHexToWord, "0xfffffffe">>(
    [] as unknown as Word4294967294,
  );
});
