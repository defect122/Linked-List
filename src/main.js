//import "./style.css";

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    append(name, number) {
        const node = new Node(name, number);
        let current;
        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    prepend(name, number) {
        this.head = new Node(name, number, this.head);
        this.size++;
    }
    getSize() {
        return this.size;
    }
    printList() {
        let current = this.head;
        while (current) {
            console.log(current.name);
            console.log(current.number);
            current = current.next;
        }
    }
}



class Node {
    constructor(name, number, next = null) {
        this.name = name;
        this.number = number;
        this.next = next;
    }
}

const linkedList = new LinkedList();
linkedList.prepend("Luis", 25);
linkedList.prepend("Ilya", 19);
linkedList.prepend("Derek", 22);
linkedList.append("Ethan", 12);
linkedList.printList();
console.log(linkedList.getSize());