import React from 'react';
import { connect } from 'react-redux';
import { loadInitialData } from '../action';
import Search from './searchBox';
import ListCont from './listContent'
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
    componentDidMount = async () => {
        this.props.loadInitialData()
    }
    render() {
        console.log(this.props.data.state)
        return (
            <div className="body_content">
                <Search />
                <ListCont />
            </div>
        )
    }
}


const mapStateToProps = (store) => {
    console.log(store)
    return {
        data: store.root
    }
}

export default connect(mapStateToProps, { loadInitialData })(App)