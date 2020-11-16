import { CHANGE_DIFFICULTY, CHANGE_CARD_TYPE } from '../actions/welcomeAction'

const initial = {
    difficulty: '',
    cardType: ''
}

export default function rootReducer (state = initial, action) {
    switch (action.type) {
        case CHANGE_DIFFICULTY:
            return {
                ...state, 
                difficulty: action.payload
            }

        case CHANGE_CARD_TYPE:
            return {
                ...state, 
                cardType: action.payload
            }
    }
    return state
}
