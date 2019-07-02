import React from 'react';

class Options extends React.Component {
       
    render() {
        const {handleChange} = this.props;
        return (
            <div onChange={handleChange}> 
                
                    <input type="radio" value="ID" name="Sort"  />Sorted by ID<br />
                    <input type="radio"  value="Book Title" name="Sort"  />Sorted by Name<br />
                    <input type="radio"  value="Author" name="Sort" />Sorted by Author<br />
                    <input type="radio"  value="Publication Date" name="Sort" />Sorted by Publication Date<br />
                



            </div>
        );
    }
}

export default Options;