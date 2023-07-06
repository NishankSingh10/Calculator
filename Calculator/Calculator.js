function Solve(val) {
    let v = document.getElementById('result');
    console.log(v);
    v.value += val;
 }
 function Result() {
    let num1 = document.getElementById('result').value;
    let num2 = eval(num1);
    document.getElementById('result').value = num2;
 }
 function Clear() {
    let input = document.getElementById('result');
    input.value = '';
 }
 function Back() {
    let remove = document.getElementById('result');
    remove.value = remove.value.slice(0,-1);
 }
 