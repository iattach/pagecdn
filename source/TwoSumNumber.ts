//two sums
const numsArray: number[] = [1,3,7,9,2];
const targetToFind = 11;

const findTwoSum = (nums:number[], target: number) : number[]|null =>{
  const numsMap = new Map<number, number>();
  for(let p = 0; p<nums.length;p++){
    const currentMapVal = numsMap.get(nums[p])!;
    if(currentMapVal >=0){
      return [currentMapVal, p]
    } else {
      const numberToFound = target - nums[p];
      numsMap.set(numberToFound,p);
    }
  }
  return null;
}

console.log(findTwoSum(numsArray,targetToFind));

//contains with most water
const heightsArray = [4,8,1,2,3,9];

const getMaxWaterContainer = (heights:number[]): number =>{
  let p1 = 0, p2 = heights.length -1, maxArea = 0;
  while(p1<p2) {
    const height = Math.min(heights[p1],heights[p2]);
    const width = p2-p1;
    const area = height * width;
    maxArea = Math.max(maxArea, area);
    if(heights[p1] <=heights[p2]){
      p1++;
    }else {
      p2--;
    }
  }
  return maxArea;
}

console.log(getMaxWaterContainer(heightsArray));

//get trapped rain
const elevationArray = [0,1,0,2,1,0,3,1,0,1,2]

const getTrappedRainWater = (heights:number[]): number =>{
  let left = 0, right = heights.length -1, totalWater = 0, maxLeft = 0, maxRight = 0;
  while(left < right ){
    if(heights[left] <= heights[right]){
      if(heights[left]<=heights[right]){
      maxLeft = heights[left];
      } else {
        totalWater += maxLeft - heights[left];
      }
      left++;
    }else{
      if(heights[right] >= maxRight){
        maxRight = heights[right];
      }else {
        totalWater += maxRight - heights[right];
      }
      right--;
    }
  }
  return totalWater;
}

console.log(getTrappedRainWater(elevationArray));

//backspace

const string1 = "ab#z";
const string2 = "az#z";

const backspace = (S:string , T:string) : boolean =>{
  let p1 = S.length - 1,p2=T.length -1 ;
  while(p1>=0 || p2>=0){
    if(S[p1] === '#' || T[p2] === '#'){
      if(S[p1] === '#'){
        let backCount =2 ;
        while(backCount >= 0){
          p1--;
          backCount--;
          if(S[p1] === '#'){
            backCount+=2;
          }
        }
      }

      if(S[p2] === '#'){
        let backCount =2 ;
        while(backCount >= 0){
          p2--;
          backCount--;
          if(S[p2] === '#'){
            backCount+=2;
          }
        }
      }

    }else{
      if(S[p1]!==T[p2]){
        return false;
      }else{
        p1--;
        p2--;
      }
    }
  }
  return true;
}
console.log(backspace(string1,string2));

//longest substring without repeat
const string = "auahgjhg";

const lengthOfLongestSubstring = (s:string):number =>{
  if(s.length <=1) return s.length;
  const seen = new Map<string,number>();
  let left = 0, longest =0;
  for(let right = 0; right<s.length;right++){
    const currentChar = s.charAt(right);
    const previouslySeenChar = seen.get(currentChar)!;
    if(previouslySeenChar >= left){
      left = previouslySeenChar +1;
    }

    seen.set(currentChar,right);
    
    longest = Math.max(longest, right - left +1 );
    console.log(currentChar,previouslySeenChar,longest,left,right,seen);
  }
  return longest;
}

console.log(lengthOfLongestSubstring(string));

// valide palidrome from center
const string =  "A man, a plan, a canal: Panama";
const isValidePalindrom = (s: string) : boolean => {
  s= s.replace(/[^A-Za-z0-9]/g,'').toLowerCase();
  let left = Math.floor(s.length/2),right= left;
  if(s.length%2 ===0){
    left--;
  }
  while(left >=0 && right<s.length){
    if(s[left]!==s[right]){
      return false;
    }
    left--;
    right--;
  }
  return true;
};

console.log(isValidePalindrom(string));

//reverse valid
const string = "A man, a plan, a canal: Panama";

const isValid = (s:string): boolean => {
  s= s.replace(/[^A-Za-z0-9]/g,'').toLowerCase();
  let rev= "";
  for(let i=s.length-1;i>=0;i--){
    rev+=s[i];
  }
  return rev===s;
}
console.log(isValid(string));

//valid from outside

const string = "A man, a plan, a canal: Panama";

const isValid = (s:string): boolean => {
  s= s.replace(/[^A-Za-z0-9]/g,'').toLowerCase();
  let left=0,right=s.length-1;
  while(left<right){
    if(s[left]!==s[right]){
      return false;
    }
    left++;
    right--;
  }
  return true;
}
console.log(isValid(string));

//reverse linkedlist 
class ListNode {
  val: number | null = null;
  next: ListNode | null = null;
  constructor(val:number,next: ListNode|null = null){
    this.val = val;
    this.next = next;
  }
}

const linkedList: ListNode|null = [5,4,3,2,1].reduce((acc: ListNode|null,val:number) => new ListNode(val, acc),null);

const printList = (head: ListNode | null) => {
  if(!head){
    return;
  }
  console.log(head.val);
  printList(head.next);
}

const reverseList = (head: ListNode | null) => {
  let prev:ListNode | null  = null;
  let current:ListNode | null = head;
  while(current){
    let nextTemp = current.next;
    current.next = prev;
    prev = current;
    current = nextTemp;
  }
  return prev;
}
printList(linkedList);
printList(reverseList(linkedList));

//revers linkedlist m n 
class ListNode {
  val: number | null = null;
  next: ListNode | null = null;
  constructor(val:number,next: ListNode|null = null){
    this.val = val;
    this.next = next;
  }
}

const linkedList: ListNode|null = [5,4,3,2,1].reduce((acc: ListNode|null,val:number) => new ListNode(val, acc),null);

const printList = (head: ListNode | null) => {
  if(!head){
    return;
  }
  console.log(head.val);
  printList(head.next);
}

const reverseList = (head: ListNode| null,m:number,n:number) : ListNode| null=> {
  if(head == null) return head;
  let currentPos:number= 1, currentNode: ListNode | null= head;
  let start: ListNode | null= head;
  while(currentPos < m){
    start = currentNode;
    currentNode = currentNode.next!;
    currentPos++;
  }
  let newList = null, tail: ListNode = currentNode;
  while(currentPos >= m&& currentPos<=n){
    const next: ListNode | null = currentNode.next!;
    currentNode.next = newList;
    currentNode = next;
    currentPos++;
  }
  start.next = newList;
  tail.next = currentNode;
  if(m>1){
    return head;
  }else{
    return newList;
  }
}
printList(linkedList);
printList(reverseList(linkedList,2,4));

//merge multi level linkedlist 
class ListNode {
  val: any = null;
  next: ListNode | null = null;
  prev: ListNode | null = null;
  child: ListNode | null = null;
  constructor(val:any,next: ListNode|null = null,prev: ListNode|null = null,child: ListNode|null = null){
    this.val = val;
    this.next = next;
    this.prev = prev;
    this.child = child;
  }
}

const nodes = [1, [2, 7, [8, 10, 11], 9], 3, 4, [5, 12, 13], 6];

const buildMultiLevel = (nodes:any) =>{
  const head: ListNode | null = new ListNode(nodes[0]);
  let currentNode = head;
  for (let i =1 ; i<nodes.length;i++){
    const val = nodes[i];
    let nextNode;
    if(Array.isArray(val)){
      nextNode = buildMultiLevel(val);
      currentNode.child = nextNode;
      continue;
    }
    nextNode = new ListNode(val);
    currentNode.next = nextNode;
    nextNode.prev = currentNode;
    currentNode = nextNode;
  }
  return head;
}

let multiLinkedList = buildMultiLevel(nodes);

const printListMulti = (head: ListNode | null) => {
  if(!head) {
    return;
  }

  console.log(head.val)

  if(head.child) {
    printListMulti(head.child);
  }

  printListMulti(head.next);
}

const printList = (head: ListNode | null) => {
  if(!head) {
    return;
  }

  console.log(head.val);
  
  printList(head.next);
}

var flatten =  (head: ListNode | null) : ListNode | null=>{
  if (!head) return head;

  let currentNode : ListNode | null= head;
  while (currentNode !== null) {
    if (currentNode.child === null) {
      currentNode = currentNode.next;
    } else {
      let tail = currentNode.child;
      while (tail.next !== null) {
        tail = tail.next;
      }

      tail.next = currentNode.next;
      if (tail.next !== null) {
        tail.next.prev = tail;
      }

      currentNode.next = currentNode.child;
      currentNode.next.prev = currentNode;
      currentNode.child = null;
    }
  }

  return head;
};


printListMulti(multiLinkedList);
console.log('after flatten');
printList(flatten(multiLinkedList));

//cycle detection Floyd's Tortoise And Hare Algorithm

class ListNode {
  val: any = null;
  next: ListNode | null = null;
  prev: ListNode | null = null;
  child: ListNode | null = null;
  constructor(val:any,next: ListNode|null = null,prev: ListNode|null = null,child: ListNode|null = null){
    this.val = val;
    this.next = next;
    this.prev = prev;
    this.child = child;
  }
}
const linkedList = [8,7,6,5,4,3,2,1].reduce((acc: ListNode|null,val:number) => new ListNode(val, acc),null);

let curr: ListNode | null = linkedList;
if(curr !== null ){
  let cycleNode: ListNode | null = null;
  while(curr.next !== null) {
    if(curr.val === 3) {
      cycleNode = curr;
    }
  
    curr = curr.next!;
  }
  curr.next = cycleNode;
}

// ---- Generate our linked list ----

// --------- Our solution -----------
const findCycle = (head: ListNode|null ) =>{
  if(head == null) return head;
  const seenNodes = new Set();
  let currentNode : ListNode|null = head;
  while(!seenNodes.has(currentNode)) {
    if(currentNode!.next === null) {
      return false;
    }

    seenNodes.add(currentNode);

    currentNode = currentNode.next!;
  }

  return currentNode;
}

const findCycle = function(head) {
  if(!head) return null;
  
  let tortoise = head, hare = head;
  
  while(true) {
    tortoise = tortoise.next;
    hare = hare.next;
    
    if(hare === null || hare.next === null) {
      return null;
    } else {
      hare = hare.next;
    }
    
    if(tortoise === hare) break;
  }
  
  let p1 = head,
      p2 = tortoise;
  
  while(p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }
  
  return p2
};

console.log(findCycle(linkedList));

// valide parenthese

const string = "{()[]}"

const parens = {
    '(': ')',
    '{' : '}',
    '[': ']'
}

var isValid = function(s) {
  if(s.length === 0) return true;
  
  const stack = [];
  
  for(let i = 0; i < s.length; i++)  {
    if(parens[s[i]]) {
      stack.push(s[i]);
    } else {
      const leftBracket = stack.pop();
      const correctBracket = parens[leftBracket];
      if(s[i] !== correctBracket) return false
    }
  }
  
  return stack.length === 0;
};

console.log(isValid(string));

//minimun parentherse to remove
const string1 = "(ab(cd)"

const minRemoveToMakeValid = function(str) {
    const res = str.split('');
    const stack = [];
    
    for (let i = 0; i < res.length; i++) {
        if (res[i] === '(') {
            stack.push(i);
        } else if (res[i] === ')' && stack.length) {
            stack.pop();
        } else if (res[i] === ')') {
            res[i] = ''
        }
    }
    
    while (stack.length) {
        const curIdx = stack.pop();
        res[curIdx] = '';
    }
    
    return res.join('');
};

console.log(minRemoveToMakeValid(string1))
// queue with stack
class QueueWithStacks {
  constructor() {
    this.in = [];
    this.out = [];
  }

  enqueue(val) {
    this.in.push(val);
  }

  dequeue() {
    if (this.out.length === 0) {
      while(this.in.length > 0) {
        this.out.push(this.in.pop());
      }
    }
    
    return this.out.pop();
  }

  peek() {
    if (this.out.length === 0) {
        while(this.in.length > 0) {
            this.out.push(this.in.pop());
        }
    }
    
    return this.out[this.out.length - 1];
  }

  empty() {
    return this.in.length === 0 && this.out.length === 0;
  }
};


// quick sort k largest stack
const array = [5,3,1,6,4,2];
const kToFind = 4;

const swap = function (array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

const getPartition = function (nums, left, right) {
  const pivotElement = nums[right];
  let partitionIdx = left;

  for (let j = left; j < right; j++) {
    if (nums[j] <= pivotElement) {
      swap(nums, partitionIdx, j);
      partitionIdx++;
    }
  }
  swap(nums, partitionIdx, right)

  return partitionIdx;
};

const quickSort = function (nums, left, right) {
  if(left < right) {
    const partitionIndex = getPartition(nums, left, right);

    quickSort(nums, left, partitionIndex - 1);
    quickSort(nums, partitionIndex + 1, right);
  }
};

var findKthLargest = function (nums, k) {
  const indexToFind = nums.length - k;
  quickSort(nums, 0, nums.length - 1);
  return nums[indexToFind]
};

console.log(findKthLargest(array, kToFind))

// binary search start and end of target
const array = [1,3,3,5,5,5,8,9];
const targetToFind = 5;

const binarySearch = (nums, left, right, target) => {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const foundVal = nums[mid];
    if (foundVal === target) {
      return mid;
    } else if (foundVal < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

const searchRange = function (nums, target) {
  if (nums.length < 1) return [-1, -1];
  const firstPos = binarySearch(nums, 0, nums.length - 1, target);

  if (firstPos === -1) return [-1, -1];

  let endPos = firstPos,
    startPos = firstPos,
    temp1,
    temp2;

  while (startPos !== -1) {
    temp1 = startPos;
    startPos = binarySearch(nums, 0, startPos - 1, target);
  }
  startPos = temp1;

  while (endPos !== -1) {
    temp2 = endPos;
    endPos = binarySearch(nums, endPos + 1, nums.length - 1, target);
  }
  endPos = temp2;

  return [startPos, endPos];
};

console.log(searchRange(array, targetToFind))

//max depth of tree
/*
NOTE: The beginning portion builds our test case binary tree. Scroll down to the section titled Our Solution for the code solution!
 */

// ------- Code to generate our binary tree -------
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(values) {
    const queue = [this];
    let i = 0;
    while (queue.length > 0) {
      let current = queue.shift();
      for (let side of ["left", "right"]) {
        if (!current[side]) {
          if (values[i] !== null) {
            current[side] = new TreeNode(values[i]);
          }
          i++;
          if (i >= values.length) return this;
        }
        if (current[side]) queue.push(current[side]);
      }
    }
    return this;
  }
}

const root = new TreeNode();
root.insert([1,1,1,1,null,null,null,1,null,null,null,1,null,null]);

// ------- Code to generate our binary tree -------

// ------- Our Solution -------
var maxDepth = function(node, currentDepth) {
    if (!node) {
      return currentDepth;
    }

    currentDepth++;

    return Math.max(maxDepth(node.right, currentDepth), maxDepth(node.left, currentDepth));
};

console.log(maxDepth(root, 0));

//level order of tree
/*
NOTE: The beginning portion builds our test case binary tree. Scroll down to the section titled Our Solution for the code solution!
 */

// ------- Code to generate our binary tree -------
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(values) {
    const queue = [this];
    let i = 0;
    while (queue.length > 0) {
      let current = queue.shift();
      for (let side of ["left", "right"]) {
        if (!current[side]) {
          if (values[i] !== null) {
            current[side] = new TreeNode(values[i]);
          }
          i++;
          if (i >= values.length) return this;
        }
        if (current[side]) queue.push(current[side]);
      }
    }
    return this;
  }
}

const tree = new TreeNode(3);
tree.insert([6,1,9,2,null,4,null,5,null,null,null,null,8,null,null,null]);
// ------- Code to generate our binary tree -------

// ------- Our Solution -------
const levelOrder = function(root) {
  if(!root) return [];
  const result = [];
  const queue = [root];
  
  while(queue.length) {
    const currentLevelValues = [];
    let length = queue.length, count = 0;

    while(count < length) {
      const currentNode = queue.shift();
      
      currentLevelValues.push(currentNode.value);
      
      if(currentNode.left) {
        queue.push(currentNode.left)
      }
      
      if(currentNode.right) {
        queue.push(currentNode.right)
      }

      count++;
    }
    
    result.push(currentLevelValues);
  }
  
  return result;
};

console.log(levelOrder(tree))


// right side of tree

/*
NOTE: The beginning portion builds our test case binary tree. Scroll down to the section titled Our Solution for the code solution!
 */

// ------- Code to generate our binary tree -------
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(values) {
    const queue = [this];
    let i = 0;
    while (queue.length > 0) {
      let current = queue.shift();
      for (let side of ["left", "right"]) {
        if (!current[side]) {
          if (values[i] !== null) {
            current[side] = new TreeNode(values[i]);
          }
          i++;
          if (i >= values.length) return this;
        }
        if (current[side]) queue.push(current[side]);
      }
    }
    return this;
  }
}

const tree = new TreeNode(1);
tree.insert([2,3,4,5,null,6,null,7,null,null,null,null,8,null,null,null]);
// ------- Code to generate our binary tree -------

// ------- Our Solution -------
const dfs = (node, currentLevel, result) => {
  if(!node) return;
  if(currentLevel >= result.length) {
    result.push(node.value);
  }

  if(node.right) {
    dfs(node.right, currentLevel + 1, result);
  }
  
  if(node.left) {
    dfs(node.left, currentLevel + 1, result);
  }
}

const rightSideViewDFS = function(root) {
  const result = [];
  
  dfs(root, 0, result);
  return result;
};

console.log(rightSideViewDFS(tree))

// full and complete tree

/*
NOTE: The beginning portion builds our test case binary tree. Scroll down to the section titled Our Solution for the code solution!
 */

// ------- Code to generate our binary tree -------
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(values) {
    const queue = [this];
    let i = 0;
    while (queue.length > 0) {
      let current = queue.shift();
      for (let side of ["left", "right"]) {
        if (!current[side]) {
          if (values[i] !== null) {
            current[side] = new TreeNode(values[i]);
          }
          i++;
          if (i >= values.length) return this;
        }
        if (current[side]) queue.push(current[side]);
      }
    }
    return this;
  }
}

const tree = new TreeNode();
tree.insert([1,1,1,1,1,1,1,1,1,1,1, null, null, null]);

// ------- Code to generate our binary tree -------

// ------- Our Solution -------

const getTreeHeight = function(root) {
  let height = 0;
  while(root.left !== null) {
    height++;
    root = root.left;
  }
  
  return height;
}

const nodeExists = function(idxToFind, height, node) {
  let left = 0, right = Math.pow(2, height) - 1, count = 0;
  
  while(count < height) {
    const midOfNode = Math.ceil((left + right) / 2);
    
    if(idxToFind >= midOfNode) {
      node = node.right;
      left = midOfNode;
    } else {
      node = node.left;
      right = midOfNode - 1;
    }
    
    count++;
  }
  
  return node !== null;
}

const countNodes = function(root) {
  if(!root) return 0;
  
  const height = getTreeHeight(root);
  
  if(height === 0) return 1;
  
  const upperCount = Math.pow(2, height) - 1
  
  let left = 0, right = upperCount;
  
  while(left < right) {
    const idxToFind = Math.ceil((left + right) / 2);
    
    if(nodeExists(idxToFind, height, root)) {
      left = idxToFind;
    } else {
      right = idxToFind - 1;
    }
  }
  
  return upperCount + left + 1;
};
// priority queue

class PriorityQueue {
  constructor(comparator = (a, b) => a > b) {
    this._heap = [];
    this._comparator = comparator;
  }

  size() {
    return this._heap.length;
  }

  peek() {
    return this._heap[0];
  }

  isEmpty() {
    return this._heap.length === 0;
  }

  _parent(idx) {
    return Math.floor((idx - 1) / 2);
  }

  _leftChild(idx) {
    return idx * 2 + 1;
  }

  _rightChild(idx) {
    return idx * 2 + 2;
  }

  _swap(i, j) {
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }

  _compare(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }

  push(value) {
    this._heap.push(value);
    this._siftUp();

    return this.size();
  }

  _siftUp() {
    let nodeIdx = this.size() - 1;

    while (0 < nodeIdx && this._compare(nodeIdx, this._parent(nodeIdx))) {
      this._swap(nodeIdx, this._parent(nodeIdx));
      nodeIdx = this._parent(nodeIdx);
    }
  }

  pop() {
    if (this.size() > 1) {
      this._swap(0, this.size() - 1);
    }

    const poppedValue = this._heap.pop();
    this._siftDown();
    return poppedValue;
  }

  _siftDown() {
    let nodeIdx = 0;

    while (
      (this._leftChild(nodeIdx) < this.size() &&
        this._compare(this._leftChild(nodeIdx), nodeIdx)) ||
      (this._rightChild(nodeIdx) < this.size() &&
        this._compare(this._rightChild(nodeIdx), nodeIdx))
    ) {
      const greaterChildIdx =
        this._rightChild(nodeIdx) < this.size() &&
        this._compare(this._rightChild(nodeIdx), this._leftChild(nodeIdx))
          ? this._rightChild(nodeIdx)
          : this._leftChild(nodeIdx);

      this._swap(greaterChildIdx, nodeIdx);
      nodeIdx = greaterChildIdx;
    }
  }
}

const pq = new PriorityQueue();
pq.push(15);
pq.push(12);
pq.push(50);
pq.push(7);
pq.push(40);
pq.push(22);

while(!pq.isEmpty()) {
  console.log(pq.pop());
}

// traversalDFS
const testMatrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20]
];

const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1] //left
]

const traversalDFS = function(matrix) {
  const seen = 
    new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(false));

  const values = [];

  dfs(matrix, 0, 0, seen, values);

  return values;
}

const dfs = function(matrix, row, col, seen, values) {
  if(row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length || seen[row][col]) return;
  
  seen[row][col] = true;
  values.push(matrix[row][col]);

  for(let i = 0; i < directions.length; i++) {
    const currentDir = directions[i];
    dfs(matrix, row + currentDir[0], col + currentDir[1], seen, values);
  }
}

console.log(traversalDFS(testMatrix));

// bfs 
const testMatrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1] //left
]

const traversalBFS = function(matrix) {
  const seen = 
    new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(false));

  const values = [];

  const queue = [[0, 0]];

  while(queue.length) {
    const currentPos = queue.shift();
    const row = currentPos[0];
    const col = currentPos[1];
    
    if(row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length || seen[row][col]) {
      continue;
    }

    seen[row][col] = true;
    values.push(matrix[row][col]);
    
    for(let i = 0; i < directions.length; i++) {
      const currentDir = directions[i];
      queue.push([row + currentDir[0], col + currentDir[1]]);
    }
  }

  return values;
}

// island count bfs
const testMatrix = [
  [1, 1, 1, 0, 0],
  [1, 1, 1, 0, 1],
  [0, 1, 0, 0, 1],
  [0, 0, 0, 1, 1]
];

const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1] //left
]

const numberOfIslands = function(matrix) {
  if(matrix.length === 0) return 0;
  let islandCount = 0;

  for(let row = 0; row < matrix.length; row++) {
    for(let col = 0; col < matrix[0].length; col++) {
      if(matrix[row][col] === 1) {
        islandCount++;
        matrix[row][col] = 0;
        const queue = [];
        queue.push([row, col]);

        while(queue.length) {
          const currentPos = queue.shift();
          const currentRow = currentPos[0];
          const currentCol = currentPos[1];

          for(let i = 0; i < directions.length; i++) {
            const currentDir = directions[i];
            const nextRow = currentRow + currentDir[0];
            const nextCol = currentCol + currentDir[1];

            if(nextRow < 0 || nextRow >= matrix.length || nextCol < 0 || nextCol >= matrix[0].length) continue;

            if(matrix[nextRow][nextCol] === 1) {
              queue.push([nextRow, nextCol]);
              matrix[nextRow][nextCol] = 0;
            }
          }
        }
      }
    }
    
  }
  return islandCount;
}


  // island number dfs

  const testMatrix = [
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [0, 1, 1, 1, 0],
    [1, 0, 1, 0, 1]
  ];
  
  const directions = [
    [-1, 0], //up
    [0, 1], //right
    [1, 0], //down
    [0, -1] //left
  ]
  
  const dfs = function(grid, currentRow, currentCol) {
    if(currentRow < 0 || currentRow >= grid.length || currentCol < 0 || currentCol >= grid[0].length) return;
  
    if(grid[currentRow][currentCol] === 1) {
      grid[currentRow][currentCol] = 0;
  
      for(let i = 0; i < directions.length; i++) {
        const currentDir = directions[i];
        const row = currentDir[0];
        const col = currentDir[1];
        dfs(grid, currentRow + row, currentCol + col);
      }
    }
  }
  
  const numberOfIslands = function(grid) {
    if(!grid.length) return 0;
    
    let islandCount = 0;
    
    for(let row = 0; row < grid.length; row++) {
      for(let col = 0; col < grid[0].length; col++) {
        if(grid[row][col] === 1) {
          islandCount++;
          dfs(grid, row, col);
        }
      }
    }
    
    return islandCount;
  };
  
  
  
  console.log(numberOfIslands(testMatrix));

  //rotting orange bfs
  const testMatrix = [
    [2, 1, 1, 0, 0],
    [1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1],
    [0, 1, 0, 0, 1]
  ];
  
  const directions = [
    [-1, 0], //up
    [0, 1], //right
    [1, 0], //down
    [0, -1] //left
  ]
  
  const ROTTEN = 2;
  const FRESH = 1;
  const EMPTY = 0;
  
  
  const orangesRotting = function(matrix) {
    if(matrix.length === 0) return 0;
  
    const queue = [];  
    let freshOranges = 0;
    
    for(let row = 0; row < matrix.length; row++) {
      for(let col = 0; col < matrix[0].length; col++) {
        if(matrix[row][col] === ROTTEN) {
          queue.push([row, col])
        }
        
        if(matrix[row][col] === FRESH) {
          freshOranges++;
        }
      }
    }
      
    let minutes = 0;
    let currentQueueSize = queue.length;
    
    while(queue.length > 0) {
      if(currentQueueSize === 0) {
        currentQueueSize = queue.length;
        minutes++;
      }
  
      const currentOrange = queue.shift();
      currentQueueSize--;
      const row = currentOrange[0];
      const col = currentOrange[1];
      
      for(let i = 0; i < directions.length; i++) {
        const currentDir = directions[i];
        const nextRow = row + currentDir[0];
        const nextCol = col + currentDir[1];
        
        if(nextRow < 0 || nextRow >= matrix.length || nextCol < 0 || nextCol >= matrix[0].length) {
          continue;
        }
  
        if (matrix[nextRow][nextCol] === FRESH) {
          matrix[nextRow][nextCol] = 2;
          freshOranges--;
          queue.push([nextRow, nextCol]);
        }
      }
    }
    
    if(freshOranges !== 0) {
      return -1;
    }
    
    return minutes;
  };
  
  console.log(orangesRotting(testMatrix))

  // wall and gates
  const INF = 2147483647;

const testMatrix = [
  [INF, -1, 0, INF],
  [INF, INF, INF, 0],
  [INF, -1, INF, -1],
  [0, -1, INF, INF]
];

const WALL = -1;
const GATE = 0;
const EMPTY = 2147483647;
const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1] //left
]

const dfs = (grid, row, col, count) => {
  if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || count > grid[row][col]) return
  grid[row][col] = count
  for(let i = 0; i < directions.length; i++) {
    const currentDir = directions[i];
    dfs(grid, row + currentDir[0], col + currentDir[1], count + 1);
  }
}


const wallsAndGates = (rooms) => {
  for (let row = 0; row < rooms.length; row++) {
    for (let col = 0; col < rooms[0].length; col++) {
      if (rooms[row][col] === GATE) dfs(rooms, row, col, 0)
    }
  }
};

wallsAndGates(testMatrix)

console.log(testMatrix);

// adjacency List BFS

const adjacencyList = [
  [1, 3],
  [0],
  [3, 8],
  [0, 2, 4, 5],
  [3, 6],
  [3],
  [4, 7],
  [6],
  [2]
];

const traversalBFS = function(graph) {
  const queue = [0];
  const values = [];
  const seen = {};

  while (queue.length) {
    const vertex = queue.shift();
    values.push(vertex);
    seen[vertex] = true;
    
    const connections = graph[vertex];
    for (let i = 0; i < connections.length; i++) {
      const connection = connections[i];
      if (!seen[connection]) {
        queue.push(connection);
      }
    }
  }

  return values;
}


const values = traversalBFS(adjacencyList)

console.log(values);

// adjacency Matrix bfs
const adjacencyMatrix = [
  [0, 1, 0, 1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0]
];

const traversalBFS = function(graph) {
  const seen = {};
  const queue = [0];
  const values = [];

  while(queue.length) {
    const vertex = queue.shift();

    values.push(vertex);
    seen[vertex] = true;

    const connections = graph[vertex];
    for(let v = 0; v < connections.length; v++) {
      if(connections[v] > 0 && !seen[v]) {
        queue.push(v);
      }
    }
  }

  return values;
}

console.log(traversalBFS(adjacencyMatrix));

// adjacency List dfs
const adjacencyList = [
  [1, 3],
  [0],
  [3, 8],
  [0, 2, 4, 5],
  [3, 6],
  [3],
  [4, 7],
  [6],
  [2]
];

const traversalDFS = function(vertex, graph, values, seen) {
  values.push(vertex);
  seen[vertex] = true;

  const connections = graph[vertex];
  for(let i = 0; i < connections.length; i++) {
    const connection = connections[i];

    if(!seen[connection]) {
      traversalDFS(connection, graph, values, seen);
    }
  }
}

const values = [];
traversalDFS(0, adjacencyList, values, {})

console.log(values);

// adjacency Matrix dfs

const adjacencyMatrix = [
  [0, 1, 0, 1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0]
];

const traversalDFS = function(vertex, graph, values, seen) {
  values.push(vertex);
  seen[vertex] = true;

  const connections = graph[vertex];
  for(let v = 0; v < connections.length; v++) {
    if(connections[v] > 0 && !seen[v]) {
      traversalDFS(v, graph, values, seen);
    }
  }
}

const values = [];
traversalDFS(0, adjacencyMatrix, values, {})

console.log(values);

// time to inform dfs

const managersArray = [2, 2, 4, 6, -1, 4, 4, 5];
const informTimeArray = [0, 0, 4, 0, 7, 3, 6, 0];

const numOfMinutes = function(n, headID, managers, informTime) {
  const adjList = managers.map(() => []);
  
  for(let employee = 0; employee < n; employee++) {
    const manager = managers[employee];
    if(manager === -1) continue;
    
    adjList[manager].push(employee);
  }
  
  return dfs(headID, adjList, informTime);
};

const dfs = function(currentId, adjList, informTime) {
  if(adjList[currentId].length === 0) {
    return 0;
  }
  
  let max = 0;
  const subordinates = adjList[currentId];
  for(let i = 0; i < subordinates.length; i++) {
    max = Math.max(max, dfs(subordinates[i], adjList, informTime));
  }
  
  return max + informTime[currentId];
}

console.log(numOfMinutes(8, 4, managersArray, informTimeArray));

// cours shedule bfs 
const p = [[1, 0], [2, 1], [2, 5], [0, 3], [4, 3], [3, 5], [4, 5]]

const canFinish = function(n, prerequisites) {
  const adjList = new Array(n).fill(0).map(() => []);
  
  for(let i = 0; i < prerequisites.length; i++) {
    const pair = prerequisites[i];
    adjList[pair[1]].push(pair[0])
  }

  for(let v = 0; v < n; v++) {
    const queue = [];
    const seen = {};
    for(let i = 0; i < adjList[v].length; i++) {
      queue.push(adjList[v][i]);
    }
    
    while(queue.length) {
      const current = queue.shift();
      seen[current] = true;

      if(current === v) return false;
      const adjacent = adjList[current];
      for(let i = 0; i < adjacent.length; i++) {
        const next = adjacent[i];
        if(!seen[next]) {
          queue.push(next);
        }
      }
    }
  }

  return true;
};

canFinish(6, p)

//  topological sort
const p = [[1, 0], [2, 1], [2, 5], [0, 3], [4, 3], [3, 5], [4, 5]]

const canFinish = function(n, prerequisites) {
  const inDegree = new Array(n).fill(0);

  for(let i = 0; i < prerequisites.length; i++) {
    inDegree[prerequisites[i][0]]++;
  }

  const stack = [];

  for(let i = 0; i < inDegree.length; i++) {
    if(inDegree[i] === 0) {
      stack.push(i);
    }
  }

  let count = 0;

  while(stack.length) {
    const current = stack.pop();
    count++;

    for(let i = 0; i < prerequisites.length; i++) {
      const pair = prerequisites[i];
      if(pair[1] === current) {
        inDegree[pair[0]]--;
        if(inDegree[pair[0]] === 0) {
          stack.push(pair[0]);
        }
      }
    }
  }

  return count === n;
};

//  topological sort with adj
const p = [[1, 0], [2, 1], [2, 5], [0, 3], [4, 3], [3, 5], [4, 5]]

const canFinishWithAdj = function(n, prerequisites) {
  const inDegree = new Array(n).fill(0);
  const adjList = inDegree.map(() => []);

  for(let i = 0; i < prerequisites.length; i++) {
    const pair = prerequisites[i];
    inDegree[pair[0]]++;
    adjList[pair[1]].push(pair[0])
  }

  const stack = [];

  for(let i = 0; i < inDegree.length; i++) {
    if(inDegree[i] === 0) {
      stack.push(i);
    }
  }

  let count = 0;

  while(stack.length) {
    const current = stack.pop();
    count++;

    const adjacent = adjList[current];

    for(let i = 0; i < adjacent.length; i++) {
      const next = adjacent[i];
      inDegree[next]--;
      if(inDegree[next] === 0) {
        stack.push(next);
      }
    }
  }

  return count === n;
};

// network delay dijkstra

// Priority Queue implementation
class PriorityQueue {
  constructor(comparator = (a, b) => a > b) {
    this._heap = [];
    this._comparator = comparator;
  }

  size() {
    return this._heap.length;
  }

  peek() {
    return this._heap[0];
  }

  isEmpty() {
    return this._heap.length === 0;
  }

  _parent(idx) {
    return Math.floor((idx - 1) / 2);
  }

  _leftChild(idx) {
    return idx * 2 + 1;
  }

  _rightChild(idx) {
    return idx * 2 + 2;
  }

  _swap(i, j) {
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }

  _compare(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }

  push(value) {
    this._heap.push(value);
    this._siftUp();

    return this.size();
  }

  _siftUp() {
    let nodeIdx = this.size() - 1;

    while (0 < nodeIdx && this._compare(nodeIdx, this._parent(nodeIdx))) {
      this._swap(nodeIdx, this._parent(nodeIdx));
      nodeIdx = this._parent(nodeIdx);
    }
  }

  pop() {
    if (this.size() > 1) {
      this._swap(0, this.size() - 1);
    }

    const poppedValue = this._heap.pop();
    this._siftDown();
    return poppedValue;
  }

  _siftDown() {
    let nodeIdx = 0;

    while (
      (this._leftChild(nodeIdx) < this.size() &&
        this._compare(this._leftChild(nodeIdx), nodeIdx)) ||
      (this._rightChild(nodeIdx) < this.size() &&
        this._compare(this._rightChild(nodeIdx), nodeIdx))
    ) {
      const greaterChildIdx =
        this._rightChild(nodeIdx) < this.size() &&
        this._compare(this._rightChild(nodeIdx), this._leftChild(nodeIdx))
          ? this._rightChild(nodeIdx)
          : this._leftChild(nodeIdx);

      this._swap(greaterChildIdx, nodeIdx);
      nodeIdx = greaterChildIdx;
    }
  }
}
//dijkstra
 const t = [[1, 2, 9], [1, 4, 2], [2, 5, 1], [4, 2, 4], [4, 5, 6],[3, 2, 3], [5, 3, 7], [3, 1, 5]]

const networkDelayTime = function(times, N, k) {
  const distances = new Array(N).fill(Infinity);
  const adjList = distances.map(() => []);
  distances[k - 1] = 0;

  const heap = new PriorityQueue((a, b) => distances[a] < distances[b]);
  heap.push(k - 1);

  for(let i = 0; i < times.length; i++) {
    const source = times[i][0];
    const target = times[i][1];
    const weight = times[i][2];
    adjList[source - 1].push([target - 1, weight]);
  }

  while(!heap.isEmpty()) {
    const currentVertex = heap.pop();

    const adjacent = adjList[currentVertex];
    for(let i = 0; i < adjacent.length; i++) {
      const neighboringVertex = adjacent[i][0];
      const weight = adjacent[i][1];
      if(distances[currentVertex] + weight < distances[neighboringVertex]) {
          distances[neighboringVertex] = distances[currentVertex] + weight;
          heap.push(neighboringVertex);
      }
    }
  }

  const ans = Math.max(...distances);

  return ans === Infinity ? -1 : ans;
};

console.log(networkDelayTime(t, 5, 1))


// dynamic programming

const t = [[1, 4, 2], [1, 2, 9], [4, 2, -4], [2, 5, -3], [4, 5, 6],[3, 2, 3], [5, 3, 7], [3, 1, 5]]

var networkDelayTime = function(times, N, k) {
  const distances = new Array(N).fill(Infinity);
  
  distances[k - 1] = 0;
  for(let i = 0; i < N - 1; i++) {
    let count = 0;
    for(let j = 0; j < times.length; j++) {
      const source = times[j][0];
      const target = times[j][1];
      const weight = times[j][2];
      
      if(distances[source - 1] + weight < distances[target - 1]) {
        distances[target - 1] = distances[source - 1] + weight;
        count++;
      }
    }
    
    if(count === 0) break;
  }
  
  const ans = Math.max(...distances);
  return ans === Infinity ? -1 : ans;
};

console.log(networkDelayTime(t, 5, 1))

// climb stair

/*
Recurrence relation:

minCost(i) = cost[i] + min(minCost(i - 1), minCost(i - 2));
minCost(0) = cost[0];
minCost(1) = cost[1];

*/

// Min Cost Climbing Stairs
// Question: For a given staircase, the i-th step is assigned a non-negative cost indicated by a cost array.
//
// Once you pay the cost for a step, you can either climb one or two steps. Find the minimum cost to reach the top of
// the staircase. Your first step can either be the first or second step.

const cost = [20, 15, 30, 5] 

function minCostClimbingStairs(cost) {
  const n = cost.length;
  // Compute the minimum cost to reach the top of the staircase
  return Math.min(minCost(n - 1, cost), minCost(n - 2, cost));
}


function minCost(i, cost) {
  // Base cases
  if (i < 0) {
    return 0;
  }
  if (i === 0 || i === 1) {
    return cost[i];
  }

  // Recursive call to find minimum cost
  return cost[i] + Math.min(minCost(i - 1, cost), minCost(i - 2, cost));
}

// O(2^n) - Time Complexity
// O(n) - Space Complexity

// dynamic climbing bellman-ford algo

/*
Recurrence relation:

minCost(i) = cost[i] + min(minCost(i - 1), minCost(i - 2));
minCost(0) = cost[0];
minCost(1) = cost[1];

*/


const minCostClimbingStairs = function(cost) {
  const n = cost.length;
  if(n === 0) return 0;
  if(n === 1) return cost[0];
  let dpOne = cost[0];
  let dpTwo = cost[1];
  for(let i = 2; i < n; i++) {
    const current = cost[i] + Math.min(dpOne, dpTwo);
    dpOne = dpTwo;
    dpTwo = current;
  }

  return Math.min(dpOne, dpTwo);
};

console.log(minCostClimbingStairs([20, 15]))


/*
reccurence relation:
Directions = [
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2]
];

0 >= r < N, 0 >= c < N, k === 0
probability(r, c, k) = 1

0 >= r < N, 0 >= c < N, k > 1
probability(r, c, k) = Σ(x, y)∈Directions probability(r + x, c + y, k - 1) / 8

r < 0 || r > N, c < 0 || c > N
probability(r, c, k) = 0

 */


/* 
Knight Probability in Chessboard
Question: On a given n x n chessboard, a knight piece will start at the r-th row and c-th column. The knight will attempt to make k moves. 

A knight can move in 8 possible ways. Each move will choose one of these 8 at random. The knight continues moving until it finishes k moves, or it moves off the chessboard. Return the probability that the knight is on the chessboard after it finishes moving.
*/

const DIRECTIONS = [
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2]
];

const knightProbability = (n, k, row, column) => {
  const dp = new Array(n).fill(0).map(
    () => new Array(n).fill(0).map(() => new Array(n).fill(undefined))
  );
  
  return recurse(n, k, row, column, dp);
}

const recurse = (n, k, row, column, dp) => {
  if(row < 0 || row >= n || column < 0 || column >= n) return 0;
  if(k === 0) return 1;
  if(dp[row][column][k] !== undefined) return dp[row][column][k];
  
  let response = 0;
  for(let i = 0; i < DIRECTIONS.length; i++) {
    const dir = DIRECTIONS[i];
    response += recurse(n, k - 1, row + dir[0], column + dir[1], dp)/ 8;
  }
  dp[row][column][k] = response;
  return response;
}

const n = 6;
const k = 3 ;
const row = 2;
const column = 2;
console.log(knightProbability(n, k, row, column));

//knights move dynamic 
const DIRECTIONS = [
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2]
];

var knightProbability = function(N, K, r, c) {
  let prevDp = new Array(N).fill(0).map(() => new Array(N).fill(0));
  let nextDp = new Array(N).fill(0).map(() => new Array(N).fill(0));

  prevDp[r][c] = 1;
  for (let step = 1; step <= K; step++) {
    for (let row = 0; row < N; row++) {
      for (let col = 0; col < N; col++) {
        for (let i = 0; i < DIRECTIONS.length; i++) {
          const currentDirection = DIRECTIONS[i];
          const prevRow = row + currentDirection[0];
          const prevCol = col + currentDirection[1];
          if (prevRow >= 0 && prevRow < N && prevCol >= 0 && prevCol < N) {
            nextDp[row][col] =
              nextDp[row][col] + prevDp[prevRow][prevCol] / 8;
          }
        }
      }
    }
    prevDp = nextDp;
    nextDp = new Array(N).fill(0).map(() => new Array(N).fill(0));
  }

  let res = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      res += prevDp[i][j];
    }
  }

  return res;
};

// sudoku 
const getBoxId = function (row, col) {
  const rowVal = Math.floor(row / 3) * 3;
  const colVal = Math.floor(col / 3);

  return rowVal + colVal;
};

const isValid = function (box, row, col, num) {
  if (box[num] || row[num] || col[num]) {
    return false;
  } else {
    return true;
  }
};

const solveBacktrack = function (board, boxes, rows, cols, r, c) {
  if (r === board.length || c === board[0].length) {
    return true;
  } else {
    if (board[r][c] === '.') {
      for (let num = 1; num <= 9; num++) {
        const numVal = num.toString();
        board[r][c] = numVal;

        const boxId = getBoxId(r, c);
        const box = boxes[boxId];
        const row = rows[r];
        const col = cols[c];

        if (isValid(box, row, col, numVal)) {
          box[numVal] = true;
          row[numVal] = true;
          col[numVal] = true;

          if (c === board[0].length - 1) {
            if (solveBacktrack(board, boxes, rows, cols, r + 1, 0)) {
              return true;
            }
          } else {
            if (solveBacktrack(board, boxes, rows, cols, r, c + 1)) {
              return true;
            }
          }

          delete box[numVal];
          delete row[numVal];
          delete col[numVal];
        }

        board[r][c] = '.';
      }
    } else {
      if (c === board[0].length - 1) {
        if (solveBacktrack(board, boxes, rows, cols, r + 1, 0)) {
          return true;
        }
      } else {
        if (solveBacktrack(board, boxes, rows, cols, r, c + 1)) {
          return true;
        }
      }
    }
  }

  return false;
};

var solveSudoku = function(board) {
  const n = board.length;
  const boxes = new Array(n), 
        rows = new Array(n), 
        cols = new Array(n);
  
  for(let i = 0; i < n; i++) {
    boxes[i] = {};
    rows[i] = {};
    cols[i] = {};
  }
  
  for(let r = 0; r < n; r++) {
    for(let c = 0; c < n; c++) {
      if(board[r][c] !== '.') {
        const boxId = getBoxId(r, c);
        const val = board[r][c];
        boxes[boxId][val] = true;
        rows[r][val] = true;
        cols[c][val] = true;
      }
    }
  }
  
  solveBacktrack(board, boxes, rows, cols, 0, 0);
};

const board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

solveSudoku(board)
console.log(board);

//monarchy solution

class Person {
  constructor(name) {
    this.name = name;
    this.isAlive = true;
    this.children = [];
  }
}

class Monarchy {
  constructor(king) {
    this.king = new Person(king);
    this._persons = {
      [this.king.name]: this.king
    };
  }

  birth(childName, parentName) {
    const parent = this._persons[parentName];
    const newChild = new Person(childName);
    parent.children.push(newChild);
    this._persons[childName] = newChild;
  }

  death(name) {
    const person = this._persons[name];
    if (person === undefined) {
      return null;
    }
    person.isAlive = false;
  }

  getOrderOfSuccession(){
    const order = [];
    this._dfs(this.king, order);
    return order;
  }

  _dfs(currentPerson, order) {
    if(currentPerson.isAlive) {
      order.push(currentPerson.name);
    }
    for(let i = 0; i < currentPerson.children.length; i++) {
      this._dfs(currentPerson.children[i], order);
    }
  }
}

// tries node 
class TrieNode {
  constructor() {
    this.end = false;
    this.keys = {};
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word, node = this.root) {
    if(word.length === 0) {
      node.end = true;
      return;
    } else if(!node.keys[word[0]]) {
      node.keys[word[0]] = new TrieNode();
      this.insert(word.substr(1), node.keys[word[0]]);
    } else {
      this.insert(word.substr(1), node.keys[word[0]]);
    }
  }
  
  search(word, node = this.root) {
    if(word.length === 0 && node.end) {
      return true;
    } else if(word.length === 0) {
      return false;
    } else if(!node.keys[word[0]]) {
      return false;
    } else {
      return this.search(word.substr(1), node.keys[word[0]]);
    }
  }

  startsWith(prefix, node = this.root) {
    if(prefix.length === 0) {
      return true;
    } else if(!node.keys[prefix[0]]) {
      return false;
    } else {
      return this.startsWith(prefix.substr(1), node.keys[prefix[0]]);
    }
  }
}