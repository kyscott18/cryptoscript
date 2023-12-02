import type { Fn } from "hotscript";
import type { HexString } from "./parse.js";

export interface Keccak256 extends Fn {
  return: this["args"] extends [infer hex extends HexString] ? hex : never;
}
