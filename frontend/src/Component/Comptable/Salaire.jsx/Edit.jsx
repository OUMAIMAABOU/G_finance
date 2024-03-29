import React from "react";
import { Modal, Button, Box } from "@material-ui/core";
import { getModalStyle, useStyles } from "../../../Tools/model";
import { PUT } from "../../../Api/Mutation/MutationRevenu";
import { useMutation } from "@apollo/client";
export default function EditeModal(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [IRdata, setIR] = React.useState({
    id: "",
    taux: 0,
    salaire_max: 0,
    salaire_min: 0,
    somme_deduire: 0,
  });
  const [updateImpotRevenu, { data, error }] = useMutation(PUT);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    setIR(props.Edite);
  }, [props.Edite]);

  const onchange = (e) => {
    setIR(() => ({
      ...IRdata,
      [e.target.name]: e.target.value,
    }));
  };
  function handleSubmit(e) {
    try {
      e.preventDefault();
      updateImpotRevenu({
        variables: {
          input: {
            _id: props.Edite._id,
            salaire_min: parseInt(IRdata.salaire_min),
            salaire_max: parseInt(IRdata.salaire_max),
            somme_deduire: parseInt(IRdata.somme_deduire),
            taux: parseInt(IRdata.taux),
          },
        },
      }).then((res) => {
        console.log(res);

      });
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Edite
      </Button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2>Edite IR</h2>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <div class="form-group">
                  <label for="exampleInputPassword1">Salaire max </label>
                  <input
                    class="form-control"
                    id="exampleInputPassword1"
                    name="salaire_max"
                    onChange={onchange}
                    value={IRdata.salaire_max}
                  />{" "}
                </div>
                <div class="form-group">
                  <label>Salaire min </label>
                  <input
                    class="form-control"
                    name="salaire_min"
                    onChange={onchange}
                    value={IRdata.salaire_min}
                  />
                </div>
              </div>
              <div className="col">
                <div>
                  <label>Somme deduire </label>
                  <input
                    class="form-control"
                    name="somme_deduire"
                    onChange={onchange}
                    value={IRdata.somme_deduire}
                  />
                </div>
                <div>
                  <label>Taux </label>
                  <input
                    class="form-control"
                    name="taux"
                    onChange={onchange}
                    value={IRdata.taux}
                  />
                </div>
              </div>
            </div>

            <Button type="submit" variant="outlined" sx={{ margin: 10 }}>
              Save
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
}
