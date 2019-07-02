import React from 'react';
import Table from './Table';
import Options from './Options';

class Items extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            option: "ID",
            rows: [],
            display: 'none'
        };

    }

    handleChange = async (e) => {
        this.setState({ option: e.target.value });
        const url = "http://localhost/reactrouter/src/components/backend.php";
        await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: "requestRender=" + e.target.value
        })
            .then(response => response.json())
            .then(data => {

                this.setState({ rows: data });


            });
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

    render() {
        
        
        return (

            <div >
                <Options handleChange={this.handleChange.bind(this)} />
                <Table rows = {this.state.rows} display={this.state.display}/>
            </div>
        );
    }
}

export default Items;