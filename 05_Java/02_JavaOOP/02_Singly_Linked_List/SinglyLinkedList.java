public class SinglyLinkedList {
    public Node head;
    public SinglyLinkedList() {
        // your code here
        this.head = null;
    }
    // SLL methods go here. As a starter, we will show you how to add a node to the list.
    public void add(int value) {
        Node newNode = new Node(value);
        if(head == null) {
            head = newNode;
        } else {
            Node runner = head;
            while(runner.next != null) {
                runner = runner.next;
            }
            runner.next = newNode;
        }
    }    
    //Create a remove() method that will remove a node from the end of your list
    public void remove(){
        if (head != null){
            Node runner = head;
            while(runner.next.next != null){
                runner = runner.next;
            }
            runner.next = null;
        }
    }
    //Create printValues() method that will print all the values of each node in the list in order
    public void printValues(){
        if (head != null){
            Node runner = head;
            while(runner != null){
                System.out.println(runner.value);
                runner = runner.next;
            }
        }
    }
    //Implement a find(int) method that will return the first node with the value in the parameter
    public Node find(int number){
        if (head != null){
            Node runner = head;
            while(runner != null){
                if (runner.value == number){return runner;}
                runner = runner.next;
            }
        }
        return null;
    }

    //Implement a removeAt(int) method that will remove the node after n nodes, where n is the parameter. For example, if n is 0, remove the first node. If n is 1, remove the second node. Similar to Arrays.
    public void removeAt(int index){
        if (head != null){
            //Iterate to the position of the requested index parameter
            Node runner = head;
            for(int i = 0; i < index-1; i++){
                runner = runner.next;
            }
            //Save the index we need to remove, which is the one after the index parameter
            Node indexPlusOne = runner.next.next;

            //Point the node at parameter index to the node at indexPlusOne. In other word, disconnect the node at indexPlusOne from the List.
            runner.next = indexPlusOne;
        }
    }

}