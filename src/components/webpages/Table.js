import React from 'react';


class Table extends React.Component {

    

    renderRow({ id, bookTitle, author, publicationDate, genre, summary }) {
        const {display, remove, editRow} = this.props;
        
        return (
            <tr key={id}>
                <td>{id}</td>
                <td>{bookTitle}</td>
                <td>{author}</td>
                <td>{publicationDate}</td>
                <td>{genre}</td>
                <td>{summary}</td>
                <td>
                    <button style={{display: display}} onClick={editRow} value={id}>edit</button> 
                    <button onClick={remove} value={id} style={{display: display}}>remove</button>
                </td>
            </tr>
        )
    }
    render() {
        
        return (
            
            <div>

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Book Title</th>
                            <th>Author</th>
                            <th>Publication Date</th>
                            <th>Genre</th>
                            <th>Summary</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.rows.map(this.renderRow.bind(this))}

                    </tbody>

                </table>
            </div>
        );
    }
}

export default Table;