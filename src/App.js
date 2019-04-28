import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import SearchCategory from './SearchCategory';
import AddressSearch from './AddressSearch';

import {changeCategory} from './action';

import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {actions,category}=this.props;
        console.log("******props are : ", this.props)
        let search;
        if(category =='female'){
            search =<AddressSearch category={category}/>
        }else{
            search = <h1>Search for male</h1>
        }
        return (
            <div className="App">
                <SearchCategory actions={actions} category={category}/>
                {search}
            </div>
        );
    }

}

function mapStateToProps(state) {
    return{category:state.category}

}

function mapDispatchToProps(dispatch){
    return{
        actions:bindActionCreators({changeCategory:changeCategory},dispatch)
    }
}

export default App = connect(mapStateToProps,mapDispatchToProps)(App);
