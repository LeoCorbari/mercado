import React from 'react'

import './style.css'

class List extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            item: []
        }

    }

    componentDidMount() {
        this.loadingList()
    }

    loadingList = () => {

        let list = this.state.item
        let count = localStorage.length

        for (let i = 0; i < count; i++) {
            let tmp = localStorage.getItem('item-' + i)
            tmp = JSON.parse(tmp)
            list.push(tmp)

        }

        console.log(list)

        this.setState({ item: list })

    }

    render() {
        return (
            <div className='list-item'>
                <table>
                    <tr>
                        <th>Produto</th>
                        <th>Valor Mercado A</th>
                        <th>Valor Mercado B</th>
                        <th>Valor Mercado C</th>
                    </tr>
                    {this.state.item.map(i => (
                        <tbody>
                            <tr key={i._id}>
                                <td>{i.name}</td>
                                <td>{i.valueA}</td>
                                <td>{i.valueB}</td>
                                <td>{i.valueC}</td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
        )
    }

}

export default List