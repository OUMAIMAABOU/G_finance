import React from "react";
import { Modal, Button } from "@material-ui/core";
import Form from "./FormEdite";
import { getModalStyle, useStyles } from "../../../Tools/model";

export default function EditeModal(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [employe, setEmploye] = React.useState({});

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    setEmploye(props.Employer);
    console.log(props.Employer);
  }, [props.Employer]);
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
          <h2>Edite Employer</h2>
          <Form
            cin={employe.cin}
            name={employe.name}
            email={employe.email}
            service={employe.Service}
            address={employe.adress}
            phone={employe.phone}
            matricul={employe.matricule}
            fonction={employe.fonction}
            siegeSocial={employe.siege_social}
            nCimr={employe.N_CIMR}
            nCnss={employe.N_CNSS}
            dataEmbauche={employe.data_embauche}
            dateNaissance={employe.date_naissance}
            situationFamiliale={employe.situation_familiale}
          />
        </div>
      </Modal>
    </div>
  );
}
