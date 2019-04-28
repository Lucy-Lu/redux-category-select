import React from 'react';
import AsyncSelect from 'react-select/lib/Async';
import { colourOptions } from './docs/data';

const filterColors = (inputValue) => {
    return colourOptions.filter(i =>
        i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
};

const promiseOptions = inputValue =>
    new Promise(resolve => {
        setTimeout(() => {
            resolve(filterColors(inputValue));
        }, 1000);
    });

export default class AddressSearch extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <AsyncSelect cacheOptions defaultOptions loadOptions={promiseOptions} />
        )
    }
}