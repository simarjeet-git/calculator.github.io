 
let pressbtn7 =  document.getElementById('btn7').addEventListener('click',printbtn7)
  function printbtn7(){
   const btn7 =  document.getElementById('btn7').innerText
  


  let saveprint =  document.getElementById('resultdisplay');
let printdisplay =  document.createElement('h1');
printdisplay.innerText = btn7;
saveprint.appendChild(printdisplay)
  }
  let pressbtn8 =  document.getElementById('btn8').addEventListener('click',printbtn8)
  function printbtn8(){
  const btn8 =  document.getElementById('btn8').innerText

  let saveprint =  document.getElementById('resultdisplay');
let printdisplay =  document.createElement('h1');
printdisplay.innerText = btn8;
saveprint.appendChild(printdisplay)
  }
  let pressbtn9 =  document.getElementById('btn9').addEventListener('click',printbtn9)
  function printbtn9(){
   const btn9 =  document.getElementById('btn9').innerText
  


  let saveprint =  document.getElementById('resultdisplay');
let printdisplay =  document.createElement('h1');
printdisplay.innerText = btn9;
saveprint.appendChild(printdisplay)
  }
  let pressbtnop1 =  document.getElementById('btndivision').addEventListener('click',printbtnd)
  function printbtnd(){
   const btnd =  document.getElementById('btndivision').innerText
  


  let saveprint =  document.getElementById('resultdisplay');
let printdisplay =  document.createElement('h1');
printdisplay.innerText = btnd;
saveprint.appendChild(printdisplay)
  }
  let pressbtn6 =  document.getElementById('btn6').addEventListener('click',printbtn6)
  function printbtn6(){
   const btn6 =  document.getElementById('btn6').innerText
  


  let saveprint =  document.getElementById('resultdisplay');
let printdisplay =  document.createElement('h1');
printdisplay.innerText = btn6;
saveprint.appendChild(printdisplay)
  }
  let pressbtn5 =  document.getElementById('btn5').addEventListener('click',printbtn5)
  function printbtn5(){
   const btn5 =  document.getElementById('btn5').innerText
  


  let saveprint =  document.getElementById('resultdisplay');
let printdisplay =  document.createElement('h1');
printdisplay.innerText = btn5;
saveprint.appendChild(printdisplay)
  }
  let pressbtn4 =  document.getElementById('btn4').addEventListener('click',printbtn4)
  function printbtn4(){
   const btn4 =  document.getElementById('btn4').innerText
  


  let saveprint =  document.getElementById('resultdisplay');
let printdisplay =  document.createElement('h1');
printdisplay.innerText = btn4;
saveprint.appendChild(printdisplay)
  }
  let pressbtn3 =  document.getElementById('btn3').addEventListener('click',printbtn3)
  function printbtn3(){
   const btn3 =  document.getElementById('btn3').innerText
  


  let saveprint =  document.getElementById('resultdisplay');
let printdisplay =  document.createElement('h1');
printdisplay.innerText = btn3;
saveprint.appendChild(printdisplay)
  }
  let pressbtn2 =  document.getElementById('btn2').addEventListener('click',printbtn2)
  function printbtn2(){
   const btn2 =  document.getElementById('btn2').innerText
  


  let saveprint =  document.getElementById('resultdisplay');
let printdisplay =  document.createElement('h1');
printdisplay.innerText = btn2;
saveprint.appendChild(printdisplay)
  }
  let pressbtn1 =  document.getElementById('btn1').addEventListener('click',printbtn1)
  function printbtn1(){
   const btn1 =  document.getElementById('btn1').innerText
  


  let saveprint =  document.getElementById('resultdisplay');
let printdisplay =  document.createElement('h1');
printdisplay.innerText = btn1;
saveprint.appendChild(printdisplay)
  }
  let pressbtnm =  document.getElementById('btnmultiply').addEventListener('click',printbtnm)
  function printbtnm(){
   const btnm=  document.getElementById('btnmultiply').innerText
  


  let saveprint =  document.getElementById('resultdisplay');
let printdisplay =  document.createElement('h1');
printdisplay.innerText = btnm;
saveprint.appendChild(printdisplay)
  }
  let pressbtns =  document.getElementById('btnsubtraction').addEventListener('click',printbtns)
  function printbtns(){
   const btns =  document.getElementById('btnsubtraction').innerText
  


  let saveprint =  document.getElementById('resultdisplay');
let printdisplay =  document.createElement('h1');
printdisplay.innerText = btns;
saveprint.appendChild(printdisplay)
  }
  let pressbtna =  document.getElementById('btnplus').addEventListener('click',printbtna)
  function printbtna(){
   const btna =  document.getElementById('btnplus').innerText
  


  let saveprint =  document.getElementById('resultdisplay');
let printdisplay =  document.createElement('h1');
printdisplay.innerText = btna;
saveprint.appendChild(printdisplay)
  }
  let pressbtn0 =  document.getElementById('btn0').addEventListener('click',printbtn0)
  function printbtn0(){
   const btn0 =  document.getElementById('btn0').innerText
  


  let saveprint =  document.getElementById('resultdisplay');
let printdisplay =  document.createElement('h1');
printdisplay.innerText = btn0;
saveprint.appendChild(printdisplay)
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
  let clear = document.getElementById('clear').addEventListener('click',cleardisplay)

  function cleardisplay(){
    document.getElementById('resultdisplay').textContent = '';
  }
                                              
  
   



  }