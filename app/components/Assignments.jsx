import React from 'react';
import {Link} from 'react-router';
import UserActions from 'actions/UserActions';
import UserStore from 'stores/UserStore';
import Immutable from 'immutable';
import AssignmentsActions from 'actions/AssignmentsActions';
import AssignmentsStore from 'stores/AssignmentsStore';
import CreateAssignments from './CreateAssignments';

export default class Assignments extends React.Component {
    constructor(props) {
    super(props);
    this.state = AssignmentsStore.getState();
  }

  componentDidMount() {
    AssignmentsActions.getAllAssignments();
    UserStore.listen(this._onChange);
    AssignmentsStore.listen(this._onChange);
  }

  componentWillUnmount() {
    UserStore.unlisten(this._onChange);
    AssignmentsStore.unlisten(this._onChange);
  }

  _onChange = () => {
    this.setState({
      user: UserStore.getState().user,
      allAssignments: AssignmentsStore.getState().allAssignments
    });
  }


  render() {
    let allAssignments = this.state.allAssignments;
    // console.log(allAssignments);
    return (
      <div>
      <div className="page-head">
            <div className="container">
                
                <div className="page-title">
                    <h1>Assignments <small>List of assignments</small></h1>
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
                         Assignments
                    </li>
                </ul>
                
                <div className="row margin-top-10">
                    <div className="col-md-12 col-sm-12">
                        
                        <div className="portlet light">
                            <div className="portlet-title">
                                <div className="caption caption-md">
                                    <i className="fa fa-cogs font-green-sharp"></i>
                                    <span className="caption-subject font-green-sharp bold uppercase">Assignments</span>
                                </div>
                            </div>

                            <div className="portlet-body">
                                <h3>Assignments</h3>

                                <div className="tabbable-line">
                                    <ul className="nav nav-tabs">
                                        <li className="active">
                                            <a href="#tab_1" data-toggle="tab">Assignments List</a>
                                        </li>

                                        <li>
                                            <a href="#tab_2" data-toggle="tab">Create Assignments</a>
                                        </li>

                                        <li>
                                            <a href="#tab_3" data-toggle="tab">Edit / Set Assignments</a>
                                        </li>
                                    </ul>

                                    <div className="tab-content">
                                        <div className="tab-pane active" id="tab_1">
                                            <p>Below you will find a listing of your current assignments.</p>

                                            <div className="table-scrollable">
                                                <table className="table table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th>Title</th>
                                                            <th>Description</th>
                                                            <th>Score</th>
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        <tr>
                                                            <td>Poopymcboogerbutt</td>
                                                            <td>Its a poopy assignment</td>
                                                            <td>20</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Poopymcboogerbutt</td>
                                                            <td>Its a poopy assignment</td>
                                                            <td>20</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Poopymcboogerbutt</td>
                                                            <td>Its a poopy assignment</td>
                                                            <td>20</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <div className="tab-pane" id="tab_2">
                                            <p>Create the assignments</p>

                                            <div className="form">
                                                <form action="" role="form">
                                                    <div className="form-body">
                                                        <div className="form-group form-md-line-input">
                                                            <input type="text" className="form-control" id="assignment_name" placeholder="Assignment Name"/>
                                                            <span className="help-block">Enter Assignment name</span>
                                                        </div>

                                                        <div className="form-group form-md-line-input">
                                                            <textarea className="form-control" rows="3" id="assignment_desc" placeholder="Assignment Description"></textarea>
                                                            <span className="help-block">Enter Assignment Description</span>
                                                        </div>
                                                    </div>

                                                    <div className="form-actions noborder">
                                                        <button type="button" className="btn blue">Submit</button>
                                                        <button type="button" className="btn default">Cancel</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                        <div className="tab-pane" id="tab_3">
                                            <p>Edit / Set Assignments</p>
                                        </div>
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
