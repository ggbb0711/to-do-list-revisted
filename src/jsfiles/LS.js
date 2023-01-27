import dayjs from 'dayjs'

function Step(stepTitle,stepDesc,stepDate){
    return{
        stepTitle,stepDesc,
        stepDate:(stepDate)?stepDate:'none',
        daysLeft:(!stepDate)?'none':dayjs(stepDate).diff(dayjs(),'days')+1,
        completed:false
    }
}

export function createToDo(title){
    //The ToDo object has the title and the steps property
    //The steps property is an array that has three element from highest step (0 index) to lowest step (2 index)
    let ToDo={
        ToDoTitle:title,
        Steps:[[],[],[]]
    }

    return ToDo
}

function ToDoMethods(ToDo){
    
    ToDo.sortStep=(a,b)=>{
        if((a.daysLeft==='none'&&b.daysLeft==='none')||
        (a.completed&&b.completed)){
            return 0
        }
        if(a.daysLeft==='none'||a.completed){
            return 1
        }
        if(b.daysLeft==='none'||b.completed){
            return -1
        }

        return a.daysLeft-b.daysLeft
    }

    ToDo.completeStep=(stepPriority,stepIndex)=>{
        ToDo.Steps[stepPriority][stepIndex].completed=!ToDo.Steps[stepPriority][stepIndex].completed

        ToDo.Steps[stepPriority].sort((a,b)=>{
            return ToDo.sortStep(a,b)
        })
    }

    ToDo.updateStepDate=()=>{
        for(let i=0;i<3;i++){
            ToDo.Steps[i].forEach((step,stepIndex)=>{
                ToDo.Steps[i][stepIndex].daysLeft=(!step.stepDate||step.stepDate==='none')?'none':dayjs(step.stepDate).diff(dayjs(),'days')+1
            })
            ToDo.Steps[i].sort((a,b)=>{
                return ToDo.sortStep(a,b)
            })
        }
    }

    ToDo.addStep=(stepTitle,stepDesc,stepDate,stepPriority)=>{
        let newStep=Step(stepTitle,stepDesc,stepDate)
        ToDo.Steps[stepPriority].push(newStep)
        ToDo.Steps[stepPriority].sort((a,b)=>{
            return ToDo.sortStep(a.daysLeft,b.daysLeft)
        })
    }

    ToDo.deleteStep=(stepPriority,stepIndex)=>{
        ToDo.Steps[stepPriority].splice(stepIndex,1)
        ToDo.Steps[stepPriority].sort(ToDo.sortStep)
    }

    ToDo.renameToDo=(newtitle)=>{
        ToDo.ToDoTitle=newtitle
    }

    ToDo.reWriteStep=(stepPriority,stepIndex,newStepTitle,newStepDesc,newStepDate)=>{
        ToDo.Steps[stepPriority][stepIndex].stepTitle=newStepTitle
        ToDo.Steps[stepPriority][stepIndex].stepDesc=newStepDesc
        ToDo.Steps[stepPriority][stepIndex].stepDate=(newStepDate)?newStepDate:'none'
        ToDo.Steps[stepPriority][stepIndex].daysLeft=(!newStepDate)?'none':dayjs(newStepDate).diff(dayjs(),'days')+1
        ToDo.Steps[stepPriority].sort((a,b)=>{
            return ToDo.sortStep(a.daysLeft,b.daysLeft)
        })
    } 
    
    return ToDo
}

export function updateToDo(ToDoIndex,ToDo){
    let currToDoList=getLS()
    currToDoList[ToDoIndex]=ToDo
    setLS(currToDoList) 
}

export function addToDo(ToDo){
    let currToDoList=getLS()
    currToDoList.push(ToDo)
    setLS(currToDoList) 
}

export function deleteToDo(index){
    let currToDoList=getLS()
    currToDoList.splice(index,1)
    setLS(currToDoList)
}


function setLS(data){
    window.localStorage.setItem('todolist',JSON.stringify(data))
}

export function getLS(){
    //default behavior for first time user
    if(!window.localStorage.getItem('todolist')){
        let defaultToDo=createToDo('Default')
        defaultToDo=ToDoMethods(defaultToDo)
        defaultToDo.addStep('Create newToDo','Enter the title of a new ToDo and press the plus button to create new ToDo','',0)
        window.localStorage.setItem('todolist',JSON.stringify([defaultToDo]))
    }

    let ToDoList=JSON.parse(window.localStorage.getItem('todolist'))

    ToDoList.forEach((el,i)=>{
        ToDoList[i]=ToDoMethods(ToDoList[i])
        ToDoList[i].updateStepDate()
    })
    

    return ToDoList
}

