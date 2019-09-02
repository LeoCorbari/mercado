import React from 'react'

import './style.css'

class AddForm extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            name: "",
            valueA: "",
            valueB: "",
            valueC: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        alert(this.state.value)
        console.log(this.state)
        e.preventDefault()
    }

    render() {
        return (
            <div id='container'>

                <h3>Novo Produto</h3>

                <form onSubmit={this.handleSubmit}>

                    <input
                    value={this.state.name} 
                    onChange={e => this.setState({name: e.target.value})} 
                    placeholder='Informe o nome do Produto' />

                    <input
                    value={this.state.valueA} 
                    onChange={e => this.setState({valueA: e.target.value})} 
                    placeholder='Informe o preço do produto no mercado A' />

                    <input 
                    value={this.state.valueB} 
                    onChange={e => this.setState({valueB: e.target.value})} 
                    placeholder='Informe o preço do produto no mercado B' />

                    <input
                    value={this.state.valueC} 
                    onChange={e => this.setState({valueC: e.target.value})} 
                    placeholder='Informe o preço do produto no mercado C' />

                    <input type='submit' value='Adicionar' />

                </form>
            </div>
        )
    }

}

export default AddForm