//Given the head of a singly linked list, reverse the list, and return the reversed list.

var reverseList = function(head) {
    let prev = null;
    let next = null;
    let current = head;
    while (current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    head = prev;
    return head;
};
