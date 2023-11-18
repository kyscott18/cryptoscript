import type { Call } from "hotscript";
import { assertType, test } from "vitest";
import type {
  ConvertHexToNibble,
  ConvertNibbleArrToWord,
  WordAnd,
  WordNot,
  WordOr,
  WordXOr,
  _0,
  _1,
} from "./bits.js";
import type { Tuple } from "./tuple.js";

type Word0 = Tuple<false, 32>;
type Word1 = [...Tuple<false, 31>, true];
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
  assertType<Call<ConvertNibbleArrToWord, [_0, _0, _0, _0, _0, _0, _0, _1]>>(
    [] as unknown as Word1,
  );
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
