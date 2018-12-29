import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './main.css';
import Prod from './prod1.jpg';

class Conatiner extends Component{
    state = {
        menu: ['Home','Furniture','Login']
    };
    render(){
        return(
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="navbar-brand">Furniture</div>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="true" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarMenu">
                        <ul className="navbar-nav center">
                            <li className="nav-item active">
                                <a href="#" className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Furniture</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Rest</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Decoration</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Outdor</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Magazine</a>
                            </li>
                        </ul>
                        <ul className="nav">
                            <li className="nav-item"><a href="#" className="icon-padding"><FontAwesomeIcon icon="user"/></a></li>
                            <li className="nav-item"><a href="#" className="icon-padding"><FontAwesomeIcon icon="search"/></a></li>
                            <li className="nav-item"><a href="#"><FontAwesomeIcon icon="shopping-bag"/></a></li>
                        </ul>
                    </div>
                </nav>

                <div className="row">
                    <div className="col-lg-3 col-md-3">
                        <div id="accordionColor">
                            <div className="card">
                                <div className="card-header sildeCollapse" id="colorHeading">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link float-left" data-toggle="collapse" data-target="#collapseColor" aria-expanded="true" >Color</button>
                                    </h5>
                                </div>
                                <div id="collapseColor" className="collpase" aria-labelledby="colorHeading" data-parent="#accordionColor">
                                    <div className="card-body">
                                        <div className="row text-center">
                                            <div className="col-md-3"><i><FontAwesomeIcon icon="circle"/></i></div>
                                            <div className="col-md-3"><i><FontAwesomeIcon icon="circle"/></i></div>
                                            <div className="col-md-3"><i><FontAwesomeIcon icon="circle"/></i></div>
                                            <div className="col-md-3"><i><FontAwesomeIcon icon="circle"/></i></div>
                                        </div>
                                        <div className="row text-center">
                                            <div className="col-md-3"><i><FontAwesomeIcon icon="circle"/></i></div>
                                            <div className="col-md-3"><i><FontAwesomeIcon icon="circle"/></i></div>
                                            <div className="col-md-3"><i><FontAwesomeIcon icon="circle"/></i></div>
                                            <div className="col-md-3"><i><FontAwesomeIcon icon="circle"/></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-9">
                        <ul className="nav justify-content-center">
                            <li className="nav-item"><a className="nav-link active">All</a></li>
                            <li className="nav-item"><a className="nav-link">New</a></li>
                            <li className="nav-item"><a className="nav-link">Offer</a></li>
                            <li className="nav-item"><a className="nav-link">Delivery in 10 days</a></li>
                        </ul>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row margin-bottom">
                                    <img src={Prod} className="col-md-6 height"/>
                                    <div className="col-md-6">
                                        <h5 className="float-left">Chair</h5>
                                        <h5 className="float-right">250&euro;</h5>
                                        <p className="margin-top">Within 10 days</p>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus assumenda nostrum perspiciatis architecto. Doloremque incidunt nulla ea. Incidunt doloribus eum, omnis commodi provident placeat.</p>
                                    </div>
                                </div>
                                <div className="row margin-bottom">
                                    <img src={Prod} className="col-md-6 height"/>
                                    <div className="col-md-6">
                                        <h5 className="float-left">Chair</h5>
                                        <h5 className="float-right">250&euro;</h5>
                                        <p className="margin-top">Within 10 days</p>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus assumenda nostrum perspiciatis architecto. Doloremque incidunt nulla ea. Incidunt doloribus eum, omnis commodi provident placeat.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="row margin-bottom">
                                    <img src={Prod} className="col-md-6 height"/>
                                    <div className="col-md-6">
                                        <h5 className="float-left">Chair</h5>
                                        <h5 className="float-right">250&euro;</h5>
                                        <p className="margin-top">Within 10 days</p>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus assumenda nostrum perspiciatis architecto. Doloremque incidunt nulla ea. Incidunt doloribus eum, omnis commodi provident placeat.</p>
                                    </div>
                                </div>
                                <div className="row margin-bottom">
                                    <img src={Prod} className="col-md-6 height"/>
                                    <div className="col-md-6">
                                        <h5 className="float-left">Chair</h5>
                                        <h5 className="float-right">250&euro;</h5>
                                        <p className="margin-top">Within 10 days</p>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus assumenda nostrum perspiciatis architecto. Doloremque incidunt nulla ea. Incidunt doloribus eum, omnis commodi provident placeat.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center"><button className="btn btn-lg btn-danger">show more product</button></div>
                    </div>
                </div>

                <footer className="margin-top">
                    <div className="row">
                        <div className="col-md-4">
                            <h5>Helpful links</h5>
                            <div className="row">
                                <div className="col-sm-6">
                                    <p>about us</p>
                                    <p>delivery and return policy</p>
                                    <p>help & faq</p>
                                    <p>service for professionals</p>
                                </div>
                                <div className="col-sm-6">
                                    <p>about us</p>
                                    <p>delivery and return policy</p>
                                    <p>help & faq</p>
                                    <p>service for professionals</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h5>Contact Info</h5>
                            <div className="row">
                                <div className="col-sm-6">
                                    <p>Oxford(UK)</p>
                                    <p>1 - 3 Abbey Street<br/>Eynush<br/>Oxford<br/>OX29 4TB</p>
                                </div>
                                <div className="col-sm-6">
                                    <p>Walnut, CA(USA)</p>
                                    <p>430 S Lemon Ave #3358<br/>Walnut<br/>California 91789<br/>USA</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h5>Sign up now</h5>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="fname">Name</label>
                                    <input id="fname" className="form-control" name="fname" type="text"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input id="email" className="form-control" name="email" type="email"/>
                                </div>
                                <input type="button" value="Sign Up" className="btn w-100 btn-warning"/>
                            </form>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Conatiner;