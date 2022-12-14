import React from "react";

// const Dashboard = () => {
//     return (
//         <div>

//         </div>
//     );
// }

// export default Dashboard;

import { useTable } from "react-table";

function Dashboard() {
  const data = React.useMemo(
    () => [
      {
        col1: "",
        col2: "",
      },
      {
        col1: "",
        col2: "",
      },
      {
        col1: "",
        col2: "",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Leave Duration",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Leave Type",
        accessor: "col2",
      },
      {
        Header: "Total Leave",
        accessor: "col3",
      },
      {
        Header: "Used Type",
        accessor: "col4",
      },
      {
        Header: "Balance Type",
        accessor: "col5",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="dash-content">
      <table {...getTableProps()} style={{ border: "solid 1px blue" }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: "solid 3px red",
                    background: "aliceblue",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: "10px",
                        border: "solid 1px gray",
                        background: "papayawhip",
                      }}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
