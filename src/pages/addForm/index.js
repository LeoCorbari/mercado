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
                valueC: "",
                overview: 0
    
            }

        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    checkOverview = () => {
        //TO DO fazer a comparação do mais caro
    }

    handleSubmit(e) {

        let p = this.state.produto
        let key = localStorage.length
        localStorage.setItem('item-' + key, JSON.stringify(p))

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