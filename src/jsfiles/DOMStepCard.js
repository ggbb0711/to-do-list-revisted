import { getLS,updateToDo } from "./LS";

let DOMStep_cards=document.querySelectorAll('.step-cards')

function getCurrToDo(){
    let DOMSelectedToDoCard=document.querySelector('.to-do-card.selected')
    let selectedToDoCardIndex=[...DOMSelectedToDoCard.parentNode.children].indexOf(DOMSelectedToDoCard)
    let currToDoList=getLS()
    let currToDo=currToDoList[selectedToDoCardIndex]

    return currToDo
}

function updateCurrToDo(changedToDo){
    let DOMSelectedToDoCard=document.querySelector('.to-do-card.selected')
    let selectedToDoCardIndex=[...DOMSelectedToDoCard.parentNode.children].indexOf(DOMSelectedToDoCard)

    updateToDo(selectedToDoCardIndex,changedToDo)
}

function DOMStepEditBtn(DOMStep,step){
    DOMStep.querySelector('.edit-icon').addEventListener('click',()=>{
        DOMStep.classList.toggle('changing')
        let newDOMStepTitle=document.createElement('input')
        newDOMStepTitle.className='changetitle'
        newDOMStepTitle.value=DOMStep.querySelector('h3').innerText
        DOMStep.querySelector('.step-card-title-icons').replaceChild(newDOMStepTitle,DOMStep.querySelector('h3'))

        DOMStep.querySelector('.step-card-content').innerHTML=
        `
        <label class="stepDesc">Desc: <textarea>${step.stepDesc}</textarea>
        </label>
        <label>
            Deadline:
            <input type="date" value="${(step.stepDate==='none')?'':step.stepDate}">
        </label>
        <p class="warning">
            Please enter the title and description of your todo
        </p>
        `
    })
}

function DOMStepConfirmBtn(stepPriority,DOMStep){
    DOMStep.querySelector('.confirm-btn').addEventListener('click',()=>{
        let stepIndex=[...DOMStep.parentNode.children].indexOf(DOMStep)
        let DOMChangingTitle=DOMStep.querySelector('.changetitle')
        let DOMChangingStepDesc=DOMStep.querySelector('textarea')
        let DOMChangingStepDate=DOMStep.querySelector('input[type="date"]')


        if(!(DOMChangingTitle.value&&DOMChangingStepDesc.value)){ 
            DOMStep.querySelector('.warning').style.display='block'
            return
        }

        let currToDo=getCurrToDo()
        currToDo.reWriteStep(stepPriority,stepIndex,DOMChangingTitle.value,DOMChangingStepDesc.value,DOMChangingStepDate.value)
        let step=currToDo.Steps[stepPriority][stepIndex]
        updateCurrToDo(currToDo)

        let DOMChangedTitle=document.createElement('h3')
        DOMChangedTitle.innerText=DOMChangingTitle.value
        DOMStep.querySelector('.step-card-title-icons').replaceChild(DOMChangedTitle,DOMChangingTitle)

        DOMStep.querySelector('.step-card-content').innerHTML=
        `
        <div class="step-card-content">
        <div class="stepDesc">
        <p class="stepDesc">Desc: ${step.stepDesc}
        </p>
        </div>
        <p>
            Deadline:
            ${step.stepDate}
        </p>
        <p>Days left: ${(step.daysLeft>-1||step.daysLeft==='none')?step.daysLeft:`you are late ${-step.daysLeft} days :(`}</p>
        </div>
        `

        DOMStep.classList.toggle('changing')
        loadStepCardPriority(stepPriority)
    })
}

function DOMStepCancelBtn(DOMStep,step){
    DOMStep.querySelector('.cancel-btn').addEventListener('click',()=>{
        DOMStep.classList.toggle('changing')
        let DOMChangingTitle=DOMStep.querySelector('.changetitle')
        let DOMChangedTitle=document.createElement('h3')
        DOMChangedTitle.innerText=step.stepTitle
        DOMStep.querySelector('.step-card-title-icons').replaceChild(DOMChangedTitle,DOMChangingTitle)

        DOMStep.querySelector('.step-card-content').innerHTML=
        `
        <div  class="stepDesc">
        <p>Desc: ${step.stepDesc}
        </p>
        </div>
        <p>
            Deadline:
            ${step.stepDate}
        </p>
        <p>Days left: ${(step.daysLeft>-1||step.daysLeft==='none')?step.daysLeft:`you are late ${-step.daysLeft} days :(`}</p>
        `
    })
}

function DOMDoneBtn(stepPriority,DOMStep){
    DOMStep.querySelector('.done-icon').addEventListener('click',()=>{
        let stepIndex=[...DOMStep.parentNode.children].indexOf(DOMStep)
        DOMStep.classList.toggle('completed')

        let currToDo=getCurrToDo()
        currToDo.completeStep(stepPriority,stepIndex)
        updateCurrToDo(currToDo)
        loadStepCardPriority(stepPriority)
    })
}

function DOMDeleteBtn(stepPriority,DOMStep){
    DOMStep.querySelector('.delete-icon').addEventListener('click',()=>{
        let stepIndex=[...DOMStep.parentNode.children].indexOf(DOMStep)
        let currToDo=getCurrToDo()
        currToDo.deleteStep(stepPriority,stepIndex)

        updateCurrToDo(currToDo)
        loadStepCardPriority(stepPriority)
    })
}

function createNewDOMStep(stepPriority,step){
    let DOMStep=document.createElement('li')
    DOMStep.className=`step-card ${(step.completed)?'completed':''}`
    DOMStep.innerHTML=
    `
    <div class="step-card-title-icons">
        <h3>${step.stepTitle}</h3>
        <div>
            <span class="material-symbols-outlined edit-icon">
                edit
            </span>
            <span class="material-symbols-outlined done-icon">
                done
            </span>
            <span class="material-symbols-outlined delete-icon">
                delete
            </span>
        </div>
    </div>
    
    <div class="step-card-content">
    <div  class="stepDesc">
    <p>Desc: ${step.stepDesc}
    </p>
    </div>
    <p>
        Deadline:
        ${step.stepDate}
    </p>
    <p>Days left: ${(step.daysLeft>-1||step.daysLeft==='none')?step.daysLeft:`you are late ${-step.daysLeft} days :(`}</p>
    </div>


    <div class="step-card-btn">
    <button class="confirm-btn">
    Confirm
    </button>
    <button class="cancel-btn">
    Cancel
    </button>
    </div>
    `

    DOMStepEditBtn(DOMStep,step)
    DOMStepConfirmBtn(stepPriority,DOMStep)
    DOMStepCancelBtn(DOMStep,step)
    DOMDoneBtn(stepPriority,DOMStep)
    DOMDeleteBtn(stepPriority,DOMStep)

    return DOMStep
}

function ConfirmAddStepCard(stepPriority,DOMAddStepCard){
    DOMAddStepCard.querySelector('.confirm-btn').addEventListener('click',()=>{
        let DOMChangingTitle=DOMAddStepCard.querySelector('.changetitle')
        let DOMChangingStepDesc=DOMAddStepCard.querySelector('textarea')
        let DOMChangingStepDate=DOMAddStepCard.querySelector('input[type="date"]')

        if(!(DOMChangingTitle.value&&DOMChangingStepDesc.value)){ 
            DOMAddStepCard.querySelector('.warning').style.display='block'
            return
        }

        let currToDo=getCurrToDo()
        currToDo.addStep(DOMChangingTitle.value,DOMChangingStepDesc.value,DOMChangingStepDate.value,stepPriority)
        updateCurrToDo(currToDo)
        loadStepCardPriority(stepPriority)
    })
}

function CancelAddStepCard(stepPriority,DOMAddStepCard){
    DOMAddStepCard.querySelector('.cancel-btn').addEventListener('click',()=>{
        DOMAddStepCard.innerHTML=
        `
        <span class="material-symbols-outlined add-icon">
        add
        </span>
        <p>Add new step</p>
        `

        AddStepCard(stepPriority,DOMAddStepCard)
    })
}

function AddStepCard(stepPriority,DOMAddStepCard){
    DOMAddStepCard.querySelector('.add-icon').addEventListener('click',()=>{
        DOMAddStepCard.classList.toggle('changing')
        DOMAddStepCard.innerHTML=`
        <div class="step-card-title-icons">
        <input class="changetitle">
        </div>
        <div class="step-card-content">
        <label class="stepDesc">Desc: <textarea></textarea>
        </label>
        <label>
            Deadline:
            <input type="date" value="">
        </label>
        <p class="warning">
            Please enter the title and description of your todo
        </p>
        </div>


        <div class="step-card-btn">
        <button class="confirm-btn">
        Confirm
        </button>
        <button class="cancel-btn">
        Cancel
        </button>
        </div>
        `

        ConfirmAddStepCard(stepPriority,DOMAddStepCard)
        CancelAddStepCard(stepPriority,DOMAddStepCard)
    })
}

function loadDOMAddStepCard(stepPriority){
    let DOMAddStepCard=document.createElement('li')
    DOMAddStepCard.className='step-card new-card'
    DOMAddStepCard.innerHTML=
    `
    <span class="material-symbols-outlined add-icon">
    add
    </span>
    <p>Add new step</p>
    `

    AddStepCard(stepPriority,DOMAddStepCard)
    return DOMAddStepCard
}

function loadStepCardPriority(stepPriority){
    let currToDo=getCurrToDo()

    DOMStep_cards[stepPriority].innerHTML=''
    currToDo.Steps[stepPriority].forEach((step,stepIndex) => {
        let DOMStep=createNewDOMStep(stepPriority,step)

        DOMStep_cards[stepPriority].appendChild(DOMStep)
    })
    let DOMAddStepCard=loadDOMAddStepCard(stepPriority)

    DOMStep_cards[stepPriority].appendChild(DOMAddStepCard)
}

export function loadStepCards(){

    for(let i=0;i<3;i++){
        loadStepCardPriority(i)
    }
}
