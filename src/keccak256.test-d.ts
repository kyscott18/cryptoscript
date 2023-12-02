import { assertType, test } from "vitest";
import type { Keccak256 } from "./keccak256.js";

test("Keccak256", () => {
  // @ts-ignore
  type t = Keccak256<"0x69">;
  //   ^?

  assertType<t>(
    {} as unknown as "0xdb37925934a3d3177db64e11f5e0156ceb8a756fee58ded16e549afa607ddb1d",
  );
});
