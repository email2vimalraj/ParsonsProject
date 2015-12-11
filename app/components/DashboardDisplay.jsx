import React from 'react';
import {Link} from 'react-router';
import UserActions from 'actions/UserActions';
import UserStore from 'stores/UserStore';
import Immutable from 'immutable';

export default class DashboardDisplay extends React.Component {
    constructor(props) {
    super(props);
    this.state = UserStore.getState();
  }

  componentDidMount() {
    UserStore.listen(this._onChange);
  }

  componentWillUnmount() {
    UserStore.unlisten(this._onChange);
  }

  _onChange = () => {
    this.setState({
      user: UserStore.getState().user
    });
  }


  render() {
    var logoStyle = {
      color: '#4DB3A5'
    };

    var noTextDecoration = {
        "text-decoration": 'none'
    };

    return (
      <div>
      
        <div className="page-head">
            <div className="container">
                
                
                <div className="page-title">
                    <h1>Dashboard <small>Statistics &amp; reports</small></h1>
                </div>
                

            </div>
        </div>
        

        
        <div className="page-content">
            <div className="container">
                
                
                <ul className="page-breadcrumb breadcrumb">
                    <li>
                        <Link to="/dashboard/main">Home</Link><i className="fa fa-circle"></i>
                    </li>
                    <li className="active">
                         Dashboard
                    </li>
                </ul>
                
                
                
                <div className="row margin-top-10">
                    <div className="col-md-6 col-sm-12">
                        
                        
                        <div className="portlet light">
                            <div className="portlet-title">
                                <div className="caption caption-md">
                                    <i className="icon-bar-chart theme-font hide"></i>
                                    <span className="caption-subject theme-font bold uppercase">Problems Summary</span>
                                    <span className="caption-helper hide">Weekly stats...</span>
                                </div>

                                <div className="actions">
                                    <div className="btn-group btn-group-devided" data-toggle="buttons">
                                        <label for="" className="btn btn-transparent grey-salsa btn-circle btn-sm active">
                                            <input type="radio" className="toggle" id="option1" name="options"/>Today
                                        </label>

                                        <label for="" className="btn btn-transparent grey-salsa btn-circle btn-sm">
                                            <input type="radio" className="toggle" id="option2" name="options"/>Week
                                        </label>

                                        <label for="" className="btn btn-transparent grey-salsa btn-circle btn-sm">
                                            <input type="radio" className="toggle" id="option3" name="options"/>Month
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="portlet-body">
                                <div className="row list-sepearted">

                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                        <span>Stat chart goes here</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                        

                    </div>

                    <div className="col-md-6 col-sm-12">
                        
                        
                        <div className="portlet light">
                            <div className="portlet-title">
                                <div className="caption caption-md">
                                    <i className="icon-bar-chart theme-font hide"></i>
                                    <span className="caption-subject theme-font bold uppercase">Participation Activity</span>
                                    <span className="caption-helper hide">Weekly stats...</span>
                                </div>

                                <div className="actions">
                                    <div className="btn-group btn-group-devided" data-toggle="buttons">
                                        <label for="" className="btn btn-transparent grey-salsa btn-circle btn-sm active">
                                            <input type="radio" className="toggle" id="option1" name="options"/>Today
                                        </label>

                                        <label for="" className="btn btn-transparent grey-salsa btn-circle btn-sm">
                                            <input type="radio" className="toggle" id="option2" name="options"/>Week
                                        </label>

                                        <label for="" className="btn btn-transparent grey-salsa btn-circle btn-sm">
                                            <input type="radio" className="toggle" id="option3" name="options"/>Month
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="portlet-body">
                                <div className="row list-sepearted">

                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                        <span>Stat chart goes here</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                        

                    </div>
                </div>
                
            </div>
        </div>
        
            
        </div>
    );
  }
}
