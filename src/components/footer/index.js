import React from 'react'

import { Link } from 'react-router-dom'

import './style.css'


class Buttons extends React.Component {

    constructor(props){
        super(props)

        this.refreshState = props.onRefreshState
    }

    render() {
        return(
            <div className='buttons-footer'>
                <Link to='/AddForm/'>
                    <input className='footer-input' type='submit' value='Adicionar Produto' />
                </Link>
                <input className='footer-input' type='submit' value='Limpar Tabela'
                    onClick={() => this.refreshState()} />
            </div>
        )
    }
}


export default Buttons