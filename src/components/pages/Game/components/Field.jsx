import React from 'react'
import { connect } from 'react-redux'
import Card1 from '../../../common/Card1'
import Card2 from '../../../common/Card2'
import Card3 from '../../../common/Card3'

import { valueOfCards } from './ValueOfCards'


class Field extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            field: this.generateFields(Number(this.props.difficulty)),
            cardType: this.props.cardType
        }
    }
    
    
   
    generateFields(difficulty) {
        let valueOfCard = valueOfCards;
        let numberOfFields = difficulty * difficulty
        let cardsValues = []
        let j = 0
    
        for(let i=0; i < numberOfFields; i=i+2) {
            let card = valueOfCard[j]
            cardsValues.push(card, card)
    
            if(j === valueOfCard.length - 1){
                j = 0
            } else {
                j++
            }
        }
       
        const _ = require('lodash')
        cardsValues = _.shuffle(cardsValues)
    
        let k = 0
        let fields = []
        for (let i = 0; i < difficulty; i++) {
            fields[i] = []
            for (let j = 0; j < difficulty; j++) {
                fields[i].push({
                    value: cardsValues[k],
                    flipped: 'false',
                    matched: 'false'
                })
                k++
            }
        }
        return fields
    }
    
    

    render(){
        if (this.state.cardType === 'card1') {
            return(
                <div className='cards'>{this.state.field.map((row, rowIndex) => row.map((col, colIndex) => 
                <Card1 
                row={rowIndex} 
                col={colIndex} 
                value={this.state.field[rowIndex][colIndex].value}
                flipped={this.state.field[rowIndex][colIndex].flipped}
                matched={this.state.field[rowIndex][colIndex].matched}
                />
                ))}
                </div>   
            )
        } else if (this.state.cardType === 'card2') {
            return(
                <div className='cards'>{this.state.field.map((row, rowIndex) => row.map((col, colIndex) => 
                <Card2 
                row={rowIndex} 
                col={colIndex} 
                value={this.state.field[rowIndex][colIndex].value}
                flipped={this.state.field[rowIndex][colIndex].flipped}
                matched={this.state.field[rowIndex][colIndex].matched}
                />
                ))}
                </div>   
            )
        } 
        return(
            <div className='cards'>{this.state.field.map((row, rowIndex) => row.map((col, colIndex) => 
            <Card3 
            row={rowIndex} 
            col={colIndex} 
            value={this.state.field[rowIndex][colIndex].value}
            flipped={this.state.field[rowIndex][colIndex].flipped}
            matched={this.state.field[rowIndex][colIndex].matched}
            />
            ))}
            </div>   
        )
        
    }
}



const mapStateToProps = (state) => ({
   difficulty: state.difficulty,
   cardType: state.cardType
})

export default connect(mapStateToProps)(Field)