import React from 'react'

import './style.css'

class AddForm extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            produto : {
                name: "",
                valueA: "",
                valueB: "",
                valueC: ""
    
            },

        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(e) {

        let p = this.state.produto
        let key = localStorage.length
        localStorage.setItem('item-' + key, JSON.stringify(p))
        this.props.history.goBack()
        e.preventDefault()

    }

    handleChange(e){

        const target = e.target
        const value = target.value
        const name = target.name

        let p = this.state.produto

        p[name] = value

        this.setState({produto : p})
    }

    render() {
        return (
            <div id='container'>

                <form onSubmit={this.handleSubmit}>

                    <input
                    name='name'
                    className='form-input'
                    onChange={this.handleChange}
                    placeholder='Informe o nome do Produto' />

                    <input
                    name='valueA'
                    className='form-input'
                    onChange={this.handleChange}
                    placeholder='Informe o preço do produto no mercado A' />

                    <input
                    name='valueB'
                    className='form-input'
                    onChange={this.handleChange}
                    placeholder='Informe o preço do produto no mercado B' />

                    <input
                    name='valueC'
                    className='form-input'
                    onChange={this.handleChange}
                    placeholder='Informe o preço do produto no mercado C' />
                    
                    <input className='form-input-btn' type='submit' value='Adicionar' />

                </form>
            </div>
        )
    }

}

export default AddForm