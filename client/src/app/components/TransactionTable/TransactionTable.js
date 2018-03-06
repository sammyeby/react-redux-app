import React from 'react';
import './transactionTable.scss';

export default class TransactionTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.tableData || (this.props.tableData && !this.props.tableData.length)) {
            return null;
        }

        return (
            <div className="transaction-table">
                <table>
                    <tbody>
                    <tr>
                        <th>No.</th>
                        <th>Id</th>
                        <th>Type</th>
                        <th>Date</th>
                        <th>Amount</th>
                    </tr>
                    {this.props.tableData.map((data, index) => {
                        return <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{data.id}</td>
                            <td>{data.type}</td>
                            <td>{data.date}</td>
                            <td>
                                <span className={`${data.type === 'deposit' ? 'green' : 'red'}`}>
                                    {`${data.type === 'deposit' ? '+ ' : '- '}`}{data.amount}
                                </span>
                            </td>
                        </tr>
                    })}
                    </tbody>
                </table>
            </div>
        );
    }
}