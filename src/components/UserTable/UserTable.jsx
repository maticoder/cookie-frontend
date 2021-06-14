import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import TableSortLabel from "@material-ui/core/TableSortLabel";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  input: {
    marginBottom: 16,
  },
});

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: "name", numeric: false, label: "Name" },
  { id: "email", numeric: false, label: "Email" },
  { id: "color", numeric: true, label: "Color" },
  { id: "password", numeric: false, label: "Password" },
  { id: "ip", numeric: true, label: "Ip" },
];

const UserTable = ({ data }) => {
  const [filter, setFilter] = useState("");

  const classes = useStyles();

  const filterData = (data) => {
    return data.filter((user) =>
      user.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const onRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("calories");

  return (
    <div className="user-table">
      <TextField
        value={filter}
        className={classes.input}
        label="Filter"
        onChange={(e) => setFilter(e.target.value)}
      />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {headCells.map((headCell) => (
                <TableCell
                  key={headCell.id}
                  sortDirection={orderBy === headCell.id ? order : false}
                >
                  <TableSortLabel
                    active={orderBy === headCell.id}
                    direction={orderBy === headCell.id ? order : "asc"}
                    onClick={createSortHandler(headCell.id)}
                  >
                    {headCell.label}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {stableSort(filterData(data), getComparator(order, orderBy)).map(
              (row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.color}</TableCell>
                  <TableCell>{row.password}</TableCell>
                  <TableCell>{row.ip}</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserTable;
