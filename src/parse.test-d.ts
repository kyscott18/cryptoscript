import type { Call, Strings } from "hotscript";
import { assertType, test } from "vitest";
import type {
  Convert32bitHexToWord,
  ConvertHexStringToWordArr,
  Remove0x,
  ZeroPad,
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

test("Convert32bitHexToWord", () => {
  assertType<Call<Convert32bitHexToWord, "0x00000001">>([] as unknown as Word1);
  assertType<Call<Convert32bitHexToWord, "0xfffffffe">>([] as unknown as Word4294967294);
});

test("ZeroPad", () => {
  type t = Call<ZeroPad, "0x1">;
  //   ^?
  assertType<Call<Strings.Length, t>>([] as unknown as 66);
});

test("ConvertHexToWordArr", () => {
  type t = Call<
    // ^?
    ConvertHexStringToWordArr,
    "0xecac02b4bf699eb038cae77d716507942cfd9db3845f75ce39222c3e8d444131"
  >;
  assertType<t["length"]>([] as unknown as 8);
});
