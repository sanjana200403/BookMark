console.log("bjf")


// constructor
function Book(title,author,type){
this.title = title
this.author = author
this.type = type

}
// display contructor
function Display(){
    
}
//  add  method to display prototype
Display.prototype.add=function(book){
    let uiString =`
    <tr>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>
    </tr>
    `
tbody.innerHTML += uiString
}
Display.prototype.clear=function(){
    let libraryForm= document.getElementById('libraryForm')
    libraryForm.reset()
}
// implement validate function
Display.prototype.validate = function(book){
    if(book.title.length<=2||
         book.author.length<2){
        return false
    }
    else{
        return true
    }
}
// implement erro function
Display.prototype.show = function(type,message){
    let msg = document.getElementById('mesaage')
    msg.innerHTML=`<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Message!</strong> 
    ${message}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`
  setTimeout(()=>{
msg.innerHTML=""
  },2000)

}

// add submit event listeners
let libraryForm= document.getElementById('libraryForm')
libraryForm.addEventListener('submit' ,libraryFormSubmit)




function libraryFormSubmit(e){
    e.preventDefault()
    let name = document.getElementById('bookName').value
    let author =document.getElementById('author').value
    let fiction=document.getElementById('fiction')
 let programing=document.getElementById('programing')
 let cooking =document.getElementById('cooking')
 let type 

 if(
   fiction .checked){
type = fiction.value
 }
 else if(
    programing.checked){
type = programing.value
 }
 else if(cooking.checked){
type =cooking .value
 }
 
 

    let book = new Book(name,author,type)
    console.log(book)
    console.log(book.title)

    let display = new Display()
   if( display.validate(book)){
    display.add(book)
    display.clear()
    alert("you have submitted library form")
    display.show('success',"your book has been  added")
    
   }else{
    // show erroe
    display.show('danger',"sorry you can not add it")
   }
    // display.clear()
    // console.log("you have submitted library form")
}