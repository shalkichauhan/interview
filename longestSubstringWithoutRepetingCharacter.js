//Longest Substring Without Repeating Characters:
//Find the length of the longest substring without repeating characters.
// ttuiuewt
// friene
// iterate over the string
///*
/*
 Array and String Problems
(no)Two Sum: Given an array of integers, return indices of the two numbers such that they add up to a specific target.
  Longest Substring Without Repeating Characters: Find the length of the longest substring without repeating characters.
Maximum Subarray: Find the contiguous subarray which has the largest sum and return its sum.
Container With Most Water: Find two lines which together with the x-axis form a container that holds the most water.
Product of Array Except Self: Return an array such that each element at index i is the product of all the numbers in the original array except the one at i.


Linked List Problems
Reverse Linked List: Reverse a singly linked list.
Merge Two Sorted Lists: Merge two sorted linked lists and return it as a new list.
Detect Cycle in Linked List: Check if a linked list has a cycle in it.
Remove N-th Node From End of List: Remove the n-th node from the end of a linked list and return its head.
Intersection of Two Linked Lists: Find the node at which the intersection of two singly linked lists begins.


Tree and Graph Problems
Binary Tree Inorder Traversal: Return the inorder traversal of a binary tree.
Validate Binary Search Tree: Determine if a given binary tree is a valid binary search tree.
Lowest Common Ancestor of a Binary Search Tree: Find the lowest common ancestor of two given nodes in a binary search tree.
Maximum Depth of Binary Tree: Find the maximum depth of a binary tree.
Number of Islands: Given a 2D grid map of '1's (land) and '0's (water), count the number of islands.

Dynamic Programming Problems
Climbing Stairs: Given n steps, you can climb 1 or 2 steps at a time. How many distinct ways can you climb to the top?
Coin Change: Given coins of different denominations and a total amount, compute the fewest number of coins needed.
Longest Increasing Subsequence: Find the length of the longest increasing subsequence in an array of integers.
Edit Distance: Compute the minimum number of operations required to convert one string to another.
House Robber: Given an array of non-negative integers representing the amount of money of each house, determine the maximum amount you can rob tonight without alerting the police.

Sorting and Searching Problems
Merge Intervals: Given a collection of intervals, merge all overlapping intervals.
Top K Frequent Elements: Given a non-empty array, return the k most frequent elements.
Search in Rotated Sorted Array: Search an element in a rotated sorted array.
Kth Largest Element in an Array: Find the k-th largest element in an unsorted array.
Find Peak Element: Find a peak element in a given array.

Backtracking Problems
Permutations: Given a collection of distinct integers, return all possible permutations.
Combinations: Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.
Sudoku Solver: Write a program to solve a Sudoku puzzle by filling the empty cells.
Word Search: Given a 2D board and a word, find if the word exists in the grid.
N-Queens: The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.
 */
//Longest Substring Without Repeating Characters: Find the length of the longest substring without repeating characters
//pseudo code
// function that accepts a string.
// iterate over the string. run 2 loops (outer and inner)
//prepare an object, assign each item as key in that object if it doesn't exist already
// increment the inner loop and then check, if the item is not present in that object, then add that item as key again and proceed.
//
// if the item already exists then break out of loop and start again from the outer loop
// update the max number to the pointer of the inner loop.
// use math.Max to keep the max of the value in max
//
function longestSubstringWithoutRepetingCharacter(str) {
    var maxSubStr = 0;
    var finalObj;
    for (var i = 0; i < str.length; i++) {
        var obj = {};
        for (var j = i; j < str.length; j++) {
            if (!(str[j] in obj)) {
                obj[str[j]] = obj[str[j]] + 1 || 1;
            }
            else {
                break;
            }
            var sum = maxSubStr;
            maxSubStr = Math.max(maxSubStr, j - i + 1);
            if (maxSubStr > sum) {
                finalObj = obj;
            }
        }
    }
    var emptyArr = [];
    for (var key in finalObj) {
        emptyArr.push(key);
    }
    var arrayString = emptyArr.toString();
    var Finaloutput = arrayString.split(',').join('');
    return [maxSubStr, Finaloutput];
}
console.log(longestSubstringWithoutRepetingCharacter("abcdefabcf"));
