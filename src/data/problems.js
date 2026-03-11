export const PROBLEMS = {
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",

    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
      notes: [
        "Each input has exactly one solution.",
        "You may not use the same element twice.",
      ],
    },

    examples: [
      {
        input: `4 9
2 7 11 15`,
        output: `0 1`,
      },
    ],

    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
    ],

    starterCode: {
      javascript: `const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split("\\n");

const [n, target] = input[0].split(" ").map(Number);
const nums = input[1].split(" ").map(Number);

// Write your solution here

console.log("");`,

      python: `import sys

input = sys.stdin.read().strip().split("\\n")

n, target = map(int, input[0].split())
nums = list(map(int, input[1].split()))

# Write your solution here

print()`,

      java: `import java.util.*;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int n = sc.nextInt();
    int target = sc.nextInt();

    int[] nums = new int[n];
    for(int i=0;i<n;i++) nums[i] = sc.nextInt();

    // Write your solution here

    System.out.println();
  }
}`,

      cpp: `#include <bits/stdc++.h>
using namespace std;

int main() {
  int n, target;
  cin >> n >> target;

  vector<int> nums(n);
  for(int i=0;i<n;i++) cin >> nums[i];

  // Write your solution here

  cout << "" << endl;
}`,
    },
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",

    description: {
      text: "Reverse a string.",
      notes: [],
    },

    examples: [
      {
        input: `hello`,
        output: `olleh`,
      },
    ],

    starterCode: {
      javascript: `const fs = require("fs");
const s = fs.readFileSync(0,"utf8").trim();

// Write your solution here

console.log("");`,

      python: `import sys
s = sys.stdin.read().strip()

# Write your solution here

print()`,

      java: `import java.util.*;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    String s = sc.nextLine();

    // Write your solution here

    System.out.println();
  }
}`,

      cpp: `#include <bits/stdc++.h>
using namespace std;

int main() {
  string s;
  cin >> s;

  // Write your solution here

  cout << "" << endl;
}`,
    },
  },

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",

    description: {
      text: "Check if a string is palindrome ignoring non-alphanumeric characters.",
      notes: [],
    },

    examples: [
      {
        input: `A man, a plan, a canal: Panama`,
        output: `true`,
      },
    ],

    starterCode: {
      javascript: `const fs = require("fs");
const s = fs.readFileSync(0,"utf8").trim();

// Write your solution here

console.log("");`,

      python: `import sys
s = sys.stdin.read().strip()

# Write your solution here

print()`,

      java: `import java.util.*;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    String s = sc.nextLine();

    // Write your solution here

    System.out.println();
  }
}`,

      cpp: `#include <bits/stdc++.h>
using namespace std;

int main() {
  string s;
  getline(cin,s);

  // Write your solution here

  cout << "" << endl;
}`,
    },
  },

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",

    description: {
      text: "Find the contiguous subarray with the largest sum.",
      notes: [],
    },

    examples: [
      {
        input: `9
-2 1 -3 4 -1 2 1 -5 4`,
        output: `6`,
      },
    ],

    starterCode: {
      javascript: `const fs = require("fs");
const input = fs.readFileSync(0,"utf8").trim().split("\\n");

const n = Number(input[0]);
const nums = input[1].split(" ").map(Number);

// Write your solution here

console.log("");`,

      python: `import sys
input = sys.stdin.read().strip().split("\\n")

n = int(input[0])
nums = list(map(int,input[1].split()))

# Write your solution here

print()`,

      java: `import java.util.*;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int n = sc.nextInt();
    int[] nums = new int[n];
    for(int i=0;i<n;i++) nums[i] = sc.nextInt();

    // Write your solution here

    System.out.println();
  }
}`,

      cpp: `#include <bits/stdc++.h>
using namespace std;

int main() {
  int n;
  cin >> n;

  vector<int> nums(n);
  for(int i=0;i<n;i++) cin >> nums[i];

  // Write your solution here

  cout << "" << endl;
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
  cpp: {
    name: "C++",
    icon: "/cpp.png",
    monacoLang: "cpp",
  },
};
