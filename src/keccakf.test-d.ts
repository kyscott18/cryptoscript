import type { Call } from "hotscript";
import type { Chi, Iota, KeccakF, RhoAndPi, Theta, _KeccakF, _Theta } from "./keccakf.js";
import type { Tuple } from "./tuple.js";

import { assertType, test } from "vitest";
import type { Word } from "./bits.js";
import type { Convert32bitHexToWord } from "./parse.js";

type Word0 = Tuple<false, 32>;
type Word1 = [...Tuple<false, 31>, true];
type S1 = [...Tuple<Word0, 49>, Word1];
type B1 = [...Tuple<Word0, 9>, Word1];

test("_Theta", () => {
  type t = Call<_Theta, B1, 2, 8>;
  //   ^?

  assertType<t[0]>([] as unknown as Word0);
  assertType<t[1]>([] as unknown as Word1);
});

test("Theta", () => {
  type t = Call<Theta, S1>;
  //   ^?
  assertType<Tuple<Word, 50>>([] as unknown as t);

  assertType<t[0]>([] as unknown as Word0);
  assertType<t[1]>([] as unknown as Word1);
});

test("RhoAndPi", () => {
  type t = Call<RhoAndPi, S1>;
  //   ^?
  assertType<Tuple<Word, 50>>([] as unknown as t);
});

test("Chi", () => {
  type t = Call<Chi, S1>;
  //   ^?
  assertType<Tuple<Word, 50>>([] as unknown as t);
});

test("Iota", () => {
  type t = Call<Iota, 0, S1>;
  //   ^?
  assertType<Tuple<Word, 50>>([] as unknown as t);
});

test("_KeccakF", () => {
  type t = Call<_KeccakF, 0, S1>;
  //   ^?
  assertType<Tuple<Word, 50>>([] as unknown as t);

  assertType<t[0]>([] as unknown as Word1);
  assertType<t[1]>([] as unknown as Word1);
  assertType<t[2]>([] as unknown as Word0);
  assertType<t[3]>([] as unknown as Call<Convert32bitHexToWord, "0x00400000">);
  assertType<t[4]>([] as unknown as Word0);
  assertType<t[5]>([] as unknown as Call<Convert32bitHexToWord, "0x00004000">);
  assertType<t[6]>([] as unknown as Word0);
  assertType<t[7]>([] as unknown as Call<Convert32bitHexToWord, "0x00400001">);
  assertType<t[8]>([] as unknown as Word0);
  assertType<t[9]>([] as unknown as Call<Convert32bitHexToWord, "0x00004000">);

  assertType<t[10]>([] as unknown as Word0);
  assertType<t[11]>([] as unknown as Call<Convert32bitHexToWord, "0x20000008">);
  assertType<t[12]>([] as unknown as Word0);
  assertType<t[13]>([] as unknown as Word0);
  assertType<t[14]>([] as unknown as Word0);
  assertType<t[15]>([] as unknown as Call<Convert32bitHexToWord, "0x00000008">);
  assertType<t[16]>([] as unknown as Word0);
  assertType<t[17]>([] as unknown as Call<Convert32bitHexToWord, "0x20000000">);
  assertType<t[18]>([] as unknown as Word0);
  assertType<t[19]>([] as unknown as Word0);

  assertType<t[20]>([] as unknown as Word0);
  assertType<t[21]>([] as unknown as Call<Convert32bitHexToWord, "0x04000000">);
  assertType<t[22]>([] as unknown as Word0);
  assertType<t[23]>([] as unknown as Word0);
  assertType<t[24]>([] as unknown as Word0);
  assertType<t[25]>([] as unknown as Call<Convert32bitHexToWord, "0x04040000">);
  assertType<t[26]>([] as unknown as Word0);
  assertType<t[27]>([] as unknown as Word0);
  assertType<t[28]>([] as unknown as Word0);
  assertType<t[29]>([] as unknown as Call<Convert32bitHexToWord, "0x00040000">);

  assertType<t[30]>([] as unknown as Word0);
  assertType<t[31]>([] as unknown as Word0);
  assertType<t[32]>([] as unknown as Call<Convert32bitHexToWord, "0x00000010">);
  assertType<t[33]>([] as unknown as Word0);
  assertType<t[34]>([] as unknown as Call<Convert32bitHexToWord, "0x02000000">);
  assertType<t[35]>([] as unknown as Word0);
  assertType<t[36]>([] as unknown as Word0);
  assertType<t[37]>([] as unknown as Word0);
  assertType<t[38]>([] as unknown as Call<Convert32bitHexToWord, "0x02000010">);
  assertType<t[39]>([] as unknown as Word0);

  assertType<t[40]>([] as unknown as Word0);
  assertType<t[41]>([] as unknown as Word0);
  assertType<t[42]>([] as unknown as Call<Convert32bitHexToWord, "0x01000200">);
  assertType<t[43]>([] as unknown as Word0);
  assertType<t[44]>([] as unknown as Word0);
  assertType<t[45]>([] as unknown as Word0);
  assertType<t[46]>([] as unknown as Call<Convert32bitHexToWord, "0x00000200">);
  assertType<t[47]>([] as unknown as Word0);
  assertType<t[48]>([] as unknown as Call<Convert32bitHexToWord, "0x01000000">);
  assertType<t[49]>([] as unknown as Word0);
});

test("KeccakF", () => {
  // @ts-ignore
  type t = Call<KeccakF, S1>;
  //   ^?
  assertType<Tuple<Word, 50>>([] as unknown as t);

  assertType<t[0]>([] as unknown as Call<Convert32bitHexToWord, "0xc664fe32">);
  assertType<t[49]>([] as unknown as Call<Convert32bitHexToWord, "0x6c1379fc">);
});
