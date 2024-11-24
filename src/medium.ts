import { ListNode } from "./utils.ts";

/**
 * https://leetcode.com/problems/add-two-numbers/
 * @param l1
 * @param l2
 * @returns
 */
export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  const dummyHead = new ListNode(0);
  let curr = dummyHead;
  let carry = 0;
  while (l1 !== null || l2 !== null || carry !== 0) {
    const x = l1 !== null ? l1.val : 0;
    const y = l2 !== null ? l2.val : 0;
    const sum = carry + x + y;
    carry = Math.floor(sum / 10);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }
  return dummyHead.next;
}

/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * @param s
 * @returns
 */
export function longestSubstringWithoutRepeatingCharacters(s: string): number {
  let length = 0;
  const characterMap = new Map();
  let leftIndex = 0;

  for (let rightIndex = 0; rightIndex < s.length; rightIndex++) {
    const character = s[rightIndex];
    if (
      characterMap.has(character) && characterMap.get(character) >= leftIndex
    ) {
      leftIndex = characterMap.get(character) + 1;
    }
    length = Math.max(length, rightIndex - leftIndex + 1);
    characterMap.set(character, rightIndex);
  }
  return length;
}

/**
 * https://leetcode.com/problems/longest-palindromic-substring/
 * @param s
 * @returns
 */
export function longestPalindromicSubstring(s: string): string {
  function expandAroundCenter(left: number, right: number): string {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.substring(left + 1, right);
  }

  let longest = "";

  for (let i = 0; i < s.length; i++) {
    const odd = expandAroundCenter(i, i);
    const even = expandAroundCenter(i, i + 1);

    if (odd.length > longest.length) {
      longest = odd;
    }

    if (even.length > longest.length) {
      longest = even;
    }
  }

  return longest;
}

/**
 * https://leetcode.com/problems/zigzag-conversion/
 * @param s
 * @param numRows
 * @returns
 */
export function zigzagConversion(s: string, numRows: number): string {
  if (numRows === 1) return s;

  const rows = new Array(numRows).fill("");

  let currRow = -1;
  let direction = 1;

  for (let i = 0; i < s.length; i++) {
    currRow += direction;
    rows[currRow] += s[i];

    if (currRow == numRows - 1) direction = -1;
    else if (currRow == 0) direction = 1;
  }

  return rows.join("");
}

/**
 * https://leetcode.com/problems/reverse-integer/
 * @param x
 * @returns
 */
export function reverseInteger(x: number): number {
  let rev: number = 0;
  while (x !== 0) {
    const pop: number = x % 10;
    x = (x - pop) / 10;
    if (
      rev > Math.pow(2, 31) / 10 ||
      (rev === Math.pow(2, 31) / 10 && pop > 7)
    ) {
      return 0;
    }
    if (
      rev < Math.pow(-2, 31) / 10 ||
      (rev === Math.pow(-2, 31) / 10 && pop < -8)
    ) {
      return 0;
    }
    rev = rev * 10 + pop;
  }
  return rev;
}

/**
 * https://leetcode.com/problems/string-to-integer-atoi/
 * @param s
 * @returns
 */
export function stringToIntegerAtoi(s: string): number {
  let i = 0;
  while (s[i] === " ") i++;
  const sign = (s[i] === "+" || s[i] === "-") && s[i++] === "-" ? -1 : 1;
  let n = 0;
  while (47 < s.charCodeAt(i) && s.charCodeAt(i) < 58) n = n * 10 + +s[i++];
  return Math.min(2 ** 31 - 1, Math.max(-(2 ** 31), sign * n));
}

/**
 * https://leetcode.com/problems/container-with-most-water/
 * @param height
 * @returns
 */
export function containerWithMostWater(height: number[]): number {
  let low = 0;
  let high = height.length - 1;
  let ans = 0;

  while (low <= high) {
    const length = Math.min(height[low], height[high]);

    const breadth = high - low;
    const area = length * breadth;

    ans = Math.max(ans, area);

    if (height[low] < height[high]) low++;
    else high--;
  }
  return ans;
}

/**
 * https://leetcode.com/problems/integer-to-roman/
 * @param num
 * @returns
 */
export function integerToRoman(num: number): string {
  const rNums: Record<string, number> = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let result = "";
  for (const rN in rNums) {
    const count = num / rNums[rN];
    if (count > 0) {
      result += rN.repeat(count);
      num = num % rNums[rN];
    }
  }
  return result;
}

/**
 * https://leetcode.com/problems/3sum/
 * @param nums
 * @returns
 */
export function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const result: number[][] = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];

      if (sum === 0) {
        result.push([nums[i], nums[j], nums[k]]);
        while (j < k && nums[j] === nums[j + 1]) j++;
        while (j < k && nums[k] === nums[k - 1]) k--;
        j++;
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }

  return result;
}

/**
 * https://leetcode.com/problems/3sum-closest/
 * @param nums
 * @param target
 * @returns
 */
export function threeSumClosest(nums: number[], target: number): number {
  const n = nums.length;
  let ans = 0;
  let diff = Number.MAX_SAFE_INTEGER;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    let j = i + 1;
    let k = n - 1;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      const tmp = Math.abs(target - sum);
      if (tmp < diff) {
        ans = sum;
        diff = tmp;
      }
      if (sum > target) k--;
      else j++;
    }
  }
  return ans;
}
