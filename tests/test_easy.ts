import {
  assert,
  assertAlmostEquals,
  assertArrayIncludes,
  assertEquals,
  assertFalse,
} from "@std/assert";
import * as easy from "../src/easy.ts";
import { ListNode } from "../src/utils.ts";

Deno.test(function twoSumTest() {
  assertArrayIncludes(easy.twoSum([2, 7, 11, 15], 9), [0, 1]);
  assertArrayIncludes(easy.twoSum([3, 2, 4], 6), [1, 2]);
  assertArrayIncludes(easy.twoSum([3, 3], 6), [0, 1]);
});

Deno.test(function palindromeNumberTest() {
  assert(easy.palindromeNumber(121));
  assertFalse(easy.palindromeNumber(-121));
  assertFalse(easy.palindromeNumber(10));
});

Deno.test(function romanToIntegerTest() {
  assertEquals(easy.romanToInteger("III"), 3);
  assertEquals(easy.romanToInteger("LVIII"), 58);
  assertEquals(easy.romanToInteger("MCMXCIV"), 1994);
});

Deno.test(function longestCommonPrefixTest() {
  assertEquals(easy.longestCommonPrefix(["flower", "flow", "flight"]), "fl");
  assertEquals(easy.longestCommonPrefix(["dog", "racecar", "car"]), "");
});

Deno.test(function validParenthesesTest() {
  assert(easy.validParentheses("()"));
  assert(easy.validParentheses("()[]{}"));
  assertFalse(easy.validParentheses("(]"));
  assert(easy.validParentheses("([])"));
});

Deno.test(function mergeTwoSortedListsTest() {
  assertEquals(
    easy.mergeTwoSortedLists(
      new ListNode(1, new ListNode(2, new ListNode(4, null))),
      new ListNode(1, new ListNode(3, new ListNode(4))),
    ),
    new ListNode(
      1,
      new ListNode(
        1,
        new ListNode(
          2,
          new ListNode(3, new ListNode(4, new ListNode(4, null))),
        ),
      ),
    ),
  );
  assertEquals(easy.mergeTwoSortedLists(null, null), null);
  assertEquals(
    easy.mergeTwoSortedLists(null, new ListNode(0)),
    new ListNode(0),
  );
});

Deno.test(function removeDuplicatesFromSortedArrayTest() {
  let nums: number[] = [1, 1, 2];
  assertEquals(easy.removeDuplicatesFromSortedArray(nums), 2);
  assertEquals(nums.slice(0, 2), [1, 2]);

  nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  assertEquals(easy.removeDuplicatesFromSortedArray(nums), 5);
  assertEquals(nums.slice(0, 5), [0, 1, 2, 3, 4]);
});

Deno.test(function removeElementTest() {
  let nums: number[] = [3, 2, 2, 3];
  assertEquals(easy.removeElement(nums, 3), 2);
  assertArrayIncludes(nums.slice(0, 2), [2, 2]);

  nums = [0, 1, 2, 2, 3, 0, 4, 2];
  assertEquals(easy.removeElement(nums, 2), 5);
  assertArrayIncludes(nums.slice(0, 5), [0, 1, 4, 0, 3])
});

Deno.test(function findTheIndexOfTheFirstOccurrenceInAStringTest() {
  assertEquals(
    easy.findTheIndexOfTheFirstOccurrenceInAString("sadbutsad", "sad"),
    0,
  );
  assertEquals(
    easy.findTheIndexOfTheFirstOccurrenceInAString("leetcode", "leeto"),
    -1,
  );
});

Deno.test(function searchInsertPositionTest() {
  assertEquals(easy.searchInsertPosition([1, 3, 5, 6], 5), 2);
  assertEquals(easy.searchInsertPosition([1, 3, 5, 6], 2), 1);
  assertEquals(easy.searchInsertPosition([1, 3, 5, 6], 7), 4);
});
