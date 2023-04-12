import React from "react";
import { Modal, Button, Box } from "@material-ui/core";
import { getModalStyle, useStyles } from "../../../Tools/model";
import { PUT } from "../../../Api/Mutation/MutationPrime";
import { useMutation } from "@apollo/client";
import { Body } from "../Employer/Body";
export default function EditeModal(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [primedata, setPrime] = React.useState({
    id: "",
    taux: 0,
  });
  const [UpdatePrime, { data, error }] = useMutation(PUT);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    setPrime(props.Edite);
  }, [props.Edite]);

  const onchange = (e) => {
    setPrime(() => ({
      ...primedata,
      [e.target.name]: e.target.value,
    }));
  };
  function handleSubmit(e) {
    try {
      e.preventDefault();
      UpdatePrime({
        variables: {
          updatePrimeId: props.Edite._id,
          taux: parseInt(primedata.taux),
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
          <h2>Edite Prime</h2>
          <form onSubmit={handleSubmit}>
            <input
              class="form-control m-1"
              name="taux"
              onChange={onchange}
              value={primedata.taux}
            />
            <Button type="submit" variant="outlined" sx={{ margin: 10 }}>
              Save
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
}
