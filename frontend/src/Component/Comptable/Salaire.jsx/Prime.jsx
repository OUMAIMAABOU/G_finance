import * as React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_PRIME } from "../../../Api/Query/Query";
import EditeModal from "./EditeModal";

const EditableTable = () => {
  const { loading, data, error } = useQuery(GET_PRIME);
  const [sendDate, setSendData] = React.useState({
    id: "",
    taux: 0,
  });
  if (error) return <div>wrong...{error.message}</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <div  className=" justify-content-center">
         <table className="table">
      <thead>
        <tr>
          <th scope="col">Year</th>
          <th scope="col">Taux</th>
        </tr>
      </thead>
      <tbody>
        {data.ShowAllPrime.map((row) => (
          <>
            <tr key={row._id}>
              <td>+{row.year}</td>
              <td>{row.taux}%</td>
              <td>
                
                <button onClick={() => setSendData(row)}>
                  <EditeModal Edite={sendDate} />
                </button>
              </td>
            </tr>
          </>
        ))}
      </tbody>
    </table>
    </div>
 
  );
};

export default EditableTable;
