function add(){
    var a=parseInt(document.getElementById('no1').value);
    var b=parseInt(document.getElementById('no2').value);
     const result= document.getElementById('res');
     result.innerHTML = `Total:${a+b}`;
     result.style.fontSize='30px';
     result.style.color='black';
     alert('Addition Processed...');
}

function sub(){
    var a=parseInt(document.getElementById('no1').value);
    var b=parseInt(document.getElementById('no2').value);
     const result= document.getElementById('res');
     result.innerHTML = `Total:${a-b}`;
     result.style.fontSize='30px';
     result.style.color='pink';
     alert('Subtraction Processed...');
}

function multi(){
    var a=parseInt(document.getElementById('no1').value);
    var b=parseInt(document.getElementById('no2').value);
     const result= document.getElementById('res');
     result.innerHTML = `Total:${a*b}`;
     result.style.fontSize='30px';
     result.style.color='purple';
     alert('Multiplication Processed...');
}

function div(){
    var a=parseInt(document.getElementById('no1').value);
    var b=parseInt(document.getElementById('no2').value);
     const result= document.getElementById('res');
     result.innerHTML = `Total:${a/b}`;
     result.style.fontSize='30px';
     result.style.color='purple';
     alert('Division Processed...');
}

function mod(){
    var a=parseInt(document.getElementById('no1').value);
    var b=parseInt(document.getElementById('no2').value);
     const result= document.getElementById('res');
     result.innerHTML = `Total:${a%b}`;
     result.style.fontSize='30px';
     result.style.color='purple';
     alert('Modulus Processed...');
}