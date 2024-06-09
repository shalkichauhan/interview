//Reverse a Linked List: Write a function to reverse a singly linked list.
/*
create a reverse function.
create a current variable.

3 ->         6->       9->        ->  12 ->      15
backward< -current   forward
            backward  <- currrent   foward
                        backward     <-current     forward

                        12->9->6->3

 */
class Node {
    constructor(value){
        this.value=value;
        this.next = null;
    }
}

class SinglyLinkedList{

    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }


    push(value){
        var newNode = new Node(value);

        if(!this.head){
            this.head=newNode;
            this.tail=this.head;
        }

        else{
            this.tail.next = newNode;
            this.tail=newNode;
        }
        this.length+=1;
        return this;
    }

    pop(){

        if(!this.head) return undefined;
        if(this.length===1){
            this.head=null;
            this.tail=null;
            this.length--;
        }
        else{
            let current = this.head;
            let forward = current.next;

            while(!(forward===this.tail)){

                forward = forward.next;
                current = current.next;
                console.log(" ths current node is", current);
            }
            this.tail = current;
            forward = null;
            this.length-=1;

        }
    return this;
    }

    unshift(value){
        const newNode= new Node(value);

        if(!this.head) {
            this.head=newNode;
            this.tail=this.head;
            this.length+=1;
        }else{
            let temp = this.head;
            this.head=newNode;
            newNode.next=temp;
            this.length+=1;
        }
    return this;
    }

    shift(){
        if(!this.head) return undefined;
        if(this.length===1){
            this.head=null;
            this.tail=null;
            this.length--;
        }
        let temp = this.head;
        this.head=temp.next;
        temp=null;
        this.length--;
        return this;

    }
    get(position){
        if(position===1){
            return this.head;
        }
        if(position>this.length || position<1) {
            return null;

        }
        else{
            let counter=1;
            let current = this.head;
            while(counter!==position){
                counter++;
                current=current.next;
            }
            console.log(current)

            return current;
        }
    }
    set(position,value){
        let newNode = this.get(position);

        if(newNode) {
            newNode.value = value;
            return true;
        }
        return false;
    }
    insert(position, value){
        if(this.length===0 || position<0 || position>this.length) return undefined;
        if(position===0){
           return  this.unshift(value)
        }
        if(position===this.length){
            return this.push(value)
        }
        let newNode = new Node(value);
        const beforeNode = this.get(position-1);
        let currentNode = beforeNode.next;
        beforeNode.next=newNode;
        newNode.next=currentNode;
        this.length++;
        return true;
    }
    remove(position){
        if(position<0 || position>this.length) return undefined;
        if(position===0) return this.shift();
        if(position===this.length-1) return this.pop();
        let previousNode = this.get(position-1);
        let removeNode = previousNode.next;
        previousNode.next=removeNode.next;
        removeNode=null;
        this.length--;
        return this;

    }

}
const Node1 = new SinglyLinkedList()

Node1.push(3)
Node1.push(6)
Node1.push(9)
Node1.push(12)
Node1.push(15)
Node1.set(2,18)
console.log(Node1.get(2))













//
//
//     // 3 ->         6->       9->        ->  12 ->      15
//     // backward< -current   forward
//     // backward  <- currrent   foward
//     // backward     <-current     forward
//
//     reverse(){
//
//         if(this.length===0) return undefined;
//         if(this.length<=3){
//             //do something
//         }
//         let backward = this.head;
//         let current = backward.next;
//         let forward = current.next;
//
//
//         while(!this.tail){
//             current.next=backward;
//             current = backward;
//
//
//
//         }
//     }
//
//
//
//
// }