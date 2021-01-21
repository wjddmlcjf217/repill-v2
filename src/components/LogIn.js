import React from 'react';
import logo from './Logo.png'
import { Link } from 'react-router-dom';

const LogIn = ({ prescription_status, onPrescriptionOrder }) =>{
    console.log("status at login:", prescription_status)

    return (
        <div className="ui middle aligned center aligned grid">             
            <div className="column">
                <h2 className="ui blue image header">
                    <div className="content">
                    <img alt="N/A" style={{paddingTop:"25px", width:"250", height:"250px"}}className="logo" src={logo} />
                        Welcome to RePill
                    </div>
                </h2>
                <form className="ui large form">
                    <div className="ui stacked segment">
                        <div className="field">
                            <div className="ui left icon input">
                                <i className="user icon"></i>
                                <input type="text" name="email" placeholder="E-mail Address"/>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui left icon input">
                                <i className="lock icon"></i>
                                <input type="password" name="password" placeholder="Password"/>
                            </div>
                        </div>
                        <Link to="/PatientList">
                        <div className="ui fluid large blue submit button">Physician Login</div>
                        </Link>

                        {prescription_status ? <Link to="/Updated_home"><div style={{marginTop:"10px", marginBottom:"10px"}} className="ui fluid large blue submit button">Patient Login</div></Link>: <Link to="/home"><div style={{marginTop:"10px", marginBottom:"10px"}} className="ui fluid large blue submit button">Patient Login</div></Link>}

                        <Link to="/Pharmacy">
                            <div className="ui fluid large blue submit button">Pharmacist Login</div>
                        </Link>

                    </div>
                    <div className="ui error message"></div>
                </form>

                <div className="ui message">
                    <a >Sign Up</a>
                </div>
            </div>
        </div>



    );
};

export default LogIn;