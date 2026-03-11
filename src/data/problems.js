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
