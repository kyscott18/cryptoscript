import type { Call } from "hotscript";
import { assertType, test } from "vitest";
import type {
  ConvertHexToNibble,
  ConvertNibbleArrToWord,
  ConvertWordToNibbleArr,
  WordAnd,
  WordNot,
  WordOr,
  WordRotlH,
  WordRotlL,
  WordShl,
  WordShr,
  WordXOr,
  _0,
  _1,
} from "./bits.js";
import type { Tuple } from "./tuple.js";

type Word0 = Tuple<false, 32>;
type Word1 = [...Tuple<false, 31>, true];
type Word255 = [...Tuple<false, 24>, ...Tuple<true, 8>];
type Word65536 = [...Tuple<false, 15>, true, ...Tuple<false, 16>];
type Word16711680 = [...Tuple<false, 8>, ...Tuple<true, 8>, ...Tuple<false, 16>];
type Word4294967294 = [...Tuple<true, 31>, false];
type Word4294967295 = Tuple<true, 32>;

test("ConvertHexToNibble", () => {
  assertType<Call<ConvertHexToNibble, "5">>([false, true, false, true] as [
    false,
    true,
    false,
    true,
  ]);
  assertType<Call<ConvertHexToNibble, "a">>([true, false, true, false] as [
    true,
    false,
    true,
    false,
  ]);
});

test("ConvertNibbleArrToWord", () => {
  type t = Call<ConvertNibbleArrToWord, [_0, _0, _0, _0, _0, _0, _0, _1]>;
  //   ^?

  assertType<t>([] as unknown as Word1);
});

test("ConvertWordToNibbleArr", () => {
  type t = Call<ConvertWordToNibbleArr, Word1>;
  //   ^?

  assertType<t>([] as unknown as [_0, _0, _0, _0, _0, _0, _0, _1]);
});

test("WordAdd", () => {
  assertType<Call<WordAnd, Word0, Word1>>([] as unknown as Word0);
  assertType<Call<WordAnd, Word1, Word1>>([] as unknown as Word1);
});

test("WordOr", () => {
  assertType<Call<WordOr, Word0, Word1>>([] as unknown as Word1);
  assertType<Call<WordOr, Word1, Word1>>([] as unknown as Word1);
});

test("WordXOr", () => {
  assertType<Call<WordXOr, Word0, Word1>>([] as unknown as Word1);
  assertType<Call<WordXOr, Word1, Word1>>([] as unknown as Word0);
});

test("WordNot", () => {
  assertType<Call<WordNot, Word0>>([] as unknown as Word4294967295);
  assertType<Call<WordNot, Word1>>([] as unknown as Word4294967294);
});

test("WordShl", () => {
  assertType<Call<WordShr, Word1, 1>>([] as unknown as Word0);
  assertType<Call<WordShr, Word4294967295, 31>>([] as unknown as Word1);
});

test("WordShl", () => {
  assertType<Call<WordShl, Word1, 1>>([] as unknown as [...Tuple<false, 30>, true, false]);
  assertType<Call<WordShl, Word1, 8>>(
    [] as unknown as [...Tuple<false, 23>, true, ...Tuple<false, 8>],
  );
});

test("WordRotlH", () => {
  assertType<Call<WordRotlH, Word1, Word255, 16>>([] as unknown as Word65536);
  assertType<Call<WordRotlH, Word1, Word255, 48>>([] as unknown as Word16711680);
});

test("WordRotlL", () => {
  assertType<Call<WordRotlL, Word1, Word255, 16>>([] as unknown as Word16711680);
  assertType<Call<WordRotlL, Word1, Word255, 48>>([] as unknown as Word65536);
});
