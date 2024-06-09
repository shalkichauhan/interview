//Merge Two Sorted Lists: Merge two sorted linked lists and return it as a new list.

class listNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

}
class SinglyLinkedList{

    constructor() {
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    push(value){

        var newNode = new listNode(value)

        if(!this.head){
            this.head=newNode;
            this.tail=this.head;
        }else {
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length++;
        return this;


    }

}

var myNode1 = new SinglyLinkedList()
myNode1.push(9)
myNode1.push(20)
myNode1.push(29)
myNode1.push(35)
myNode1.push(40)



var myNode2 = new SinglyLinkedList()
myNode2.push(1)
myNode2.push(25)
myNode2.push(32)
myNode2.push(37)
myNode2.push(45)



function merge(myNode1,myNode2){

    let dummy = new listNode();
    let current = dummy;
    let node1 = myNode1.head;
    let node2 = myNode2.head;
    while(node1 !== null && node2 !== null){
        if(node1.value<node2.value){
            current.next = node1
            node1 = node1.next
        }else{
            current.next=node2
            node2=node2.next
        }
        current=current.next
    }
    if(node1!==null){
        current.next = node1
    }if(node2!==null){
        current.next=node2
    }


    return printMergerdList(dummy.next)
    }

    function printMergerdList(list){

    let arr =[];
    while(list!==null){
        arr.push(list.value)
        list = list.next
    }
   console.log(arr)
    }



console.log(merge(myNode1,myNode2))



    /*

    check if the head is greater of myNode1 then this.head, else myNode2 becomes the head
    while(myNode1 && myNode2.next){

    }

     */

