import React from 'react';

export default class SearchBar extends React.Component {
    render() {
        const {item, handleChange} =this.props
        return (
            <div>
                <form >
                    <label>Enter something</label>
                    <input type="text"
                        value={item}
                        onChange={handleChange}
                    />
                    
                </form>
            </div>
        )
    }
}
