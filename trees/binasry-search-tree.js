class Node {
    constructor(value, parent = null, left = null, right = null) {
        this.value = value;
        this.parent = parent;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    add = (value, currNode = this.root) => {
        if (!this.root) {
            this.root = new Node(value);
            return;
        }
        
        if (value <= currNode.value) {
            if (!currNode.left) currNode.left = new Node(value, currNode);
            else this.add(value, currNode.left);
        } else {
            if (!currNode.right) currNode.right = new Node(value, currNode);
            else this.add(value, currNode.right);
        }
    }

    searchNode = (value, currNode = this.root) => {
        if(!currNode || currNode.value === value) return currNode;

        if (value < currNode.value) return this.searchNode(value, currNode.left);

        return this.searchNode(value, currNode.right);
    }

    deleteNode = (value, currNode = this.root) => {
        if (!currNode) return currNode;
        if (value < currNode.value) currNode.left = this.deleteNode(value, currNode.left);
        else if (value > currNode.value) currNode.right = this.deleteNode(value, currNode.right);
        else {
            if (currNode.left === null) {
                return currNode.right;
            } else if (currNode.right === null) {
                return currNode.left;
            }
            
            currNode.value = this.getInorderSuccessorNode(value, currNode).value;
            currNode.right = this.deleteNode(currNode.value, currNode.right);
        }
        return currNode;
    }

    getInorderSuccessorNode = (value, currNode = this.root) => {
        if (!currNode) return currNode;

        if (value === currNode.value) {
            if (currNode.right) return this.getMinNode(currNode.right);

            return this.getGreaterPredecessorNode(currNode);
        }

        if (value < currNode.value && currNode.left) return this.getInorderSuccessorNode(value, currNode.left);
        
        if (value > currNode.value && currNode.right) return this.getInorderSuccessorNode(value, currNode.right);
    }

    getMinNode = (currNode = this.root) => {
        if (!currNode || !currNode.left) return currNode;

        if (currNode.left) return this.getMinNode(currNode.left)
    }

    getMaxNode = (currNode = this.root) => {
        if (!currNode || !currNode.right) return currNode;

        if (currNode.right) return this.getMinNode(currNode.right)
    }

    getGreaterPredecessorNode = (currNode = this.root) => {
        if (currNode.parent && currNode.parent.right === currNode) {
            return this.getGreaterPredecessorNode(currNode.parent);
        }
        return currNode.parent;
    }

    depth = (currNode = this.root) => {
        if (!currNode) return -1;

        let left = this.depth(currNode.left);
        let right = this.depth(currNode.right);

        return Math.max(left, right) + 1;
    }

    preorder = (currNode = this.root) => {
        if (!currNode) return;
        
        console.log(currNode.value);
        
        if (currNode.left) {    
            this.preorder(currNode.left);
        } 
        
        if (currNode.right) {
            this.preorder(currNode.right);
        }
    }

    inorder = (currNode = this.root, desc = false) => {
        if (!currNode) return;

        if (desc) {
            if (currNode.right) this.inorder(currNode.right, desc);
            console.log(currNode.value);
            if (currNode.left) this.inorder(currNode.left, desc);
        } else {
            if (currNode.left) this.inorder(currNode.left, desc);
            console.log(currNode.value);
            if (currNode.right) this.inorder(currNode.right, desc);
        }
    }

    postorder = (currNode = this.root) => {
        if (!currNode) return;
        
        if (currNode.left) {    
            this.postorder(currNode.left);
        } 
        
        if (currNode.right) {
            this.postorder(currNode.right);
        }

        console.log(currNode.value);
    }

    levelOrderTraversal = (currNode = this.root) => {
        const printLevel = (node, level) => {
            if (!node) return;
            if (level === 0) {
                console.log(node.value);
            } else {
                printLevel(node.left, level - 1);
                printLevel(node.right, level - 1);
            }
        };
        
        const height = this.depth();
        
        for (let level = 0; level <= height; level++) 
            printLevel(currNode, level);
    }

    isBst = (currNode = this.root) => {
        if (!currNode) return true;

        if (currNode.left != null && this.maxValue(currNode.left) >= currNode.value) {
            return false;
        }

        if (currNode.right != null && this.minValue(currNode.right) <= currNode.value) {
            return false;
        }

        if (!this.isBst(currNode.left) || !this.isBst(currNode.right)) {
            return false;
        }

        return true;
    }

    maxValue = (currNode) => {
        if (!currNode) return Number.MIN_SAFE_INTEGER;
        const left = this.maxValue(currNode.left);
        const right = this.maxValue(currNode.right);
        return Math.max(currNode.value, Math.max(left, right));
    }

    minValue = (currNode) => {
        if (!currNode) return Number.MAX_SAFE_INTEGER;
        const left = this.minValue(currNode.left);
        const right = this.minValue(currNode.right);
        return Math.min(currNode.value, Math.min(left, right));
    }
}

const bst = new BST();

bst.add(3);
bst.add(1);
bst.add(7);
bst.add(5);
bst.add(4);

(() => {
    const isBst = bst.isBst();
    console.log(isBst);
})();
