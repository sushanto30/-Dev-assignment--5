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
        childElement.classList.add( 'p-4' );
        

        
         
     })
 }

  