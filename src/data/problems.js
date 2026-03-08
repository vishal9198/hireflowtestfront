export const PROBLEMS = {
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",
    functionName: "twoSum",

    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
      notes: [
        "Each input has exactly one solution.",
        "You may not use the same element twice.",
      ],
    },

    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
      },
    ],

    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
    ],

    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}`,

      python: `def twoSum(nums, target):
    # Write your solution here
    pass`,

      java: `class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        return new int[0];
    }
}`,
    },

    testCases: {
      javascript: `
console.log(twoSum([2,7,11,15],9))
console.log(twoSum([3,2,4],6))
console.log(twoSum([3,3],6))
`,
      python: `
print(twoSum([2,7,11,15],9))
print(twoSum([3,2,4],6))
print(twoSum([3,3],6))
`,
      java: `
public static void main(String[] args){
  System.out.println(Arrays.toString(twoSum(new int[]{2,7,11,15},9)));
  System.out.println(Arrays.toString(twoSum(new int[]{3,2,4},6)));
  System.out.println(Arrays.toString(twoSum(new int[]{3,3},6)));
}
`,
    },

    expectedOutput: {
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0, 1]\n[1, 2]\n[0, 1]",
      java: "[0, 1]\n[1, 2]\n[0, 1]",
    },
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    functionName: "reverseString",

    description: {
      text: "Write a function that reverses a string given as an array of characters.",
      notes: ["Modify the array in-place with O(1) extra memory."],
    },

    examples: [
      {
        input: '["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
    ],

    constraints: ["1 ≤ s.length ≤ 10⁵"],

    starterCode: {
      javascript: `function reverseString(s) {
  // Write your solution here
  
}`,

      python: `def reverseString(s):
    # Write your solution here
    pass`,

      java: `class Solution {
    public static void reverseString(char[] s) {
        // Write your solution here
    }
}`,
    },

    testCases: {
      javascript: `
let a=["h","e","l","l","o"]
reverseString(a)
console.log(a)

let b=["H","a","n","n","a","h"]
reverseString(b)
console.log(b)
`,
      python: `
a=["h","e","l","l","o"]
reverseString(a)
print(a)

b=["H","a","n","n","a","h"]
reverseString(b)
print(b)
`,
      java: `
public static void main(String[] args){
 char[] a={'h','e','l','l','o'};
 reverseString(a);
 System.out.println(Arrays.toString(a));

 char[] b={'H','a','n','n','a','h'};
 reverseString(b);
 System.out.println(Arrays.toString(b));
}
`,
    },

    expectedOutput: {
      javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
      python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
      java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
    },
  },

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    functionName: "isPalindrome",

    description: {
      text: "Return true if the string is a palindrome after removing non-alphanumeric characters.",
      notes: [],
    },

    examples: [
      {
        input: `"A man, a plan, a canal: Panama"`,
        output: "true",
      },
    ],

    starterCode: {
      javascript: `function isPalindrome(s) {
  // Write your solution here
}`,
      python: `def isPalindrome(s):
    pass`,
      java: `class Solution {
    public static boolean isPalindrome(String s) {
        return false;
    }
}`,
    },

    testCases: {
      javascript: `
console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))
console.log(isPalindrome(" "))
`,
      python: `
print(isPalindrome("A man, a plan, a canal: Panama"))
print(isPalindrome("race a car"))
print(isPalindrome(" "))
`,
      java: `
public static void main(String[] args){
 System.out.println(isPalindrome("A man, a plan, a canal: Panama"));
 System.out.println(isPalindrome("race a car"));
 System.out.println(isPalindrome(" "));
}
`,
    },

    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
    },
  },

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    functionName: "maxSubArray",

    description: {
      text: "Find the contiguous subarray with the largest sum.",
      notes: [],
    },

    starterCode: {
      javascript: `function maxSubArray(nums) {
  // Write your solution here
}`,
      python: `def maxSubArray(nums):
    pass`,
      java: `class Solution {
    public static int maxSubArray(int[] nums) {
        return 0;
    }
}`,
    },

    testCases: {
      javascript: `
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubArray([1]))
console.log(maxSubArray([5,4,-1,7,8]))
`,
      python: `
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
print(maxSubArray([1]))
print(maxSubArray([5,4,-1,7,8]))
`,
      java: `
public static void main(String[] args){
 System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4}));
 System.out.println(maxSubArray(new int[]{1}));
 System.out.println(maxSubArray(new int[]{5,4,-1,7,8}));
}
`,
    },

    expectedOutput: {
      javascript: "6\n1\n23",
      python: "6\n1\n23",
      java: "6\n1\n23",
    },
  },
};

export const LANGUAGE_CONFIG = {
  javascript: {
    name: "JavaScript",
    icon: "/javascript.png",
    monacoLang: "javascript",
  },
  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python",
  },
  java: {
    name: "Java",
    icon: "/java.png",
    monacoLang: "java",
  },
};
