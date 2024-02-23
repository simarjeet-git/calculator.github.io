
 let getnumber;
 let btnvalue = document.querySelectorAll('#btn')
  let btnvaluearr = Array.from(btnvalue)
  console.log(btnvaluearr)
  for(var i = 0; i < btnvalue.length; i++) {
    btnvalue[i].addEventListener("click", bindClick(i));
}

function bindClick(i) {
 return function() {
  getnumber = btnvalue[i].textContent
  displayprint();
     console.log(getnumber);
        
 };
}
console.log(getnumber);
function displayprint(){
let printdisplay = document.getElementById('resultdisplay')
let createtag = document.createElement('h1')
createtag.innerText = getnumber
printdisplay.appendChild(createtag)
}
   
  let pressbtnequal =  document.getElementById('btnequal').addEventListener('click',printbtnequal)
  function printbtnequal(){
   const btnqual = document.getElementById('resultdisplay').textContent
    
   let searchindex = function indexsearch(){
    if(btnqual.includes("+")===true){
      return("+")
    }
    else if(btnqual.includes("-")===true){
      return("-")
    }
    else if(btnqual.includes("*")===true){
      return("*")
    }
    else {
      return("/")
    }
   }
   let Search = btnqual.indexOf(searchindex())
   let startbtnqual = btnqual.slice(0,Search) 
   let endbtnqual = btnqual.substring(Search+1)
   var a = Number(startbtnqual)
   var  b =  Number(endbtnqual)
   console.log(a)
   calculation()
 function calculation(){
  if (searchindex() ==="+"){
    
    
    let c = a + b
    console.log(c)


let finalresult = document.getElementById('resultdisplay').textContent = c 

     }
     if (searchindex() ==="-"){
    
    
      let c = a - b
      console.log(c)
  
  
  let finalresult = document.getElementById('resultdisplay').textContent = c   
  
       }
       if (searchindex() ==="*"){
    
    
        let c = a * b
        console.log(c)
    
    
    let finalresult = document.getElementById('resultdisplay').textContent = c   
    
         }
         if (searchindex() ==="/"){
    
    
          let c = a / b
          console.log(c)
      
      
      let finalresult = document.getElementById('resultdisplay').textContent = c   
      
           }
 }
  let clear = document.getElementById('btnclear').addEventListener('click',cleardisplay)

  function cleardisplay(){
    document.getElementById('resultdisplay').textContent = '';
  }
                                              
  
   



  }