import {deleteToDo,updateToDo,getLS} from './LS.js'
import {loadStepCards} from './DOMStepCard.js'
let DOMto_do_list=document.querySelector('.to-do-list');

function editToDoCard(DOMto_do_card,ToDo){
    DOMto_do_card.querySelector('.edit-icon').addEventListener('click',(e)=>{
        e.stopPropagation()
        let ToDoIndex=[...DOMto_do_card.parentNode.children].indexOf(DOMto_do_card)
        DOMto_do_card.classList.toggle('changingtitle')
        let DOMnewtitle=document.createElement('input')
        DOMnewtitle.className='changetitle'
        DOMnewtitle.value=DOMto_do_card.querySelector('p').innerText
        DOMnewtitle.addEventListener('click',(e)=>{e.stopPropagation()})
        let DOMconfirm_btn=document.createElement('button')
        DOMconfirm_btn.className='confirm-btn'
        DOMconfirm_btn.innerText='Confirm'
        DOMconfirm_btn.addEventListener('click',(e)=>{e.stopPropagation()})
    
        DOMconfirm_btn.addEventListener('click',()=>{
            let DOMreplacetitle=document.createElement('p')
            DOMreplacetitle.innerText=DOMnewtitle.value
            ToDo.renameToDo(DOMreplacetitle.innerText)
            updateToDo(ToDoIndex,ToDo)
    
            DOMconfirm_btn.remove()
            DOMnewtitle.remove()
            DOMto_do_card.appendChild(DOMreplacetitle)
            DOMto_do_card.classList.toggle('changingtitle')
        })
    
        DOMto_do_card.appendChild(DOMnewtitle)
        DOMto_do_card.appendChild(DOMconfirm_btn)
        DOMto_do_card.querySelector('p').remove()
    })
}

function deleteToDoCard(DOMto_do_card){
    DOMto_do_card.querySelector('.delete-icon').addEventListener('click',(e)=>{
        e.stopPropagation();
        let ToDoIndex=[...DOMto_do_card.parentNode.children].indexOf(DOMto_do_card)
        DOMto_do_card.remove()
        deleteToDo(ToDoIndex)
        if(DOMto_do_card.className.includes('selected')){
            for(let i=0;i<3;i++) document.querySelectorAll('.step-cards')[i].innerHTML=''
            return
        }

    })
}

export function createToDoCard(ToDo){
    let DOMto_do_card=document.createElement('li');
    DOMto_do_card.className='to-do-card';

    DOMto_do_card.innerHTML=`
    <div>
    <span class="material-symbols-outlined edit-icon">
        edit
    </span>
    <span class="material-symbols-outlined delete-icon">
        delete
    </span>
    </div>
    <p>${ToDo.ToDoTitle}</p>
    `

    DOMto_do_card.addEventListener('click',()=>{
        if(document.querySelector('.to-do-card.selected')!==null)document.querySelector('.to-do-card.selected').classList.toggle('selected')
        DOMto_do_card.classList.toggle('selected')

        loadStepCards()
    })

    editToDoCard(DOMto_do_card,ToDo)
    deleteToDoCard(DOMto_do_card)
    return DOMto_do_card
}

export function AddToDoCard(DOMto_do_card){
    DOMto_do_list.appendChild(DOMto_do_card)
}

export function loadToDoCards(){
    DOMto_do_list.innerHTML=''

    let currToDoList=getLS()
    currToDoList.forEach((ToDo,ToDoIndex) => {
        let DOMto_do_card=createToDoCard(ToDo,ToDoIndex)
        AddToDoCard(DOMto_do_card)
    })
}

