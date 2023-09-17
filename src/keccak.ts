import type { Call, Fn, PartialApply, Pipe } from "hotscript";
import type { Word, WordXOr } from "./bits.js";
import type { Tuple } from "./tuple.js";

type S = Tuple<Word, 25>;

type C = Tuple<Word, 5>;

export interface Transform1 extends Fn {
  return: this["args"] extends [infer s extends S]
    ? [
        s,
        [
          Pipe<
            s[0],
            [
              PartialApply<WordXOr, [s[5]]>,
              PartialApply<WordXOr, [s[10]]>,
              PartialApply<WordXOr, [s[15]]>,
              PartialApply<WordXOr, [s[20]]>,
            ]
          >,
          Pipe<
            s[1],
            [
              PartialApply<WordXOr, [s[6]]>,
              PartialApply<WordXOr, [s[11]]>,
              PartialApply<WordXOr, [s[16]]>,
              PartialApply<WordXOr, [s[21]]>,
            ]
          >,
          Pipe<
            s[2],
            [
              PartialApply<WordXOr, [s[7]]>,
              PartialApply<WordXOr, [s[12]]>,
              PartialApply<WordXOr, [s[17]]>,
              PartialApply<WordXOr, [s[22]]>,
            ]
          >,
          Pipe<
            s[3],
            [
              PartialApply<WordXOr, [s[8]]>,
              PartialApply<WordXOr, [s[13]]>,
              PartialApply<WordXOr, [s[18]]>,
              PartialApply<WordXOr, [s[23]]>,
            ]
          >,
          Pipe<
            s[4],
            [
              PartialApply<WordXOr, [s[9]]>,
              PartialApply<WordXOr, [s[14]]>,
              PartialApply<WordXOr, [s[19]]>,
              PartialApply<WordXOr, [s[24]]>,
            ]
          >,
        ],
      ]
    : never;
}

export interface Transform2 extends Fn {
  return: this["args"] extends [infer s extends S, infer c extends C]
    ? [
        Call<WordXOr, s[0], Call<Mask, c[4], c[1]>>,
        Call<WordXOr, s[1], Call<Mask, c[0], c[2]>>,
        Call<WordXOr, s[2], Call<Mask, c[1], c[3]>>,
        Call<WordXOr, s[3], Call<Mask, c[2], c[4]>>,
        Call<WordXOr, s[4], Call<Mask, c[3], c[0]>>,
        Call<WordXOr, s[5], Call<Mask, c[4], c[1]>>,
        Call<WordXOr, s[6], Call<Mask, c[0], c[2]>>,
        Call<WordXOr, s[7], Call<Mask, c[1], c[3]>>,
        Call<WordXOr, s[8], Call<Mask, c[2], c[4]>>,
        Call<WordXOr, s[9], Call<Mask, c[3], c[0]>>,
        Call<WordXOr, s[10], Call<Mask, c[4], c[1]>>,
        Call<WordXOr, s[11], Call<Mask, c[0], c[2]>>,
        Call<WordXOr, s[12], Call<Mask, c[1], c[3]>>,
        Call<WordXOr, s[13], Call<Mask, c[2], c[4]>>,
        Call<WordXOr, s[14], Call<Mask, c[3], c[0]>>,
        Call<WordXOr, s[15], Call<Mask, c[4], c[1]>>,
        Call<WordXOr, s[16], Call<Mask, c[0], c[2]>>,
        Call<WordXOr, s[17], Call<Mask, c[1], c[3]>>,
        Call<WordXOr, s[18], Call<Mask, c[2], c[4]>>,
        Call<WordXOr, s[19], Call<Mask, c[3], c[0]>>,
        Call<WordXOr, s[20], Call<Mask, c[4], c[1]>>,
        Call<WordXOr, s[21], Call<Mask, c[0], c[2]>>,
        Call<WordXOr, s[22], Call<Mask, c[1], c[3]>>,
        Call<WordXOr, s[23], Call<Mask, c[2], c[4]>>,
        Call<WordXOr, s[24], Call<Mask, c[3], c[0]>>,
      ]
    : never;
}

export interface Mask extends Fn {
  return: this["args"] extends [infer a extends Word, infer b extends Word]
    ? Call<
        WordXOr,
        a,
        [
          b[1],
          b[2],
          b[3],
          b[4],
          b[5],
          b[6],
          b[7],
          b[8],
          b[9],
          b[10],
          b[11],
          b[12],
          b[13],
          b[14],
          b[15],
          b[16],
          b[17],
          b[18],
          b[19],
          b[20],
          b[21],
          b[22],
          b[23],
          b[24],
          b[25],
          b[26],
          b[27],
          b[28],
          b[29],
          b[30],
          b[31],
          b[32],
          b[33],
          b[34],
          b[35],
          b[36],
          b[37],
          b[38],
          b[39],
          b[40],
          b[41],
          b[42],
          b[43],
          b[44],
          b[45],
          b[46],
          b[47],
          b[48],
          b[49],
          b[50],
          b[51],
          b[52],
          b[53],
          b[54],
          b[55],
          b[56],
          b[57],
          b[58],
          b[59],
          b[60],
          b[61],
          b[62],
          b[63],
          b[0],
        ]
      >
    : never;
}
