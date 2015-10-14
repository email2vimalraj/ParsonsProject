import React from 'react';
import {Link} from 'react-router';


export default class About extends React.Component {
  render() {
    return (
      <div>
      <div className ="container-fluid">
          
            <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">
                            About <small>About this webapp</small>
                        </h1>
                        <ol className="breadcrumb">
                            <li className="active">
                                <i className="fa fa-dashboard"></i> <Link to ="/dashboard/main">Dashboard</Link>
                            </li>
                            <li>
                            
                            About
                            </li>
                        </ol>
                        <div>
                        Where about should be
                        </div>
                    </div>
                </div>
          </div>
            
        </div>

    );
  }
}
