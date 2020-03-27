import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { searchCont } from '../action';

class Search extends React.Component {
SearchContent = (e)=>{
this.props.searchCont(e.target.value)
}
    render() {

        return (
            <div>
                <div>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1"> <i className="fa fa-search" aria-hidden="true"></i></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            onChange={(e)=>this.SearchContent(e)}
                            placeholder=" Search Title "
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </div>
            </div>
        )
    }
}


export default connect(null, { searchCont })(Search);