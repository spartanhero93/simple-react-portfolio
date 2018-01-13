import React from 'react';
import ScreenRow from './screen-row';
import PropTypes from 'prop-types';

const Screen = (props) => {
    return(
        <div className='screen'>
            <ScreenRow value={props.problem}/>
            <ScreenRow value={props.answer}/>
        </div>
    )
};

ScreenRow.propTypes = {
    value: PropTypes.string.isRequired
};

export default Screen;