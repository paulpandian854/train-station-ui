import React from 'react';
import './LoginComponent.css';
import Api from '../Services/Data.service';
import { connect } from "react-redux";
import startAction from '../Redux/StartAction';
import { withRouter } from 'react-router-dom';
import { ThemeContext } from '../context/theme-context';

class LoginComponent extends React.Component {
    static getDerivedStateFromProps(props, state) {
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        return true;
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        return true;
    }

    componentWillUnmount() {
        return true;
    }

    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            jwt: ''
        }
        this.api = new Api();
    }

    updateState = (newOwner) => {
        this.setState({ jwt: newOwner })
        this.props.startAction(this.state.jwt);
        this.props.history.push({
            pathname: `/TrainDetails`
        });

    }

    onChangeUserName(event) {
        this.setState({
            userName: event.target.value
        })
    }

    onSubmit() {
        this.api.serviceCall(this.updateState, this.state.userName);
    }


    render() {
        return (
            <ThemeContext.Provider value="dark">
                <div data-testid="login-1" className="container-fluid">
                    <div className="row main-content bg-success text-center">
                        <div className="col-md-4 text-center company__info">
                            <span className="company__logo">
                                <h2><span className="fa fa-android"></span></h2>
                            </span>
                            <h4 className="company_title">Central Railway System</h4>
                        </div>
                        <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
                            <div className="container-fluid">
                                <div className="row">
                                    <form control="" className="form-group">
                                        <div className="row">
                                            <input type="text" name="username" id="username" className="form__input" placeholder="Username" onChange={(event) => this.onChangeUserName(event)} />
                                        </div>
                                        <div className="row">
                                            <input type="button" value="Submit" name="submit" className="btn" onClick={() => this.onSubmit()} />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ThemeContext.Provider>
        );
    }
}
const mapStateToProps = state => ({
    //...state
});

const mapDispatchToProps = dispatch => ({
    startAction: (payload) => dispatch(startAction(payload))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginComponent));
