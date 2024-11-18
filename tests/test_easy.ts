import { assertArrayIncludes } from "@std/assert";
import * as easy from "../src/easy.ts";

Deno.test(function twoSumTest() {
  assertArrayIncludes(easy.twoSum([2, 7, 11, 15], 9), [0, 1]);
  assertArrayIncludes(easy.twoSum([3, 2, 4], 6), [1, 2]);
  assertArrayIncludes(easy.twoSum([3, 3], 6), [0, 1]);
});
