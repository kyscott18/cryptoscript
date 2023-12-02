import type { Call, Fn, Identity, Numbers, Pipe, Strings, Tuples } from "hotscript";
import type { ConvertHexToNibble, ConvertNibbleArrToWord, Nibble, Word } from "./bits.js";
import type { Tuple } from "./tuple.js";

export type HexString = `0x${string}`;

/**
 * Remove prepended "0x" from {@link HexString}
 */
export interface Remove0x extends Fn {
  return: this["args"] extends [infer t extends `0x${string}`]
    ? Call<Strings.Slice<2, 66>, t>
    : never;
}

export interface Convert32bitHexToWord extends Fn {
  return: this["args"] extends [infer hex extends HexString]
    ? Pipe<
        hex,
        [
          Remove0x,
          Strings.Lowercase,
          Strings.ToTuple,
          Tuples.Map<ConvertHexToNibble>,
          ConvertNibbleArrToWord,
        ]
      >
    : never;
}

export interface ZeroPad extends Fn {
  return: this["args"] extends [infer hex extends HexString]
    ? Call<
        Strings.Repeat,
        Call<Numbers.Sub, 66, Call<Strings.Length, hex>>,
        "0"
      > extends infer suffix
      ? Call<Strings.Append, suffix, hex>
      : never
    : never;
}

export interface ConvertHexStringToWordArr extends Fn {
  return: this["args"] extends [infer hex extends HexString]
    ? Pipe<
        hex,
        [ZeroPad, Remove0x, Strings.Lowercase, Strings.ToTuple, Tuples.Map<ConvertHexToNibble>]
      > extends infer a extends Tuple<Nibble, 64>
      ? [
          Call<Tuples.FlatMap<Identity>, [a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7]]>,
          Call<Tuples.FlatMap<Identity>, [a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]]>,
          Call<Tuples.FlatMap<Identity>, [a[16], a[17], a[18], a[19], a[20], a[21], a[22], a[23]]>,
          Call<Tuples.FlatMap<Identity>, [a[24], a[25], a[26], a[27], a[28], a[29], a[30], a[31]]>,
          Call<Tuples.FlatMap<Identity>, [a[32], a[33], a[34], a[35], a[36], a[37], a[38], a[39]]>,
          Call<Tuples.FlatMap<Identity>, [a[40], a[41], a[42], a[43], a[44], a[45], a[46], a[47]]>,
          Call<Tuples.FlatMap<Identity>, [a[48], a[49], a[50], a[51], a[52], a[53], a[54], a[55]]>,
          Call<Tuples.FlatMap<Identity>, [a[56], a[57], a[58], a[59], a[60], a[61], a[62], a[63]]>,
        ]
      : never
    : never;
}

export interface ConvertWordArrToHexString extends Fn {
  return: this["args"] extends [infer w extends Tuple<Word, 8>] ? w : never;
}
