import type { Call, Fn, Pipe, Strings, Tuples } from "hotscript";
import type { NibbleToBits } from "./bits.js";

type AddressLength = 42;

export interface HexToBits extends Fn {
  return: this["args"] extends [infer hex extends `0x${string}`]
    ? Pipe<
        hex,
        [Remove0x, Strings.Lowercase, Strings.ToTuple, Tuples.Map<NibbleToBits>]
      >
    : never;
}

export interface Remove0x extends Fn {
  return: this["args"] extends [infer t extends `0x${string}`]
    ? Call<Strings.Slice<2, AddressLength>, t>
    : never;
}
