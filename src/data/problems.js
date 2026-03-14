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
        input: "4 9\n2 7 11 15",
        output: "0 1",
      },
      {
        input: "3 6\n3 2 4",
        output: "1 2",
      },
      {
        input: "2 6\n3 3",
        output: "0 1",
      },
    ],

    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
    ],

    starterCode: {
      javascript: `const fs = require("fs");

const input = fs.readFileSync(0,"utf8").trim().split("\\n");

const [n,target] = input[0].split(" ").map(Number);
const nums = input[1].split(" ").map(Number);

function twoSum(nums,target){

    // Write your solution here

}

const ans = twoSum(nums, target);

// Safe output wrapper
if (ans === undefined) {
  console.log("");
} else if (Array.isArray(ans)) {
  console.log(ans.join(" "));
} else {
  console.log(ans);
}
`,

      python: `import sys

input = sys.stdin.read().strip().split("\\n")

n, target = map(int, input[0].split())
nums = list(map(int, input[1].split()))

def twoSum(nums, target):
    
    # Write your solution here
    pass

ans = twoSum(nums, target)
print(ans[0], ans[1])
`,

      java: `import java.util.*;

public class Main {

    public static int[] twoSum(int[] nums, int target) {

        // Write your solution here

        return new int[]{-1,-1};
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int target = sc.nextInt();

        int[] nums = new int[n];
        for(int i=0;i<n;i++) nums[i] = sc.nextInt();

        int[] ans = twoSum(nums,target);

        System.out.println(ans[0] + " " + ans[1]);
    }
}
`,

      cpp: `#include <bits/stdc++.h>
using namespace std;

vector<int> twoSum(vector<int>& nums,int target){

    // Write your solution here

    return {-1,-1};
}

int main(){

    int n,target;
    cin>>n>>target;

    vector<int> nums(n);
    for(int i=0;i<n;i++) cin>>nums[i];

    vector<int> ans = twoSum(nums,target);

    cout<<ans[0]<<" "<<ans[1]<<endl;
}
`,
    },
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    functionName: "reverseString",

    description: {
      text: "Write a function that reverses a string.",
      notes: ["Return the reversed string."],
    },

    examples: [
      {
        input: "hello",
        output: "olleh",
      },
    ],

    constraints: ["1 ≤ s.length ≤ 10⁵"],

    starterCode: {
      javascript: `const fs = require("fs");
const s = fs.readFileSync(0,"utf8").trim();

function reverseString(s){

  // Write your solution here

}

console.log(reverseString(s));
`,

      python: `import sys
s = sys.stdin.read().strip()

def reverseString(s):

    # Write your solution here
    pass

print(reverseString(s))
`,

      java: `import java.util.*;

public class Main {

    public static String reverseString(String s){

        // Write your solution here
        return "";
    }

    public static void main(String[] args){

        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();

        System.out.println(reverseString(s));
    }
}
`,

      cpp: `#include <bits/stdc++.h>
using namespace std;

string reverseString(string s){

    // Write your solution here

    return "";
}

int main(){

    string s;
    cin>>s;

    cout<<reverseString(s)<<endl;
}
`,
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
        input: "A man, a plan, a canal: Panama",
        output: "true",
      },
    ],

    starterCode: {
      javascript: `const fs = require("fs");
const s = fs.readFileSync(0,"utf8").trim();

function isPalindrome(s){

  // Write your solution here

}

console.log(isPalindrome(s));
`,

      python: `import sys
s = sys.stdin.read().strip()

def isPalindrome(s):

    # Write your solution here
    pass

print(isPalindrome(s))
`,

      java: `import java.util.*;

public class Main {

    public static boolean isPalindrome(String s){

        // Write your solution here
        return false;
    }

    public static void main(String[] args){

        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();

        System.out.println(isPalindrome(s));
    }
}
`,

      cpp: `#include <bits/stdc++.h>
using namespace std;

bool isPalindrome(string s){

    // Write your solution here

    return false;
}

int main(){

    string s;
    getline(cin,s);

    cout<<isPalindrome(s)<<endl;
}
`,
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

    examples: [
      {
        input: "9\n-2 1 -3 4 -1 2 1 -5 4",
        output: "6",
      },
    ],

    starterCode: {
      javascript: `const fs = require("fs");

const input = fs.readFileSync(0,"utf8").trim().split("\\n");

const n = Number(input[0]);
const nums = input[1].split(" ").map(Number);

function maxSubArray(nums){

    // Write your solution here

}

console.log(maxSubArray(nums));
`,

      python: `import sys

input = sys.stdin.read().strip().split("\\n")

n = int(input[0])
nums = list(map(int,input[1].split()))

def maxSubArray(nums):

    # Write your solution here
    pass

print(maxSubArray(nums))
`,

      java: `import java.util.*;

public class Main {

    public static int maxSubArray(int[] nums){

        // Write your solution here
        return 0;
    }

    public static void main(String[] args){

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        int[] nums = new int[n];
        for(int i=0;i<n;i++) nums[i] = sc.nextInt();

        System.out.println(maxSubArray(nums));
    }
}
`,

      cpp: `#include <bits/stdc++.h>
using namespace std;

int maxSubArray(vector<int>& nums){

    // Write your solution here

    return 0;
}

int main(){

    int n;
    cin>>n;

    vector<int> nums(n);
    for(int i=0;i<n;i++) cin>>nums[i];

    cout<<maxSubArray(nums)<<endl;
}
`,
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
  cpp: {
    name: "C++",
    icon: "/c++.png",
    monacoLang: "cpp",
  },
};
