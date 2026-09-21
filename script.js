

const addBtn=document.querySelector('#addBtn')
const taskInput=document.querySelector('#taskInput')
const taskList=document.querySelector('#taskList')
const clearBtn=document.querySelector('#clearBtn')
const taskCount=document.querySelector('#taskCount')

function addtask(){
    if(taskInput.value.trim()!=''){


        const li=document.createElement('li')
        const span=document.createElement('span')
        span.innerHTML=taskInput.value

        const button=document.createElement('button')
        button.innerHTML='delete'
     
        span.classList.add('task-text')


li.appendChild(span)
li.appendChild(button)
taskList.appendChild(li)
let counter=parseInt(taskCount.innerHTML)
taskCount.innerHTML=counter+1

taskInput.value=''

span.addEventListener('click',function(){
        console.log(li);
    li.classList.toggle('completed')
    if(li.classList.contains('completed')){
            let counter=parseInt(taskCount.innerHTML)
            taskCount.innerHTML=counter-1
    }  else{
        let counter=parseInt(taskCount.innerHTML)
taskCount.innerHTML=counter+1
    }

})




button.addEventListener('click',function(){
    taskList.removeChild(li)
       if(li.classList.contains('completed')){
            let counter=parseInt(taskCount.innerHTML)
            taskCount.innerHTML=counter
    }  
    else{
        let counter=parseInt(taskCount.innerHTML)
            taskCount.innerHTML=counter-1
    }
})


}

}

addBtn.addEventListener('click',function(){
    
    addtask()

})
clearBtn.addEventListener('click',function(){
  document.querySelectorAll('li').forEach(li=>{
    if(li.classList.contains('completed')){
        li.remove()
       
    }
  })
    
})
taskInput.addEventListener('keydown',function(e){
    if(e.key=='Enter'){
        addtask()
    }
})

