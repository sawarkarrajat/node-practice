
/**
 * creating a class node to create any new node with null values.
 */
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}
/**
 *  creating class linkedlist which will create new nodes and perform operation like
 *  add,remove,insertAt,insertFrom.
 */
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    //adding an element to linkedlist
    add(element) {
        //creating a new node
        let node = new Node(element);
        // to store current node
        let current;
        //if list is empty add an element and make it head.
        if (this.head == null){
            this.head = node;
        }
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    //insert the string into file
    insertAt(element, index) {
        if (index < 0 && index > this.size){
            return false;
        }
        else {
            let node = new Node(element);
            let current, previous;
            current = this.head;
            //add element to first index
            if (index == 0) {
                node.next = head;
                this.head = node;
            }
            else {
                current = this.head;
                let iteration = 0;
                while (iteration < index) {
                    iteration++;
                    previous = current;
                    current = current.next;
                }
                // adding an element
                node.next = current;
                previous.next = node;
            }
            this.size++;
        }
    }
    // remove the item from file
    removeFrom(index) {
        // remove element from given index
        if (index < 0 && index > this.size){
            return -1;
        }
        else {
            let current, previous, iteration = 0;
            current = this.head;
            previous = curr;
            // deleting first element
            if (index === 0) {
                this.head = current.next;
            }
            else {
                while (iteration < index) {
                    iteration++;
                    previous = current;
                    current = current.next;
                }
                // remove the element
                previous.next = current.next;
            }
            this.size--;
            //return the remove element
            return current.element;
        }
    }
    //remove the string or element,if it already exists

    removeElement(element) {
        let current = this.head;
        let previous = null;
        while (current != null) {
            if (current.element === element) {
                if (previous == null) {
                    this.head = current.next;
                }
                else {
                    previous.next = current.next;
                }
                this.size--;
                return current.element;
            }
            previous = current;
            current = current.next;
        }
        return -1;
    }

    // checks the index value

    indexOf(element) {
        let count = 0;
        let current = this.head;
        while (current != null) {
            if (current.element === element){
                return count;
            }
            count++;
            current = current.next;
        }
       //not found
        return -1;
    }
    /**
     * method to sort elements of list
     */
    sortList() {
        let temp = this.head;
        for (let i = temp; i.next != null; i = i.next){
            for (let j = i.next; j != null; j = j.next) {
                if (parseInt(i.element) > parseInt(j.element)) {
                    let swap = i.element;
                    i.element = j.element;
                    j.element = swap;
                }
            }
        }
        let string = this.printList();
        return string;
    }
    //checks if file is empty are not
    isEmpty() {
        return this.size == 0;
    }
    //checks the string size in file
    sizeOflist() {
        return this.size;
    }
    printList() {
        // print the given list after performing changes.
        let current = this.head;
        let string = "";
        while (current) {
            string += current.element+" ";
            current = current.next;
        }
        return string;
    }
}
module.exports = { Node,LinkedList };