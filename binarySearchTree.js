class node{
    constructor(value) {
    this.value=value;
    this.left=null;
    this.right=null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }


    insert(value){
        let newNode = new node(value)

        if(!this.root){
            this.root=newNode;
        }
        else{
            let current = this.root;
            while(true){

            if(value>current.value){
                if(!current.right){
                    current.right = newNode;
                    return this;
                }else{
                    current = current.right;
                }
            }
            else if(value<current.value){
                if(!current.left){
                    current.left=newNode
                    return this;
                }
                else{
                    current = current.left;
                }
            }
                else{
                    return undefined
                    }
            }






        }
    }
}

var newTree = new BinarySearchTree();
