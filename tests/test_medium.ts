import { assertEquals } from "@std/assert";
import * as medium from "../src/medium.ts";
import { ListNode } from "../src/utils.ts";

Deno.test(function addTwoNumbersTest() {
  assertEquals(
    medium.addTwoNumbers(
      new ListNode(2, new ListNode(4, new ListNode(3))),
      new ListNode(5, new ListNode(6, new ListNode(4))),
    ),
    new ListNode(7, new ListNode(0, new ListNode(8))),
  );
  assertEquals(
    medium.addTwoNumbers(new ListNode(), new ListNode()),
    new ListNode(),
  );
  assertEquals(
    medium.addTwoNumbers(
      new ListNode(
        9,
        new ListNode(
          9,
          new ListNode(
            9,
            new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))),
          ),
        ),
      ),
      new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))),
    ),
    new ListNode(
      8,
      new ListNode(
        9,
        new ListNode(
          9,
          new ListNode(
            9,
            new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1)))),
          ),
        ),
      ),
    ),
  );
});

Deno.test(function longestSubstringWithoutRepeatingCharactersTest() {
  assertEquals(
    medium.longestSubstringWithoutRepeatingCharacters("abcabcbb"),
    3,
  );
  assertEquals(medium.longestSubstringWithoutRepeatingCharacters("bbbbb"), 1);
  assertEquals(medium.longestSubstringWithoutRepeatingCharacters("pwwkew"), 3);
});

Deno.test(function longestPalindromicSubstringTest() {
  assertEquals(medium.longestPalindromicSubstring("babad"), "bab");
  assertEquals(medium.longestPalindromicSubstring("cbbd"), "bb");
});

Deno.test(function zigzagConversionTest() {
  assertEquals(medium.zigzagConversion("PAYPALISHIRING", 3), "PAHNAPLSIIGYIR");
  assertEquals(medium.zigzagConversion("PAYPALISHIRING", 4), "PINALSIGYAHRPI");
  assertEquals(medium.zigzagConversion("A", 1), "A");
});

Deno.test(function reverseIntegerTest() {
  assertEquals(medium.reverseInteger(123), 321);
  assertEquals(medium.reverseInteger(-123), -321);
  assertEquals(medium.reverseInteger(120), 21);
});

Deno.test(function stringToIntegerAtoiTest() {
  assertEquals(medium.stringToIntegerAtoi("42"), 42);
  assertEquals(medium.stringToIntegerAtoi("-042"), -42);
  assertEquals(medium.stringToIntegerAtoi("1337c0d3"), 1337);
  assertEquals(medium.stringToIntegerAtoi("0-1"), 0);
  assertEquals(medium.stringToIntegerAtoi("words and 987"), 0);
});

Deno.test(function containerWithMostWaterTest() {
  assertEquals(medium.containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49);
  assertEquals(medium.containerWithMostWater([1, 1]), 1);
});

Deno.test(function integerToRomanTest() {
  assertEquals(medium.integerToRoman(3749), "MMMDCCXLIX");
  assertEquals(medium.integerToRoman(58), "LVIII");
  assertEquals(medium.integerToRoman(1994), "MCMXCIV");
});

Deno.test(function threeSumTest() {
  assertEquals(medium.threeSum([-1, 0, 1, 2, -1, -4]), [[-1, -1, 2], [
    -1,
    0,
    1,
  ]]);
  assertEquals(medium.threeSum([0, 1, 1]), []);
  assertEquals(medium.threeSum([0, 0, 0]), [[0, 0, 0]]);
});

Deno.test(function threeSumClosestTest() {
  assertEquals(medium.threeSumClosest([-1, 2, 1, -4], 1), 2);
  assertEquals(medium.threeSumClosest([0, 0, 0], 1), 0);
});
