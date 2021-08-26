import React from 'react';
import '../LoginComponent.css';
import Api from '../../Services/Data.service';
import { connect } from "react-redux";
import startAction from '../../Redux/StartAction';
import './TrainDetailsComponents.css';
import ChildComponent from '../Child-Components/ChildComponent'


class TrainDetailsComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rotating: '',
            payload:''
        }
        this.api = new Api();
    }

    updateState = (newOwner) => {
        this.setState({ jwt: newOwner })
    }
    
    render() {
        this.api.getStations(this.updateState, this.props.rotating);
        return (
        <div className="container h-80">
        <div className="row align-items-center h-100">
          <div className="col-3 mx-auto">
            <div className="text-center">
      
              <img id="profile-img" alt="tssd"className="rounded-circle profile-img-card" src="https://i.imgur.com/6b6psnA.png" />
              <p id="profile-name" className="profile-name-card"></p>
              <ChildComponent/>
              {this.props.children}
            </div>
          </div>
        </div>
        </div>)
    }
}

const mapStateToProps = (state) => ({
   ...state
})

const mapDispatchToProps = dispatch => ({
    startAction: (payload) => dispatch(startAction(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrainDetailsComponent);