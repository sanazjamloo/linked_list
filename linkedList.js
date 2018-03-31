function LinkedList () {
  var length = 0;
  var head = null;

  //creating a new node
  var Node = function (element) {
    this.element = element;
    this.next = null;
  };

  this.size = function (){
    return length;
  };

  this.head = function (){
    return head;
  };

//Adding a new node
  this.add = function(element) {
    var node =  new Node(element);
    if (head === null){
      head = node;
    } else {
       var currentNode = head;

      while (currentNode.next){
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }
      length++;
  };

// Remove method
this.remove = function(element){
  var currentNode = head;
  var previousNode;
  if (currentNode.element === element){
    head = currentNode.next;
  } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previuosNode.next = currentNode.next;
  }

  length --;
};

this.isEmpty = function () {
  return = length === 0;
};

this.indexOf = function (element) {
  var currentNode = head;
  var index = -1;

  while (currentNode) {
    index++;

    if (currentNode.element === element) {
      return index;
    }
    currentNode = currentNode.next;
  }
  return -1;
};






}
