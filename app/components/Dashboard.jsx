import React from 'react';
import {Link, RouteHandler} from 'react-router';
import UserActions from 'actions/UserActions';
import UserStore from 'stores/UserStore';
import Immutable from 'immutable';

// import styles from 'scss/components/_admin';
// import 'scss/main'

import 'scss/global/plugins/font-awesome/css/font-awesome.min.css';
import 'scss/global/plugins/simple-line-icons/simple-line-icons.min.css';
import 'scss/global/plugins/bootstrap/css/bootstrap.min.css';
import 'scss/global/plugins/uniform/css/uniform.default.css';

import 'scss/global/plugins/jqvmap/jqvmap/jqvmap.css';
import 'scss/global/plugins/morris/morris.css';
import 'scss/global/css/components-md.css';
import 'scss/global/css/plugins-md.css';
import 'scss/admin/layout3/css/layout.css';
import 'scss/admin/layout3/css/themes/default.css';

import 'scss/global/plugins/jquery.min.js';
import 'scss/global/plugins/jquery-migrate.min.js';
import 'scss/global/plugins/jquery-ui/jquery-ui.min.js';
import 'scss/global/plugins/bootstrap/js/bootstrap.min.js';
import 'scss/global/plugins/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js';
import 'scss/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js';
import 'scss/global/plugins/jquery.blockui.min.js';
import 'scss/global/plugins/jquery.cokie.min.js';
import 'scss/global/plugins/uniform/jquery.uniform.min.js';
import 'scss/global/plugins/jqvmap/jqvmap/jquery.vmap.js';
import 'scss/global/plugins/jqvmap/jqvmap/maps/jquery.vmap.russia.js';
import 'scss/global/plugins/jqvmap/jqvmap/maps/jquery.vmap.world.js';
import 'scss/global/plugins/jqvmap/jqvmap/maps/jquery.vmap.europe.js';
import 'scss/global/plugins/jqvmap/jqvmap/maps/jquery.vmap.germany.js';
import 'scss/global/plugins/jqvmap/jqvmap/maps/jquery.vmap.usa.js';
import 'scss/global/plugins/jqvmap/jqvmap/data/jquery.vmap.sampledata.js';
import 'scss/global/plugins/morris/morris.min.js';
import 'scss/global/plugins/morris/raphael-min.js';
import 'scss/global/plugins/jquery.sparkline.min.js';
import 'scss/global/plugins/bootstrap-tabdrop/js/bootstrap-tabdrop.js';
import 'scss/global/scripts/metronic.js';
import 'scss/admin/layout3/scripts/layout.js';
import 'scss/admin/pages/scripts/portlet-draggable.js';

import 'scss/admin/layout3/img/avatar.png';

export default class Dashboard extends React.Component {


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
    //console.log(this.state.user);
    //console.log(this.state.user.get('email'));
    //console.log(this.state.user.get('id'));
    //console.log(this.state.user.get('profile').get('firstName'));
    let firstName = this.state.user.get('profile').get('firstName');
    let lastName = this.state.user.get('profile').get('lastName');

    var logoStyle = {
      color: '#4DB3A5'
    };

    var noTextDecoration = {
        "text-decoration": 'none'
    };

    return (
      <div>

      <div className="page-header">

        <div className="page-header-top">

            <div className="container">
        
                <div className="page-logo">
                    <h2 style={logoStyle}>
                        <Link to="/dashboard/main" style={noTextDecoration}>Parsons Problems</Link>
                    </h2>
                </div>

                <a href="javascript:;" className="menu-toggler"></a>

                <div className="top-menu">
                    
                    <ul className="nav navbar-nav pull-right">
                        
                        <li className="dropdown dropdown-user dropdown-dark">
                            <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                <img src="scss/admin/layout3/img/avatar.png" alt="" className="img-circle"/>
                                <span className="username username-hide-mobile">Vimal</span>
                            </a>

                            <ul className="dropdown-menu dropdown-menu-default">
                                <li>
                                    <Link to="/dashboard/profile">
                                        <i className="icon-user"></i> My Profile
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/">
                                        <i className="icon-key"></i> Log Out
                                    </Link>
                                </li>
                            </ul>
                        </li>

                    </ul>

                </div>

            </div>

        </div>

        <div className="page-header-menu">

            <div className="container">

                <div className="hor-menu ">

                    <ul className="nav navbar-nav">
                        <li className="active">
                            <Link to="/dashboard/main">Dashboard</Link>
                        </li>

                        <li>
                            <Link to="/dashboard/randomproblem">Random Problems</Link>
                        </li>

                        <li>
                            <Link to="/dashboard/assignments">Assignments</Link>
                        </li>

                        <li>
                            <Link to="/dashboard/createproblem">Generate Problems</Link>
                        </li>

                        <li>
                            <Link to="/dashboard/statistics">Reports</Link>
                        </li>

                        <li className="menu-dropdown classic-menu-dropdown">
                            <a href="javascript:;" data-hover="megamenu-dropdown" data-close-others="true" data-toggle="dropdown">Help <i className="fa fa-angle-down"></i></a>

                            <ul className="dropdown-menu pull-left">
                                <li>
                                    <Link to="/dashboard/faq">FAQ</Link>
                                </li>

                                <li>
                                    <Link to="/dashboard/support">Support</Link>
                                </li>

                                <li>
                                    <a href="https://github.com/kkotwal94/ParsonsProject">Github</a>
                                </li>

                                <li>
                                    <Link to="/dashboard/about">About</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

            </div>

        </div>

    </div>
     


        <div className="page-container">
          {this.props.children}
         </div>
    
    
    </div>
    
    );
  }
}
