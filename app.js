

var ListContainer = document.getElementById('List_Container')
var input = document.getElementById("List_Value")
function add() {
    
    if (input.value === "") {
      
   alert("Please Enter a Task")
  }
  else {
    var ListValue = document.getElementById('List_Value').value
      var MainDiv = document.createElement('div')
 


      // Like Button
      var Listbtn = document.createElement('button')
      Listbtn.setAttribute("id","Listbtn")
      var ListbtnImg = document.createElement('img')
      ListbtnImg.setAttribute("id","ListbtnImg")
      Listbtn.appendChild(ListbtnImg)
      Listbtn.setAttribute("class", "ListCrossImg")
      Listbtn.setAttribute("onclick", "Tickbtn()")
      ListbtnImg.setAttribute("src", "./img/x-mark.png")
      MainDiv.appendChild(Listbtn)


      // List Text
      var ListHeading = document.createElement('p')
      var ListText = document.createTextNode(ListValue)
      ListHeading.appendChild(ListText)
      MainDiv.appendChild(ListHeading)


      // Remove Button
    var Remove = document.createElement('button')
    var RemoveText = document.createTextNode('Remove')
    Remove.appendChild(RemoveText)
    Remove.setAttribute('onclick','removeTodo(event)')
      MainDiv.appendChild(Remove)
      

    // Edit Button
    var editBtn = document.createElement('button');
      var editText = document.createTextNode('Edit');
      editBtn.setAttribute("class", "Editbtn")
      editBtn.setAttribute("onclick", "editList()")
    editBtn.appendChild(editText)
      MainDiv.appendChild(editBtn)


      // Update Button
    var updateBtn = document.createElement('button');
      var updateText = document.createTextNode('Update');
      updateBtn.setAttribute("class", "updatebtn")
      updateBtn.setAttribute("onclick", "updateList()")
    updateBtn.appendChild(updateText)
    MainDiv.appendChild(updateBtn)
  
  
      Remove.setAttribute("class", "removeList")
    ListContainer.appendChild(MainDiv)
      
    input.value = ""
      
  }

}


function Tickbtn() {
  var btntick = event.target
  btntick.classList.add("sameer")
  btntick.setAttribute("src","./img/checked.png")
}

function removeTodo(){
  var btn = event.target;
  btn.parentNode.remove()
}


  function editList(){
    alert('Kindly Click on text to edit')
    var btn = event.target;
    btn.style.display = 'none';
    btn.parentNode.lastChild.style.display = "inline-block"
    btn.parentNode.childNodes[1].contentEditable = "true"
    

}


function updateList(){
  var btn = event.target;
  btn.style.display = 'none';
  btn.parentNode.childNodes[3].style.display = "inline-block"
    btn.parentNode.childNodes[1].contentEditable  = "false"
}




