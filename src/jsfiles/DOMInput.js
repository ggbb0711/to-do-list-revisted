import {addToDo,createToDo,getLS} from './LS'
import {createToDoCard,AddToDoCard} from './DOMToDoCard'

let DOMbtn_search=document.querySelector('.btn-search')
let DOMAddInput=document.querySelector('#addToDo')

DOMbtn_search.addEventListener('click',()=>{
    if(!DOMAddInput.value) return

    addToDo(createToDo(DOMAddInput.value))
    let currToDoList=getLS()
    DOMAddInput.value=''

    let DOMto_do_card=createToDoCard(currToDoList[currToDoList.length-1])
    AddToDoCard(DOMto_do_card)
})

