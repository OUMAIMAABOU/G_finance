import * as React from "react";
import NavBar from "./NavBar";
import { GET_EMPLOYER } from "../../../Api/Query/Query";
import { useQuery, useMutation } from "@apollo/client";
import { Input } from "../../../Tools/Body";
import {
  CalculerSalaireMutaion,
  CalculaireSalaire_Brut,
} from "../../../Api/Mutation/MutationSalaire";
import PrimePage from "./Prime";
import IrPage from "./IR";

export default function CalculerSalaire() {
  const { loading, data, error } = useQuery(GET_EMPLOYER);
  const [CalculaireSalaire] = useMutation(CalculerSalaireMutaion);
  const [calculaireSalaireBrut] = useMutation(CalculaireSalaire_Brut);
  const [Salaire, SetSalaire] = React.useState({
    id_employe: "",
    salaire_de_base: 0,
    prime: 0,
    datePaie: 0,
    exoneres: 0,
    avance_salair: 0,
    Heurs_supplementaire: 0,
    salaire_Brut: 0,
  });
  const [Salairebase, setSalaireBase] = React.useState(false);
  const [SalaireForma, setSalaireForma] = React.useState(true);
  const [PrimForma, setPrimForma] = React.useState(false);
  const [IrForma, setIrForma] = React.useState(false);
  const [salaireNet, setsalaireNet] = React.useState(0);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>wrong...{error.message}</div>;

  const showdiv = () => {
    Salairebase ? setSalaireBase(false) : setSalaireBase(true);
  };
  const showForm = () => {
    setSalaireForma(true);
    setPrimForma(false);
    setIrForma(false);
  };
  const showPrim = () => {
    setPrimForma(true);
    setSalaireForma(false);
    setIrForma(false);
  };
  const showIr = () => {
    setIrForma(true);
    setSalaireForma(false);
    setPrimForma(false);
  };
  const onchange = (e) => {
    SetSalaire(() => ({
      ...Salaire,
      [e.target.name]: e.target.value,
    }));
    console.log(Salaire);
  };
  function handleSubmit(e) {
    try {
      e.preventDefault();
      if(Salairebase){
      CalculaireSalaire({
        variables: {
          idEmploye: Salaire.id_employe,
          salaireDeBase: parseFloat(Salaire.salaire_de_base),
          prime: parseFloat(Salaire.prime),
          exoneres: parseFloat(Salaire.exoneres),
          avanceSalair: parseFloat(Salaire.avance_salair),
          heursSupplementaire: parseFloat(Salaire.Heurs_supplementaire),
        },
      }).then((res) => {
        setsalaireNet(res.data.calculaireSalaire);
      });
      }
if(!Salairebase){
  calculaireSalaireBrut({
        variables: {
          idEmploye: Salaire.id_employe,
          salaireBrut: parseFloat(Salaire.salaire_Brut),
          prime: parseFloat(Salaire.prime),
          exoneres: parseFloat(Salaire.exoneres),
          avanceSalair: parseFloat(Salaire.avance_salair),
        },
      }).then((res) => {
        setsalaireNet(res.data.calculaireSalaireBrut);
      });
}
    
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="bodyForm">
      <NavBar />
      <div className=" register">
        <div className="row">
          <div className="col-md-12 register-right">
            <ul
              className="nav nav-tabs nav-justified col-md-6"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                  name="SalaireForma"
                  onClick={showForm}
                >
                  Salaire
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                  name="PrimForma"
                  onClick={showPrim}
                >
                  Prime
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                  name="IrForma"
                  onClick={showIr}
                >
                  IR
                </a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              {SalaireForma && (
                <>
                  <form onSubmit={handleSubmit}>
                    <div
                      className="tab-pane fade show active"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <h3 className="register-heading">calcul de paie</h3>
                      <div></div>
                      <div className="row register-form">
                        <div className="col-md-12">
                          <div>
                            <input
                              type="checkbox"
                              name="subscribe"
                              value="newsletter"
                              onClick={showdiv}
                            />
                            <label> Salaire de Base</label>
                          </div>

                          <div className="form-group">
                            <select
                              className="form-control"
                              name="id_employe"
                              onChange={onchange}
                            >
                              <option className="hidden" selected disabled>
                                Please select employer
                              </option>
                              {data.ShowEmployer.map((row) => (
                                <option value={row._id}>{row.name}</option>
                              ))}
                            </select>
                          </div>
                          {Salairebase && (
                            <>
                              <div className="form-group row ">
                                <Input
                                  placeholder="Salaire de base *"
                                  nameInput="salaire_de_base"
                                  EventOnChange={onchange}
                                />
                                <Input
                                  placeholder="Heurs supplementaire *"
                                  nameInput="Heurs_supplementaire"
                                  EventOnChange={onchange}
                                />
                              </div>
                            </>
                          )}
                        </div>
                        <div className="col-md-12">
                          {!Salairebase && (
                            <>
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Salaire brut*"
                                  onChange={onchange}
                                  name="salaire_Brut"
                                />
                              </div>
                            </>
                          )}
                          <div className="form-group">
                            <input
                              placeholder="total de prime *"
                              className="form-control"
                              name="prime"
                              onChange={onchange}
                            />
                          </div>
                          <div className="form-group row ">
                            <Input
                              placeholder="Les element exonérés"
                              nameInput="exoneres"
                              EventOnChange={onchange}
                            />
                            <Input
                              placeholder="Avance salaire**"
                              nameInput="avance_salair"
                              EventOnChange={onchange}
                            />
                          </div>

                          <input
                            type="TEXT"
                            className="form-control"
                            placeholder="salaire NET*"
                            value={`Salaire net :${salaireNet} DH`}
                          />
                        </div>
                        <button
                          type="submit"
                          className="text-center p-2 m-2 bg-primary text-white border rounded col-12"
                        >
                          Calculaire
                        </button>
                      </div>
                    </div>
                  </form>
                </>
              )}
              {PrimForma && (
                <>
                  <form onSubmit={handleSubmit}>
                    <div
                      className="tab-pane fade show active"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <h3 className="register-heading">Prim</h3>
                      <div>
                        <div className="row register-form">
                          <div className="col-md-12">
                            <PrimePage />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </>
              )}
              {IrForma && (
                <>
                  <form onSubmit={handleSubmit}>
                    <div
                      className="tab-pane fade show active"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <h3 className="register-heading">IR</h3>
                      <div>
                        <div className="row register-form">
                          <div className="col-md-12">
                            <IrPage />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
