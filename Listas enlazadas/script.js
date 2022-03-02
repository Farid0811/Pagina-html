
console.log("Script loaded!")
var form1 = document.getElementById("form-1");
var content = document.getElementById("form-content");

form1.addEventListener("submit", function(event){

  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.target).entries());
  console.log(event);
  console.log("submit");
  console.log(data)
  content.innerHTML = "<h1>Nombre: </h1>";
  content.innerHTML += "<p>" + data.name + "</p>";
  content.innerHTML = "<h1>Number: </h1>";
  content.innerHTML += "<p>" + data.number + "</p>";

    content.innerHTML += data.password;
  
});

function example () {

  return []
}


class List {
  constructor(value, next) {
    this.value = value;
    this.next = next;
    }
  }
class LinkedList{
  constructor(){
    this.head = null;
    this.size = 0;
  }
  function add(value){
    const newNode = new Node(value,null);
    if (!this.head) {
      this.head = newNode;
    }else{ 
      let current = this.head;
      while(current.next){
        current = current.next;
      };
      current.next = newNode;
    };
    this.size++;
    };
    function insertAt(value, index){
      if(idex < 0 || index > this,size){
        return null
      };
      const newNode = newNode(value);
      let current = this.head;
      let previous;
      if (index == 0) {
        newNode.next = current;
        this.head = newNode;
      }else{
        for(let i = 0; i < index; i++){
          previous= current;
          current = current.next;
        };
        newNode.next = current;
        previous.next = newNode;
      };
      this.size++;
    };

    function removeValue(value){
    let current = thhis.head;
    let previous = null;
    while(current!= null){
      if (current.value == value) {
        if(!previous){
          this.head = current.next;
        }else{
          previous.next = current.next;
        }
        this.else--;
        return current.value;
      }
      previous= current;
      current= current.next;
    }
    return null;
    }
   function removeFrom(index){
    if (index < 0 || index > this.size) {
      return null;
    }
    let current = this.head;
    let previous = null;
    if(index==0){
      this.head = current.next;
    }else{
      for(let i = 0; i< index; i++){
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
    return curren.value;
    } 
}


/* print(){
    if (this.size) {
      return null
    };
    let current = this.head;
    let result = '';
    while(current){
      result+= curren.value += '   ->   '
      current = current.next;
    };
    result+='x';
    return result;
  }*/