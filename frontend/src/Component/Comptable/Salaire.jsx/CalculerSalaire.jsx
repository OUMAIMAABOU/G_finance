import * as React from "react";
import NavBar from "./NavBar";
import { GET_EMPLOYER } from "../../../Api/Query/Query";
import { useQuery, useMutation } from "@apollo/client";
import {Input} from '../../../Tools/Body'
export default function CalculerSalaire() {
  const { loading, data, error } = useQuery(GET_EMPLOYER);
  const [Salairebase,setSalaireBase] = React.useState(false)
  if (loading) return <div>Loading...</div>;
  if (error) return <div>wrong...{error.message}</div>;
  return (
    <div className="bodyForm">
      <NavBar />
      <div className=" register">
        <div className="row">
          <div className="col-md-12 register-right">
            <ul className="nav nav-tabs nav-justified col-md-6" id="myTab"role="tablist" >
              <li className="nav-item">
                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Salaire</a>
              </li>
              <li className="nav-item">
              <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Prime</a>
              </li>
              <li className="nav-item">
              <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">IR</a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab" >
                <h3 className="register-heading">calcul de paie</h3>
                <div className="row register-form">
                  <div className="col-md-12">
                    <div className="form-group">
                      <select className="form-control">
                        <option className="hidden" selected disabled>
                          Please select employer
                        </option>
                        {data.ShowEmployer.map((row) => (
                          <option value={row._id}>{row.name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group row ">
                      <Input placeholder="Salaire de base *"/>
                      <Input placeholder="Heurs supplementaire *"/>
                    </div>
                    <div className="form-group row ">
                      <Input placeholder="prime d'anciente *"/>
                      <Input placeholder="total de prime *"/>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Salaire brut*" value="" />
                    </div>
                    <div className="form-group row ">
                    <Input placeholder="Les element exonérés"/>
                    <Input placeholder="Salaire brut imposable" readOnly/>
                    </div>
                    <div className="form-group row ">
                    <Input placeholder="déduction*"/>
                    <Input placeholder="Salaire net imposable**"/>
                    </div>
                    <div className="form-group row ">
                    <Input placeholder="IR*"/>
                    <Input placeholder="Avance salaire**"/>
                    </div>
                    <input type="TEXT" className="form-control" placeholder="salaire NET*"/>
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
