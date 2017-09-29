const Node = require('./node');

class LinkedList {
    constructor() {
        this._head=null;
        this._tail=null;
        this.length=0;
    }

    append(data) {
        var node = new Node(data);
        if (this.length) {
            node.prev = this._tail;
            this._tail.next = node;
            this._tail = node;
        } else {
            this._head = node;
            this._tail = node;
        }
        this.length++;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        var i,
            x=this._head;
        while (index>0){
            x=x.next;
            index--;
        }
        return x.data;
    }

    insertAt(index, data) {

    }

    isEmpty() {
        return (!this.length);
    }

    clear() {
        this._head.data=null;
        this._head.next=null;
        this._head.prev=null;
        this._tail.data=null;
        this._tail.next=null;
        this._tail.prev=null;
        this.length=0;
    }

    deleteAt(index) {

    }

    reverse() {
        var x=this._tail,i,buf;
        this._head=x;
        for(i=0;i<this.length;i++){
            buf=x.prev;
            x.prev=x.next;
            x.next=buf;
            if(x.next){
                x=x.next;
            }
            else break;
        }
        this._tail=x;
    }

    indexOf(data) {
        var i=0,
            x=this._head;
        while (i<this.length){
            if (x.data===data) break;
            x=x.next;
            i++;
        }
        if (i===this.length) return -1;
        return i;
    }
}

module.exports = LinkedList;
