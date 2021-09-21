
let wareListNew;
setTimeout(()=>{wareListNew = document.getElementById('wareListNew')},3000)
console.log(wareListNew)
wareListNew.addEventListener('click', function (){
    let x;
    let y;
    wareListNew.onmousemove = function(event){
        console.log(event);
    }
});  