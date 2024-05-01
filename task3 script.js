let inp = document.getElementById('displaybox');
let btn =  document.querySelectorAll('button');
let str = "";
let Arr = Array.from(btn);
Arr.forEach(button => {
    button.addEventListener('click' , (e) =>{
        if(e.target.innerHTML == '='){
            str = eval(str);
            inp.value = str;
        }
        else if(e.target.innerHTML == 'x!'){
            if(str<0){
                alert("Syntax Error!");
            }
            else if(str==0){
                inp.value = "1";
            }
            else{
                let factorial = 1;
                for (i=1; i<=str; i++){
                    factorial *= i;
                }
                inp.value = factorial;
            }
        }
        else if(e.target.innerHTML == 'x^2'){
            str = Math.pow(str,2);
            inp.value = str;
        }
        else if(e.target.innerHTML == 'sin'){
            str = Math.sin(str);
            inp.value = str;
        }
        else if(e.target.innerHTML == 'ln'){
            str = Math.log(str);
            inp.value = str;
        }
        else if(e.target.innerHTML == 'Deg'){
            var pi = Math.PI;
            str = str*(180/pi);
            inp.value = str;
        }
        else if(e.target.innerHTML == 'x^3'){
            str = Math.pow(str,3);
            inp.value = str;
        }
        else if(e.target.innerHTML == 'cos'){
            str = Math.cos(str);
            inp.value = str;
        }
        else if(e.target.innerHTML == 'log'){
            str = Math.log10(str);
            inp.value = str;
        }
        else if(e.target.innerHTML == 'e'){
            str = Math.exp(1);
            inp.value = str;
        }
        else if(e.target.innerHTML == 'e^x'){
            str = Math.exp(str);
            inp.value = str;
        }
        else if(e.target.innerHTML == 'π'){
            str = Math.PI;
            inp.value = str;
        }
        else if(e.target.innerHTML == 'x^'){
            str = Math.exp(str,str);
            inp.value = str;

        }
        else if(e.target.innerHTML == 'tan'){
            str = Math.tan(str);
            inp.value = str;
        }
        else if(e.target.innerHTML == '√'){
            if(str<0){
                alert("Syntax Error!");
            }
            else{
                str = Math.square(str);
                inp.value = str;
            }
        }
        else if(e.target.innerHTML == '3√'){
            if(str<0){
                alert("Syntax Error!");
            }
            else{
                str = Math.cbrt(str);
                inp.value = str;
            }
        }
        else if(e.target.innerHTML == 'AC'){
            str = "";
            inp.value = str;
        }
        else if(e.target.innerHTML == 'DEL'){
            str = str.substring(0, str.length-1);
            inp.value = str;
        }
        else{
            str += e.target.innerHTML;
            inp.value = str;
        }
    })
});