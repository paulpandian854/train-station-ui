import React from 'react';
import ChildComponent2 from '../Child-Components/ChildComponent2';
function higherOrder(WrappedComponent) {
    // And return a new anonymous component
    return class extends React.Component {
        render() {
            return (
            <div><WrappedComponent name="From Higher Order Component"/>
             <ChildComponent2/>
            </div>);
        }
    }
}

export default higherOrder;