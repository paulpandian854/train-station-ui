import { ThemeContext } from '../../context/theme-context';
import React from 'react';
import {Link }from 'react-router-dom';
class ThemedButton extends React.Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {(theme) => (
                     
                        <Link
                            to={{
                                pathname: "/Func1"
                            }}
                        > Submit </Link>
                        
                )}
            </ThemeContext.Consumer>
        )
    }
}

export default ThemedButton;
