import React from 'react';
import {Link} from 'react-router';
import UserActions from 'actions/UserActions';
import UserStore from 'stores/UserStore';
import ParsonsStore from 'stores/ParsonsStore';
import ParsonsActions from 'actions/ParsonsActions';
import Immutable from 'immutable';

export default class CreateProblem extends React.Component {
    constructor(props) {
    super(props);
    this.state = UserStore.getState();
    this.states = ParsonsStore.getState();
    this.state.count = 2;
  }

  componentDidMount() {
    //ParsonsActions.getAllProblems();
    ParsonsStore.listen(this._onChange);
    UserStore.listen(this._onChange);
  }

  componentWillUnmount() {
    ParsonsStore.unlisten(this._onChange);
    UserStore.unlisten(this._onChange);
  }

  _onChange = () => {
    this.setState({
      user: UserStore.getState().user,
      parsons: ParsonsStore.getState().parsons,
      allProblems: ParsonsStore.getState().allProblems,
      count: 0
    });
  }

  _onSubmit = () => {
    let count = this.state.count;
    let codeArray = [];
    for(let i = 1; i < count; i++) {
      //console.log(i);
      let refName = "code-" + i;
      //console.log(document.getElementById(refName).value);
      codeArray[i-1] = document.getElementById(refName).value;
    }
    const id = this.state.user.get('id');
    const title = React.findDOMNode(this.refs.title).value;
    const description = React.findDOMNode(this.refs.description).value;
    const codelines = codeArray;

    ParsonsActions.createProblem({
      id: id,
      title: title,
      description: description,
      codelines: codelines
    });

    //console.log(codeArray);
    //console.log(this.state.count);
    //console.log('reached OnSubmit');


  }

  _onPlus = () => {
            //let container = document.getElementById("containeradd");
            let inputLine = document.getElementById("inputline");
            // Clear previous contents of the container
            // Create an <input> element, set its type and name attributes
            let input = document.createElement("input");
            let count = this.state.count;
            input.placeholder = "Code Line #" + count;
            input.type = "text";
            input.className = "form-control";
            input.ref = "code-" + count;
            input.id = "code-" + count;
            inputLine.appendChild(document.createElement("br"));
            inputLine.appendChild(input);
            // Append a line break
            count = count + 1; 
            this.setState({
              count: count
            })

            /*let button = document.createElement("button");
            button.className = "btn btn-danger";
            button.innerHTML = "Submit Code!";
            */
           
              
            
        }

  render() {
    //console.log(this.state.count);
    //console.log(this.state.parsons);
    console.log(this.states.allProblems);
    var border1 = {
        "border": "1px solid #efefff"
    };

    var border2 = {
        "border": "1px solid #efefff",
        "background-color": "#FFA"
    };

    var boxShadow1 = {
        "box-shadow": "0px 0px 0px 0px rgba(0, 0, 0, 0)"
    };

    return (
<div>
        <div className="page-head">
            
            <div className="container">
                
                <div className="page-title">
                    <h1>Your First Parsons Problem</h1>
                </div>

            </div>

        </div>

        <div className="page-content">
            
            <div className="container">

                <ul className="page-breadcrumb breadcrumb">
                    <li>
                        <Link to="#">Home</Link><i className="fa fa-circle"></i>
                    </li>
                    <li className="active">
                         Random Problems
                    </li>
                </ul>
                
                <div className="modal fade" id="portlet-config" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true"></button>
                                <h4 className="modal-title">Modal title</h4>
                            </div>
                            <div className="modal-body">
                                 Widget settings form goes here
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn blue">Save changes</button>
                                <button type="button" className="btn default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="portlet light">
                    <div className="portlet-body">
                        <div className="row note note-success note-bordered">
                            <div className="col-md-12">
                                <p>
                                    <b>Your task</b>: Construct a <i>Python</i> program that prints strings "Hello", "Parsons", and "Problems" on their own lines. You can get feedback on your current solution with the feedback button. You should construct your program by dragging and dropping the lines to the solution area on the right.
                                </p>
                            </div>
                        </div>

                        <div className="row" id="sortable_portlets">
                            <div className="col-md-5 column sortable" style={border1}>
                                <div className="portlet portlet-sortable" style={boxShadow1}></div>

                                <div className="portlet portlet-sortable box blue-hoki">
                                    <div className="portlet-title">
                                        <div className="caption">
                                            print 'Hello'
                                        </div>
                                    </div>
                                </div>

                                <div className="portlet portlet-sortable box blue-hoki">
                                    <div className="portlet-title">
                                        <div className="caption">
                                            print 'Problems'
                                        </div>
                                    </div>
                                </div>

                                <div className="portlet portlet-sortable box blue-hoki">
                                    <div className="portlet-title">
                                        <div className="caption">
                                            print 'Parsons'
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-5 column sortable" style={border2}>
                                <div className="portlet portlet-sortable" style={boxShadow1}></div>
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
