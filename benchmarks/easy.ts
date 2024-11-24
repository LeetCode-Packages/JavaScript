import * as easy from "../src/easy.ts";

Deno.bench("twoSum", () => {
  easy.twoSum([2, 7, 11, 15], 9);
});

Deno.bench("palindromeNumber", () => {
  easy.palindromeNumber(123321);
});
