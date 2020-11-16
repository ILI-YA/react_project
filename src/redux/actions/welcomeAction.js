export const CHANGE_DIFFICULTY = 'CHANGE_DIFFICULTY'
export const CHANGE_CARD_TYPE = 'CHANGE_CARD_TYPE'

export function setDif(dif){
    return{
        type: CHANGE_DIFFICULTY,
        payload: dif
    }
}

export function setType(typ){
    return {
        type: CHANGE_CARD_TYPE,
        payload: typ
    }
 } 