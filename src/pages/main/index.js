import React from 'react'

import Buttons from '../../components/footer/'

import './style.css'

class List extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            item: [],
            totalA: 0,
            totalB: 0,
            totalC: 0
        }

    }

    componentDidMount() {
        this.loadingList()
        this.totalCalculate()
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

    refreshState() {
        localStorage.clear()
        this.setState({
            item: [],
            totalA: 0,
            totalB: 0,
            totalC: 0,

        })

    }

    totalCalculate = () => {
        let a = 0
        let b = 0
        let c = 0

        let listItems = this.state.item

        listItems.forEach(i => {
            a += parseFloat(i.valueA)
            b += parseFloat(i.valueB)
            c += parseFloat(i.valueC)

        });

        this.setState({ totalA: a, totalB: b, totalC: c })

    }

    render() {
        return (

            <div className='list-item'>
                <table>
                    <thead>
                        <tr>
                            <th>Produto</th>
                            <th>Valor Mercado A</th>
                            <th>Valor Mercado B</th>
                            <th>Valor Mercado C</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.item.map(i => (
                            <tr key={i._id} className='line'>
                                <td>{i.name}</td>
                                <td>{i.valueA}</td>
                                <td>{i.valueB}</td>
                                <td>{i.valueC}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <th>Total</th>

                        <th className={this.state.totalA > this.state.totalB
                            && this.state.totalA > this.state.totalC ? 'expensive' : 'normal-in'}>
                            {this.state.totalA}
                        </th>

                        <th className={this.state.totalB > this.state.totalA 
                            && this.state.totalB > this.state.totalC ? 'expensive' : 'normal-in'}>
                            {this.state.totalB}
                        </th>

                        <th className={this.state.totalC > this.state.totalA
                            && this.state.totalC > this.state.totalB ? 'expensive' : 'normal-in'}>
                            {this.state.totalC}
                        </th>

                    </tfoot>
                </table>
                <Buttons onRefreshState={() => this.refreshState()}/>
            </div>
        )

    }

}

export default List