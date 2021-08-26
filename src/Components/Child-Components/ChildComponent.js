import higherOrder from '../Higher-Order-Components/HigherOrderComponents'
function ChildComponent(props) {
    return (
        <div>
            <label className="text-danger">Please Select a Station {props.name}</label></div>
    )
}

export default higherOrder(ChildComponent);