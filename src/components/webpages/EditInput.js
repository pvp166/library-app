import React from 'react';

class EditInput extends React.Component {
    render() {
        const { onChange, id, bookTitle, author, publicationDate, genre, summary, onSubmit } = this.props;
        return (
            <div>
                <form onSubmit={onSubmit}>
                    <label>ID:</label>
                    <input type="text"  value={id} onChange={onChange}  name="id"></input>
                    <label>Book Title:</label>
                    <input type="text"  name= "bookTitle" value={bookTitle} onChange={onChange}></input>
                    <label>Author:</label>
                    <input type="text" name= "author" value={author} onChange={onChange}></input>
                    <label>Publication Date:</label>
                    <input type="text" name= "publicationDate" value={publicationDate} onChange={onChange}></input>
                    <label>Genre:</label>
                    <input type="text" name= "genre" value={genre} onChange={onChange}></input>
                    <label>Summary:</label>
                    <input type="text" name= "summary" value={summary} onChange={onChange}></input>
                    <button type="submit" className="btn btn-primary" onClick={onSubmit} >Edit</button>
                </form>
            </div>
        )
    }
}
export default  EditInput;