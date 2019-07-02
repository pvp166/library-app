import React from 'react';
import SearchBar from './SearchBar';
import Table from './Table';


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            option: "ID",
            rows: [],
            display: 'none',
            item: ''
        };
        
    }
    componentDidMount() {
        if(this.props.match.params.term != null){
            this.setState({
                item: this.props.match.params.term
            })
        }
        
        const url = "http://localhost/reactrouter/src/components/backend.php";
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: "requestSearch=" + this.props.match.params.term
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({ rows: data });


            });
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            item: e.target.value
        });
        const url = "http://localhost/reactrouter/src/components/backend.php";
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: "requestSearch=" + e.target.value
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({ rows: data });


            });
    };
    
    render() {

        return (


            <div>
                <SearchBar handleChange={this.handleChange} item={this.state.item} rows = {this.state.rows}/>
                <Table rows = {this.state.rows} display={this.state.display} />
            </div>


        );
    }

};
export default Search;