import React from 'react'

import './style.css'

class AddForm extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            cont : 0,
            produto : {
                name: "",
                valueA: "",
                valueB: "",
                valueC: ""
    
            }

        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(e) {
        var c = this.state.cont
        this.setState({const: c++})
        e.preventDefault()
    }

    handleChange(e){

        const target = e.target
        const value = target.value
        const name = target.name

        var p = this.state.produto

        p[name] = value

        this.setState({produto : p})
    }

    render() {
        return (
            <div id='container'>

                <h3>Novo Produto</h3>

                <form onSubmit={this.handleSubmit}>

                    <input
                    name='name'
                    onChange={this.handleChange}
                    placeholder='Informe o nome do Produto' />

                    <input
                    name='valueA'
                    onChange={this.handleChange}
                    placeholder='Informe o preço do produto no mercado A' />

                    <input
                    name='valueB'
                    onChange={this.handleChange}
                    placeholder='Informe o preço do produto no mercado B' />

                    <input
                    name='valueC'
                    onChange={this.handleChange}
                    placeholder='Informe o preço do produto no mercado C' />

                    <input type='submit' value='Adicionar' />

                </form>
            </div>
        )
    }

}

export default AddForm