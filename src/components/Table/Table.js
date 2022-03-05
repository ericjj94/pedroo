import { useEffect, useState } from "react";
import { useTable, usePagination } from "react-table";
import TableStyles from "./styled/TableStyled";

const rowLimits = [10, 20, 30, 40, 50];

function Table({ columns, data, index, handlePageChange }) {
  console.log("value of index in Table", index);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  useEffect(() => {}, [index]);
  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr
                style={i % 2 === 0 ? { backgroundColor: "#dcdcdc" } : { backgroundColor: "#fff" }}
                {...row.getRowProps()}
              >
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
      <div className="pagination">
        <button onClick={() => handlePageChange("prev")} disabled={!canPreviousPage}>
          {"Prev"}
        </button>{" "}
        <button
          onClick={() => {
            handlePageChange("next");
          }}
          disabled={!canNextPage}
        >
          {"Next"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>{" "}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {rowLimits.map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

function DataTable({ columns, data, handlePageChange, page }) {
  const [localPage, setPage] = useState(page);
  useEffect(() => {
    console.log("page has been changed from parent", page);
    setPage(page);
  }, [page]);

  return (
    <TableStyles>
      <Table columns={columns} data={data} index={localPage} handlePageChange={handlePageChange} />
    </TableStyles>
  );
}

export default DataTable;
