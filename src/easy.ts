import type { ListNode } from "./utils.ts";

/**
 * https://leetcode.com/problems/two-sum/
 *
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * You can return the answer in any order.
 *
 * Example 1:
 *
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 *
 * Example 2:
 *
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 *
 * Example 3:
 *
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 *
 * Constraints:
 * - 2 <= nums.length <= 10^4
 * - -10^9 <= nums[i] <= 10^9
 * - -10^9 <= target <= 10^9
 * - Only one valid answer exists.

 * @param nums
 * @param target
 * @returns
 */
export function twoSum(nums: number[], target: number): number[] {
  const map: Map<number, number> = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      const temp = map.get(complement);
      if (temp !== undefined) {
        return [temp, i];
      }
    }
    map.set(nums[i], i);
  }
  return [];
}

/**
 * https://leetcode.com/problems/palindrome-number/
 * @param x
 * @returns
 */
export function palindromeNumber(x: number): boolean {
  const num = x;
  if (x < 0) return false;

  let ans = 0;
  while (x > 0) {
    const last_digit = x % 10;
    ans = ans * 10 + last_digit;
    x = Math.floor(x / 10);
  }
  return num === ans;
}

/**
 * https://leetcode.com/problems/roman-to-integer/
 * @param s
 * @returns
 */
export function romanToInteger(s: string): number {
  const multipliers: { [key: string]: number } = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const tokens = Object.keys(multipliers);
  function next(): string {
    for (const token of tokens) {
      if (s.startsWith(token)) {
        s = s.substring(token.length);
        return token;
      }
    }
    throw new Error(`Unknown token: $(s)`);
  }

  const chars: string[] = [];

  while (s.length > 0) chars.push(next());

  return chars.reduce((sum, char) => {
    return sum += multipliers[char];
  }, 0);
}

/**
 * https://leetcode.com/problems/longest-common-prefix/
 * @param strs
 * @returns
 */
export function longestCommonPrefix(strs: string[]): string {
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
    }

    if (prefix === "") {
      return prefix;
    }
  }

  return prefix;
}

/**
 * https://leetcode.com/problems/valid-parentheses/
 * @param s
 * @returns
 */
export function validParentheses(s: string): boolean {
  const bracketsMap: { [key: string]: string } = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  const openBracketsStack = [];

  for (let i = 0; i < s.length; i++) {
    const currentBracket = s[i];

    if (["(", "[", "{"].includes(currentBracket)) {
      openBracketsStack.push(currentBracket);
    } else if (openBracketsStack.pop() !== bracketsMap[currentBracket]) {
      return false;
    }
  }
  return !openBracketsStack.length;
}

/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 * @param list1
 * @param list2
 * @returns
 */
export function mergeTwoSortedLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  if (list1 === null) return list2;
  if (list2 === null) return list1;

  if (list1.val < list2.val) {
    list1.next = mergeTwoSortedLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoSortedLists(list1, list2.next);
    return list2;
  }
}

/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * @param nums
 * @returns
 */
export function removeDuplicatesFromSortedArray(nums: number[]): number {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    nums[i++] = nums[j];
    while (j < nums.length - 1 && nums[j] === nums[j + 1]) {
      j++;
    }
  }
  return i;
}

/**
 * https://leetcode.com/problems/remove-element/
 * @param nums
 * @param val
 * @returns
 */
export function removeElement(nums: number[], val: number): number {
  let j = 0;
  for (const n of nums) if (n !== val) nums[j++] = n;
  return j;
}

/**
 * https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
 * @param haystack
 * @param needle
 * @returns
 */
export function findTheIndexOfTheFirstOccurrenceInAString(
  haystack: string,
  needle: string,
): number {
  let result = -1;
  let matchLoc = 0;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] == needle[matchLoc]) {
      matchLoc++;
      if (needle.length == matchLoc) {
        result = i - matchLoc + 1;
        break;
      }
    } else {
      i -= matchLoc;
      matchLoc = 0;
    }
  }

  return result;
}

/**
 * https://leetcode.com/problems/search-insert-position/
 * @param nums
 * @param target
 * @returns
 */
export function searchInsertPosition(nums: number[], target: number): number {
  let min = 0;
  let max = nums.length - 1;

  while (true) {
    const middle = Math.floor((min + max) / 2);
    const num = nums[middle];

    if (max - min <= 1) {
      if (target <= nums[min]) {
        return min;
      } else if (target <= nums[max]) {
        return max;
      } else {
        return max + 1;
      }
    }

    if (num > target) {
      max = middle;
    } else if (num < target) {
      min = middle;
    } else {
      return middle;
    }
  }
}
