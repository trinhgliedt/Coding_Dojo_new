class BSTNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
};
/*
                    root
                <-- 25 -->
              /            \
            15             50
          /    \         /    \
        10     22      35     70
      /   \   /  \    /  \   /  \
    4    12  18  24  31  44 66  90
*/
class BST {
    constructor() {
        this.root = null;
    }
    // 1
    isEmpty(){
        return this.root === null
    }
    // 2
    insert(node, subTree){
        if (subTree == undefined){
            subTree = this.root;
        }
        if (subTree === null){
            this.root = node;
            return;
        }
        // go left
        if (subTree.val > node.val){
            // check if null and add
            if (subTree.left === null){
                subTree.left = node;
                return;
            }
            // else recurse left
            return this.insert(node, subTree.left);
        }
        else if (subTree.val < node.val){
            // check if null and add
            if (subTree.right === null){
                subTree.right = node;
                return;
            }
            // else recurse right
            return this.insert(node, subTree.right);
        }
    }

    // 3
    find(val, current){
        if (current === undefined) {
            current = this.root;
        }
        // if current is null, return false up the call stack
        if (current == null) {
            return false;
        }
        // because current is certain to be not null, check val vs val
        // if equal, return true up the call stack
        if (current.val === val) {
            return true;
        }
        // otherwise we need to recurse

        // decide on which direction
        if (current.val > val) {
            current = current.left;
        } else {
            current = current.right;
        }

        // recurse now that current is moved, return the result
        return this.find(val, current);// true / false
    }
    // #4
    // recursive
    getLargestFromSubtree(tree) {
        // if no tree, tree is root
        if (tree === undefined) {
            tree = this.root;
        }

        // if tree becomes null, return null
        if (tree === null) {
            return null;
        }

        // if there is no further nodes, return tree
        if (tree.right === null) {
            return tree.val;
        }

        // else recurse to the right and try again
        return this.getLargestFromSubtree(tree.right);
    }
    
    // #5
    // iterative
    getSmallestFromSubtree(tree) {
        if (tree === undefined){
            tree = this;
        }
        // if tree is null, return it
        if (tree === null) return tree.root;

        // else create runner
        var runner = tree.root;
        // loop to the left if it exists
        while (runner.left) {
            runner = runner.left;
        }
        // when the while ends, return runner.val
        return runner.val;
    }

    // return the total amount of nodes in a given BST. traverse and count.
    size(current){
        let counter = 0;
        if (current === undefined){
            current = this.root;
        }
        if (current === null){
            return 0;
        }
        if (current){
            counter ++;
            counter += this.size(current.left);
            counter += this.size(current.right);
            // return ((lCounter + rCounter + counter));
            return counter;
        }

    }


    // return the height, sometimes called 'maxDepth', of a given BST
    height(current){
        let lCounter = 0, rCounter = 0;
        if (current === undefined){
            current = this.root;
        }
        if (current === null){
            return 0;
        }
        if (current){
            lCounter ++;
            rCounter ++;
            this.height(current.left);
            this.height(current.right);
            return 1 + lCounter + rCounter;
            // return 1 + Math.max(this.height(current.left), this.height(current.right));
            // return Math.max(lCounter, rCounter);
        }
    }

    }

var myTree = new BST();
// console.log(myTree);
// console.log(myTree.isEmpty());
var node25 = new BSTNode(25);
var node15 = new BSTNode(15);
var node10 = new BSTNode(10);
var node50 = new BSTNode(50);
var node35 = new BSTNode(35);
var node22 = new BSTNode(22);
// when executing the insert method no need to pass in subTree argument cos we want it pass in an undefined subTree
myTree.insert(node25); 
myTree.insert(node15);
myTree.insert(node10);
myTree.insert(node50);
myTree.insert(node35);
myTree.insert(node22);
// console.log(myTree);
// console.log(myTree.find(35));
// console.log(myTree.getLargestFromSubtree());
// console.log(myTree.getSmallestFromSubtree());
// console.log(myTree.size());
console.log(myTree.height());
-