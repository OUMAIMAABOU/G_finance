import * as React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_REVENU } from "../../../Api/Query/Query";
import EditeModal from "./Edit";

const EditableTable = () => {
  const { loading, data, error } = useQuery(GET_REVENU);
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
          <th scope="col">Salaire min</th>
          <th scope="col">Salaire max</th>
          <th scope="col">Somme deduire</th>
          <th scope="col">Taux</th>
        </tr>
      </thead>
      <tbody>
        {data.ShowAllRevenu.map((row) => (
          <>
            <tr key={row._id}>
              <td>{row.salaire_min} DH</td>
              <td>{row.salaire_max} DH</td>
              <td>{row.somme_deduire} DH</td>
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
