function idToPersValue(id){
   const result= document.getElementById(id).innerText;
   const convertResult = parseInt(result)
   return convertResult

}

function setValue( id , value ){
    document.getElementById(id).innerText = value;
}


document.getElementById('home').addEventListener('click',function(){
        window.location.href = 'index.html';
     })