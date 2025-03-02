 const buttons = document.querySelectorAll('.card-btn');
 
 
  
 
   
 for (const button of buttons) {
    
     button.addEventListener('click', function(){
        alert('task complite');
        const headerTask = idToPersValue('header-task') + 1 ;
        setValue('header-task', headerTask );
        const assTask = idToPersValue('ass-task') - 1;
        setValue('ass-task',assTask);
       const allBtn= button.disabled = true;
       const dayDi = new Date();
        let hour = dayDi.getHours();
        let min = dayDi.getMinutes();
        let sec = dayDi.getSeconds();
       const  childName = button.parentElement.parentElement.childNodes[3].innerText;

        const parentContainer = document.getElementById('list-add');
        // console.log(parentContainer)

        const childElement = document.createElement('div');
        childElement.innerHTML = `You have Complete The Task ${childName} at  ${hour}:${min}:${sec} PM`;

       
        parentContainer.appendChild(childElement);
        childElement.classList.add( 'p-4','bg-[#F4F7FF]','mt-3','clear' );
        // childElement.classList.add('')
        
        if(assTask === 0){
            alert('successful task')
        }
        
         
     })
 }

 const history = document.getElementById('clear-history').addEventListener('click',function(){
   const perHis= document.getElementById('list-add');
   perHis.style.display = 'none';
 });




 const dayName = document.getElementById('day-name').innerText;
const yearMonth = document.getElementById('year-month').innerText;
 
const monthName = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const dayNameArr= ['Sat','Sun','Mon','Tue','Wed','Thu','Fri']

const date = new Date();
let day = date.getDate();
let year =date.getFullYear();
setValue('years',year)
setValue('days',day)
 
 
    for (const e of dayNameArr) {
        if(dayNameArr.indexOf(e) === date.getDate()-1 ){
            setValue('day-name',e);     
     }
    }

    for (const el of monthName) {
        if(monthName.indexOf(el) === date.getMonth()){
            setValue('month',el)
        }
    }
 
document.getElementById('discover-today').addEventListener('click',function(){
    window.location.href = "/main.html";
})
// 



  