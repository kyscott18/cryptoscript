import type { Call } from "hotscript";
import type { Word } from "./bits.js";
import type { KeccakF, S } from "./keccakf.js";
import type { ConvertHexStringToWordArr, ConvertWordArrToHexString, HexString } from "./parse.js";
import type { Tuple } from "./tuple.js";

/**
 * Keccak256 hash function
 *
 * @param {`0x${string}`} Hex <=256b hex string
 */
export type Keccak256<T extends HexString> = Call<
  ConvertHexStringToWordArr,
  T
> extends infer a extends Tuple<Word, 8>
  ? Call<KeccakF, [...a, ...Tuple<Tuple<false, 32>, 42>]> extends infer s extends S
    ? Call<ConvertWordArrToHexString, [s[0], s[1], s[2], s[3], s[4], s[5], s[6], s[7]]>
    : never
  : never;
