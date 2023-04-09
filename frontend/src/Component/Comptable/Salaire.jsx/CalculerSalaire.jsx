import React from 'react'
import NavBar from './NavBar'
import {GET_EMPLOYER} from '../../../Api/Query/Query'
import { useQuery, useMutation } from "@apollo/client";

export default function CalculerSalaire() {
  const { loading, data, error } = useQuery(GET_EMPLOYER);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>wrong...{error.message}</div>;

  return (
    <div className='bodyForm'>
               <NavBar/>

      <div className=" register">
         <div className="row">
            
         <div className="col-md-12 register-right">
               <ul className="nav nav-tabs nav-justified col-md-6" id="myTab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Salaire </a>
                </li>
                
                <li className="nav-item">
                    <a className="nav-link active " id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="true">Prime</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" id="profile-tab" data-toggle="tab" href="#prof" role="tab" aria-controls="profile" aria-selected="false">IR</a>
                </li>
                
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <h3 className="register-heading">calcul de paie</h3>
                    <div className="row register-form">
                    <div className="col-md-12">
                    <div className="form-group">
                                <select className="form-control">
                                    <option className="hidden"  selected disabled>Please select employer</option>
                                    {data.ShowEmployer.map((row) => (

                                    <option value={row._id}>{row.name}-{ row._id}</option>
                                    ))}
                                  
                                </select>
                            </div>

                       <div className="form-group row ">
                              <div className="col-md-6">
                              <input type="text" className="form-control" placeholder="Salaire de base *"  />
                              </div>
                              <div className="col-md-6">
                              <input type="text" className="form-control " placeholder="Heurs supplementaire *"  />
                              </div>
                            </div>
                            <div className="form-group row ">
                              <div className="col-md-6">
                              <input type="text" className="form-control" placeholder="prime d'anciente*"  />
                              </div>
                              <div className="col-md-6">
                              <input type="text" className="form-control"  placeholder="total de prime *"  />
                              </div>
                            </div>
                       </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Salaire brut*"  readOnly value="d"/>
                            </div>
                            <div className="form-group row ">
                              <div className="col-md-6">
                              <input type="text" className="form-control" placeholder="Les element exonérés *"  />
                              </div>
                              <div className="col-md-6">
                              <input type="TEXT" className="form-control" placeholder="Salaire brut imposable*"  readOnly  />

                              </div>
                            </div>


                            <div className="form-group row ">
                              <div className="col-md-6">
                              <input type="TEXT" className="form-control" placeholder="déduction*"  readOnly  />
                              </div>
                              <div className="col-md-6">
                              <input type="TEXT" className="form-control" placeholder="Salaire net imposable*"  />
                              </div>
                            </div>

                            <div className="form-group row ">
                              <div className="col-md-6">
                              <input type="TEXT" className="form-control" placeholder="IR*"  />
                              </div>
                              <div className="col-md-6">
                              <input type="TEXT" className="form-control" placeholder="Avance salaire*"  />
                              </div>
                            </div>
                           
                              <input type="TEXT" className="form-control" placeholder="salaire NET*"  />
                        </div>
                        </div>

                </div>
{/* 
                <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="home-tab">
                    <h3 className="register-heading">calcul de paie</h3>
                    <div className="row register-form">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Salaire brut imposable *"  />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="numbre déduction *"  />
                            </div>
                           
                          
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Your Email *"  />
                            </div>
                            <div className="form-group">
                                <input type="text" minlength="10" maxlength="10" name="txtEmpPhone" className="form-control" placeholder="Your Phone *"  />
                            </div>
                            <div className="form-group">
                                <select className="form-control">
                                    <option className="hidden"  selected disabled>Please select your Sequrity Question</option>
                                    <option>What is your Birthdate?</option>
                                    <option>What is Your old Phone Number</option>
                                    <option>What is your Pet Name?</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Enter Your Answer *"  />
                            </div>
                            <input type="submit" className="btnRegister"  value="Register"/>
                        </div>
                    </div>
                </div> */}
                {/* <div className="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <h3  className="register-heading">Apply as a Hirer</h3>
                    <div className="row register-form">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="First Name *"  />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Last Name *"  />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email *"  />
                            </div>
                            <div className="form-group">
                                <input type="text" maxlength="10" minlength="10" className="form-control" placeholder="Phone *"  />
                            </div>


                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Password *"  />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Confirm Password *"  />
                            </div>
                            <div className="form-group">
                                <select className="form-control">
                                    <option className="hidden"  selected disabled>Please select your Sequrity Question</option>
                                    <option>What is your Birthdate?</option>
                                    <option>What is Your old Phone Number</option>
                                    <option>What is your Pet Name?</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="`Answer *"  />
                            </div>
                            <input type="submit" className="btnRegister"  value="Register"/>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
    </div>
     </div>



  )
}
