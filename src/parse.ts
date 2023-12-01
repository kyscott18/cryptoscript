import type { Call, Fn, Pipe, Strings, Tuples } from "hotscript";
import type { ConvertHexToNibble, ConvertNibbleArrToWord } from "./bits.js";

type HexString = `0x${string}`;
type AddressLength = 42;

/**
 * Remove prepended "0x" from {@link HexString}
 */
export interface Remove0x extends Fn {
  return: this["args"] extends [infer t extends `0x${string}`]
    ? Call<Strings.Slice<2, AddressLength>, t>
    : never;
}

export interface ConvertHexStringToNibbleArr extends Fn {
  return: this["args"] extends [infer hex extends HexString]
    ? Pipe<hex, [Remove0x, Strings.Lowercase, Strings.ToTuple, Tuples.Map<ConvertHexToNibble>]>
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
