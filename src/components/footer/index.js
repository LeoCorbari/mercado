import React from 'react'

import { Link } from 'react-router-dom'

import './style.css'


class Buttons extends React.Component {

    clearStorage = (e) => {
        localStorage.clear()

    }

    render() {
        return(
            <div className='buttons-footer'>
                <Link to='/AddForm/'>
                    <input className='footer-input' type='submit' value='Adicionar Produto' />
                </Link>
                <input className='footer-input' type='submit' value='Limpar Tabela'
                    onClick={this.clearStorage} />
            </div>
        )
    }
}


export default Buttons