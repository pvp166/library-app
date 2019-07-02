import React from 'react';
import Table from './Table';
import EditInput from './EditInput';
class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            option: "ID",
            rows: [],
            display: '',
            deleteID: '',
            editId: '',
            editBookTitle: '',
            editAuthor: '',
            editPublicationDate: '',
            editGenre: '',
            editSummary: '',
        };
        this.editRow = this.editRow.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount() {

        const url = "http://localhost/reactrouter/src/components/backend.php";
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: "requestRender=" + this.state.option
        })
            .then(response => response.json())
            .then(data => {

                this.setState({ rows: data });


            });
    }
    remove = (e) => {
        this.setState({ deleteID: e.target.value });
        e.preventDefault();


        const url = "http://localhost/reactrouter/src/components/backend.php";
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: "requestDelete=" + e.target.value
        })


        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: "requestRender=" + this.state.option
        })
            .then(response => response.json())
            .then(data => {

                this.setState({ rows: data });


            });

    }
    editRow(e) {
        e.preventDefault();
        const selectedRow = this.state.rows.find(row => row.id === e.target.value);
        console.log(selectedRow);

        this.setState({

            editId: selectedRow.id,
            editBookTitle: selectedRow.bookTitle,
            editAuthor: selectedRow.author,
            editPublicationDate: selectedRow.publicationDate,
            editGenre: selectedRow.genre,
            editSummary: selectedRow.summary,
        });
    }
    onChange(e) {
        e.preventDefault();
        let temp = this.state.editId;
        if(e.target.name ==="id"){
            this.setState({

                editId: temp,
                
            });
        }
        if (e.target.name === "bookTitle") {

            this.setState({

                editBookTitle: e.target.value,
                
            });

        }
        if (e.target.name === "author") {

            this.setState({

                editAuthor: e.target.value,
                
            });

        }
        if (e.target.name === "publicationDate") {

            this.setState({

                editPublicationDate: e.target.value,
                
            });

        }
        if (e.target.name === "genre") {

            this.setState({

                editGenre: e.target.value,
                
            });

        }
        if (e.target.name === "summary") {

            this.setState({

                editSummary: e.target.value,
                
            });

        }
        
    }
    onSubmit(e){
        let arrayOfRequest= ["requestID=" + this.state.editId,
        "requestBookTitle=" + this.state.editBookTitle,
        "requestAuthor=" + this.state.editAuthor,
        "requestPublicationDate=" + this.state.editPublicationDate,
        "requestGenre=" + this.state.editGenre,
        "requestSummary=" + this.state.editSummary]
        e.preventDefault();
        const url = "http://localhost/reactrouter/src/components/backend.php";
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: "requestList="+ arrayOfRequest
            

        })
    }
    render() {
        
        return (
            <div>
                <EditInput onChange={this.onChange} currentEdit={this.state.currentEdit} id={this.state.editId} bookTitle={this.state.editBookTitle} author={this.state.editAuthor} publicationDate={this.state.editPublicationDate} genre={this.state.editGenre} summary={this.state.editSummary} />
                <Table rows={this.state.rows} display={this.state.display} remove={this.remove} editRow={this.editRow} onSubmit={this.onSubmit}/>
            </div>
        )
    };
}

export default Edit;