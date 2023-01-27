import {loadStepCards} from './DOMStepCard'
import {loadToDoCards} from './DOMToDoCard'

loadToDoCards()
if(document.querySelector('.to-do-card')){
    document.querySelector('.to-do-card').classList.add('selected')
    loadStepCards()
}
