export function Input(props) {
    return (
        <div className="col-md-6">
        <input type="text"  className="form-control " placeholder={props.placeholder}/>
      </div>
    );
  }