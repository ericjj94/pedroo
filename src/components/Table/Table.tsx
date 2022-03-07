/*  The table component is inspired from Material UI. The component allows the rendering of the table and pagination using 
 MUI pagination with some minor features like sorting.
*/

import { Paper, Table, TableBody, TableContainer, TablePagination } from "@mui/material";
import { TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";
import React from "react";

interface IDataTableColumn {
  id: string;
  name: string;
  enableSort?: boolean;
  align?: "center" | "inherit" | "justify" | "left" | "right";
}

interface IDataTableHeadProps {
  columns: IDataTableColumn[];
  order: Order;
  orderBy: keyof any;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof any) => void;
}

interface IDataTableProps {
  rows: any[];
  columnData?: IDataTableColumn[];
  page: number;
  setPage: Function;
  setRowsPerPage: Function;
  rowsPerPage: number;
  updateCurrentPage: Function;
  handleOnRowClick: Function;
  id?: string;
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  return stabilizedThis.map((el) => el[0]);
}

const DataTableHead: React.FC<IDataTableHeadProps> = ({ columns, order, orderBy, onRequestSort }): JSX.Element => {
  const createSortHandler = (property: keyof any) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  return (
    <React.Fragment>
      <TableHead>
        <TableRow>
          {columns.map((column) => (
            <TableCell key={column.id} align="center" sortDirection={orderBy === column.id ? order : false}>
              {column.enableSort ? (
                <TableSortLabel
                  active={orderBy === column.id}
                  direction={orderBy === column.id ? order : "asc"}
                  onClick={createSortHandler(column.id)}
                >
                  {column.name}
                </TableSortLabel>
              ) : (
                column.name
              )}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    </React.Fragment>
  );
};

const DataTable: React.FC<IDataTableProps> = ({
  columnData,
  rows,
  page,
  setPage,
  setRowsPerPage,
  rowsPerPage,
  updateCurrentPage,
  id,
  handleOnRowClick,
}): JSX.Element => {
  let internalColumnData: IDataTableColumn[] = [
    {
      id: "",
      name: "",
      align: "inherit",
      enableSort: false,
    },
  ];
  if (!columnData) {
    if (rows.length) {
      internalColumnData.length = 0;
      Object.keys(rows[0]).map((key) => {
        internalColumnData.push({
          id: String(key),
          name: String(key),
          align: "inherit",
          enableSort: false,
        });
      });
    }
  } else {
    internalColumnData = columnData;
  }

  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof any>("");

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof any) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
    if (newPage % 3 === 0) {
      updateCurrentPage();
    }
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <React.Fragment>
      <div id={id}>
        <Paper>
          <TableContainer>
            <Table aria-labelledby="tableTitle" aria-label="enhanced table">
              <DataTableHead
                columns={internalColumnData}
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
              />
              <TableBody>
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    return (
                      <TableRow className={"table-row"} key={index}>
                        {Object.keys(row).map((key, index) => {
                          return (
                            <TableCell
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                handleOnRowClick(row.id);
                              }}
                              align={internalColumnData[index].align ? internalColumnData[index].align : "inherit"}
                              key={key}
                            >
                              {row[key]}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5]}
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </React.Fragment>
  );
};

export default DataTable;
