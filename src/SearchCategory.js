import React from 'react';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';


export default class SearchCategory extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: 'female',
        };

    }
    handleChange = event => {
        console.log('value is :',event.target.value)
        console.log('*************props is : ',this.props)
        this.props.actions.changeCategory(event.target.value)
        // this.setState({ value: event.target.value });
    };
    render(){

        return(
            <div>
                <Grid item xs={12}>
                    <FormControl>
                        <RadioGroup
                            row
                            aria-label="Gender"
                            name="gender1"
                            value={this.props.category}
                            onChange={this.handleChange}
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </div>
        )
    }
}