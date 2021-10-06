import React, {Component} from "react";

class Table extends Component{
    render(){

        const {mya} = this.props; //prop definition.

        return(
            <table>
                <TableHeader hehe = {mya}/>
                <TableBody lala = {mya} />
            </table>
        );
    }
}

const TableHeader = (props) => {
    return(
        <thead>
            <tr>
                <th>{props.hehe.headerCustom[0]}</th>
                <th>{props.hehe.headerCustom[1]}</th>
            </tr>
        </thead>
    );
}

const TableBody = (props) => {
    const rows = props.lala.characters.map((row, index) => {
        return (
            <tr key = {index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
            </tr>
        )
    });

    return <tbody>{rows}</tbody>
    
}

export default Table;