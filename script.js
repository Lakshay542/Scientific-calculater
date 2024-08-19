let current_input = "";
let last_input = "";
let operator = null;

let result = 0;

function updateDisplay(val){

    document.getElementById('display1').textContent = val;
    document.getElementById('display2').textContent = val;

}

function clearDisplay(){
    document.getElementById('display1').textContent = "0";
    document.getElementById('display2').textContent = "0";
    last_input = "";
    current_input = "";
}

function inputDigit(digit){
 
    current_input += digit;
    last_input = current_input;
    updateDisplay(current_input);
}

function inputOperator(op){
    if(op == "-"&& last_input ==""){
        current_input = last_input + op;
        updateDisplay(current_input);
        return;
    }
    if(last_input == ""){
        return;
    }
    else{
        current_input = last_input + op;
        updateDisplay(current_input);
        // current_input = "";
    }
}

function roundOff(x){
    if(Math.abs(x)<1e-10){
        x = 0;
    }
    else if(Math.abs(x-1)<1e-10){
        x = 1;
    }
    else{
        x = parseFloat(x.toFixed(10));
    }
    return x;
}

function calculate(){
   
    if(current_input.slice(0,2)=="/^"){
        result = Math.sqrt(parseFloat(current_input.slice(2)));
        updateDisplay(result);
        current_input = "";
        last_input = result.toString();
        return;
    }
    else if(current_input.slice(0,4)=="3/``"){
        result = Math.cbrt(parseFloat(current_input.slice(4)));
        updateDisplay(result);
        last_input = result.toString();
        return;
    }
    else if(current_input.slice(0,3)=="sin"){
        result = (Math.sin(parseFloat(current_input.slice(3))*Math.PI/180));
        result = roundOff(result);
        updateDisplay(result);
        last_input = result.toString();
        return;
    }
    else if(current_input.slice(0,3)=="cos"){
        result = (Math.cos(parseFloat(current_input.slice(3))*Math.PI/180));
        result = roundOff(result);
        updateDisplay(result);
        last_input = result.toString();
        return;
    }
    else if(current_input.slice(0,3)=="tan"){
        
        let deg = parseFloat(current_input.slice(3))

        result = (Math.tan(parseFloat(current_input.slice(3))*Math.PI/180));
        result = roundOff(result);

        if(deg%180===90||deg%180===-90){
            result = "Undefined";
            updateDisplay(result);
            return;
        }

        updateDisplay(result);
        last_input = result.toString();
        return;

    }
    else if(current_input.slice(0,2)=="ln"){
        if(parseFloat(current_input.slice(2)) > 0)
          {
            result = Math.log(parseFloat(current_input.slice(2)));
            updateDisplay(result);
            current_input = "";
            last_input = result.toString();
            return;
        }
        else{
            result = "Undefined";
            updateDisplay(result);
            return;

        }
    }
    else if(current_input.slice(0,6)=="logten"){
        if(parseFloat(current_input.slice(6)) > 0)
          {
            result = Math.log10(parseFloat(current_input.slice(6)));
            updateDisplay(result);
            current_input = "";
            last_input = result.toString();
            return;
        }
        else{
            result = "Undefined";
            updateDisplay(result);
            return;

        }
    }
    else if(current_input.slice(0,2)=="e^"){
        if(parseFloat(current_input.slice(2)))
          {
            result = Math.exp(parseFloat(current_input.slice(2)));
            updateDisplay(result);
            current_input = "";
            last_input = result.toString();
            return;
        }
        else{
            result = "Undefined";
            updateDisplay(result);
            return;

        }
    }
    else if(current_input.slice(-4)=="^(2)"){
    
        result = parseFloat(current_input.slice(0,-4)) * parseFloat(current_input.slice(0,-4));

        updateDisplay(result);
        current_input = "";
        last_input = result.toString();
         return;

    }
    else if(current_input.indexOf("^")>0 && current_input.slice(current_input.indexOf("^"))!=""){
        let n = current_input.indexOf("^");

        let a = parseFloat(current_input.slice(0,n));
        let b = parseFloat(current_input.slice(n+1));

        result = Math.pow(a,b);
        updateDisplay(result);
        current_input = "";
        last_input = result.toString();
         return;
       

    }
    else if(current_input.slice(0,4)=="abs("){
        
        result = Math.abs(eval(current_input.slice(4)));
        updateDisplay(result);
        current_input = "";
        last_input = result.toString();
         return;
       

    }
    else if(current_input.slice(0,3)=="Pi("){
        
        result = Math.PI * eval(current_input.slice(3));
        updateDisplay(result);
        current_input = "";
        last_input = result.toString();
         return;
       

    }
    else if(current_input.slice(0,2)=="e^"){
        
        result = Math.exp(eval(current_input.slice(2)));
        updateDisplay(result);
        current_input = "";
        last_input = result.toString();
         return;
       

    }
    else if(current_input.slice(0,4)=="asin"){
        
        result = Math.asin(parseFloat(current_input.slice(4)));
        result = result*180/Math.PI;
        result = roundOff(result);
        updateDisplay(result);
        current_input = "";
        last_input = result.toString();
         return;
       

    }
    else if(current_input.slice(0,4)=="acos"){
        
        result = Math.acos(parseFloat(current_input.slice(4)));
        result = result*180/Math.PI;
        result = roundOff(result);
        updateDisplay(result);
        current_input = "";
        last_input = result.toString();
         return;
       

    }
    else if(current_input.slice(0,4)=="atan"){
        
        result = Math.atan(parseFloat(current_input.slice(4)));
        result = result*180/Math.PI;
        result = roundOff(result);
        updateDisplay(result);
        current_input = "";
        last_input = result.toString();
         return;
       

    }
    else if(current_input.slice(0,4)=="Sinh"){
        
        result = (Math.sinh(parseFloat(current_input.slice(4))*Math.PI/180));
        result = roundOff(result);
        console.log(result);
        updateDisplay(result);
        current_input = "";
        last_input = result.toString();
         return;
       

    }
    else if(current_input.slice(0,4)=="Cosh"){
        
        result = (Math.cosh(parseFloat(current_input.slice(4))*Math.PI/180));
        result = roundOff(result);
        console.log(result);
        updateDisplay(result);
        current_input = "";
        last_input = result.toString();
         return;
       

    }
    else if(current_input.slice(0,4)=="Tanh"){
        
        result = (Math.tanh(parseFloat(current_input.slice(4))*Math.PI/180));
        result = roundOff(result);
        console.log(result);
        updateDisplay(result);
        current_input = "";
        last_input = result.toString();
         return;
       

    }
    else if(current_input.slice(0,5)=="Asinh"){
        
        result = Math.asinh(parseFloat(current_input.slice(5)));
        result = result * 180/Math.PI;
        result = roundOff(result);
        console.log(result);
        updateDisplay(result);
        current_input = "";
        last_input = result.toString();
         return;
       

    }
    else if(current_input.slice(0,5)=="Acosh"){
        if(parseFloat(current_input.slice(5)) >= 1){
        result = Math.acosh(parseFloat(current_input.slice(5)));
        result = result * 180/Math.PI;
        result = roundOff(result);
        console.log(result);
        updateDisplay(result);
        current_input = "";
        last_input = result.toString();
         return;
        }

        else{
            result = "Invalid domain";
            updateDisplay(result);
            return;
        }
       

    }
    else if(current_input.slice(0,5)=="Atanh"){
        if(parseFloat(current_input.slice(5)) > -1 && parseFloat(current_input.slice(5))<1){
        result = Math.atanh(parseFloat(current_input.slice(5)));
        result = result * 180/Math.PI;
        result = roundOff(result);
        console.log(result);
        updateDisplay(result);
        current_input = "";
        last_input = result.toString();
         return;
        }

        else{
            result = "Invalid domain";
            updateDisplay(result);
            return;
        }
       

    }
    else if(current_input.slice(0,2)=="2^"){
        
        result = Math.power(2,eval(current_input.slice(2)));
        updateDisplay(result);
        current_input = "";
        last_input = result.toString();
         return;
       

    }
    else if( current_input.slice(-2) == "^3"){
        result = parseFloat(current_input.slice(0,-2)) * parseFloat(current_input.slice(0,-2)) *parseFloat(current_input.slice(0,-2));
        console.log("fekki");
        updateDisplay(result);
        current_input = "";
        last_input = result.toString();
         return;
    }
    else if( current_input.slice(-1) == "!"){
        if(parseInt(current_input.slice(0,-1))<0){
            result = "undefined";
            updateDisplay(result);
            current_input = "";
            last_input = result.toString();
            return;
        }
        let x = 1;
        for(let i = parseInt(current_input.slice(0,-1));i>0;i--){
            x = x*i;
        }
        result = x;
        updateDisplay(result);
        current_input = "";
        last_input = result.toString();
         return;
    }
    
    
    

    
    





  

    




    result = eval(current_input);
    updateDisplay(result);
    last_input = result.toString();
    

}


//                WOrking in proggresss   ****************************************
let n = 0;
function brakets(br){
    if(br==="open_braket"){
        br = "(";
        n++;
     
    }
    else if(br==="close_braket"){
        br=")";
      n--;
    } 
   
   
    current_input += br;
    updateDisplay(current_input);
}

function backspace(){

    let lenght =last_input.length;
   last_input = last_input.slice(0,-1);
   current_input = last_input;
   updateDisplay(last_input);
 
}


//                    code for transition or switiching between modes

const boxA = document.getElementById('normal');
const boxB = document.getElementById('scientific');

// const toggleButton = document.getElementById('btn');

const toggleButton1 = document.getElementById('to_scientific');
const toggleButton2 = document.getElementById('to_normal');


let isBoxAShown = true;

function toggleBoxes(){
    if(isBoxAShown){
        boxA.classList.remove('show');
        boxB.classList.add('show');
    }else{
        boxB.classList.remove('show');
        boxA.classList.add('show');
    }
    isBoxAShown = !isBoxAShown;
}

// toggleButton.addEventListener("click",toggleBoxes);
toggleButton1.addEventListener("click",toggleBoxes);
toggleButton2.addEventListener("click",toggleBoxes);



boxA.classList.add('show');      //     Change to box A ################################
 



// #######################################################################


const boxAA = document.querySelectorAll('.AA');
const boxBB = document.querySelectorAll('.BB');
const switchButton = document.getElementById('hell');

let isboxAAopen = true;

function switchBoxes(){
    if(isboxAAopen){
        boxAA.forEach(a=>{a.classList.add('show1');
    
        });
        boxBB.forEach(b=>{b.classList.remove('show1');
    
        });
    }
    
    else{
        boxAA.forEach(a=>{a.classList.remove('show1');
    
        });
        boxBB.forEach(b=>{b.classList.add('show1');
    
        });
    }
    isboxAAopen = !isboxAAopen;
    
}


switchButton.addEventListener('click', switchBoxes);
boxAA.forEach(a=>{a.classList.add('show1');});



//  -----------------------------------------------Scientific Calculation------------------------------

function type_function(str){
   
    current_input = ""; 

   if(current_input==""&&str=="sqrt"){
    current_input = "/^";
    updateDisplay("/^");
   }  

   if(current_input==""&&str=="cbrt"){
    current_input = "3/``";
    updateDisplay("3/``");
   }  

   if(current_input==""&&str=="sin"){
    current_input = "sin";
    last_input = current_input;
    updateDisplay("sin");
   }

   if(current_input==""&&str=="cos"){
    current_input = "cos";
    last_input = current_input;
    updateDisplay("cos");
   }

   if(current_input==""&&str=="tan"){
    current_input = "tan";
    last_input = current_input;
    updateDisplay("tan");
   }
   
   if(current_input==""&&str=="ln"){
    current_input = "ln";
    last_input = current_input;
    updateDisplay("ln");
   }

   if(current_input==""&&str=="logten"){
    current_input = "logten";
    last_input = current_input;
    updateDisplay("logten");
   }

   if(current_input==""&&str=="inverse"){
    current_input = "1/";
    last_input = current_input;
    updateDisplay("1/");
   }

   if(current_input==""&&str=="expo"){
    current_input = "e^";
    last_input = current_input;
    updateDisplay("e^");
   }

   if(last_input != "" && str =="square1"){ 
    current_input = last_input + "^(2)";
    last_input = current_input;
    updateDisplay(current_input);
   }
   
   if(last_input != "" && str=="power1") {
    current_input = last_input + "^";
    updateDisplay(current_input);
   }

   if(current_input == "" && str =="mod"){ 
    current_input = "abs(";
    last_input = current_input;
    updateDisplay("abs(");
   }

   if(current_input == "" && str =="pie"){ 
    current_input = "Pi(";
    last_input = current_input;
    updateDisplay("Pi(");
   }

   if(current_input == "" && str =="exp"){ 
    current_input = "e^";
    last_input = current_input;
    updateDisplay("e^");
   }

   if(current_input == "" && str =="asin"){ 
    current_input = "asin";
    last_input = current_input;
    updateDisplay("asin");
   }

   if(current_input == "" && str =="acos"){ 
    current_input = "acos";
    last_input = current_input;
    updateDisplay("acos");
   }

   if(current_input == "" && str =="atan"){ 
    current_input = "atan";
    last_input = current_input;
    updateDisplay("atan");
   }

   if(current_input == "" && str =="sinh"){ 
    current_input = "Sinh";
    last_input = current_input;
    updateDisplay("Sinh");
   }

   if(current_input == "" && str =="cosh"){ 
    current_input = "Cosh";
    last_input = current_input;
    updateDisplay("Cosh");
   }

   if(current_input == "" && str =="tanh"){ 
    current_input = "Tanh";
    last_input = current_input;
    updateDisplay("Tanh");
   }

   if(current_input == "" && str =="Asinh"){ 
    current_input = "Asinh";
    last_input = current_input;
    updateDisplay("Asinh");
   }

   if(current_input == "" && str =="Acosh"){ 
    current_input = "Acosh";
    last_input = current_input;
    updateDisplay("Acosh");
   }

   if(current_input == "" && str =="Atanh"){ 
    current_input = "Atanh";
    last_input = current_input;
    updateDisplay("Atanh");
   }

   if(current_input == "" && str =="2^"){ 
    current_input = "2^";
    last_input = current_input;
    updateDisplay("2^");
   }

   if(last_input != "" && str =="cube1"){ 
    current_input = last_input + "^3";
    last_input = current_input;
    updateDisplay(current_input);
   }

   if(last_input != "" && str =="fac"){ 
    current_input = last_input + "!";
    last_input = current_input;
    updateDisplay(current_input);
   }





   
   
}