import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import { TableHead } from '@material-ui/core';


const AvailableBooksToBorrow = ({books,  handleCheckBoxChange}) => {
  return (
      <Table>
        <TableHead>
          <TableRow>
          <TableCell>Selection</TableCell>
          <TableCell>Book Title</TableCell>
          <TableCell>Author</TableCell>
          <TableCell>Category</TableCell>
          <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { books.length > 0 ? books.map((n) => {
            return (
              <TableRow key={n.bookId}>
                <TableCell >
                <Checkbox
                checked={n.isBorrowed}
                onClick={(event) => handleCheckBoxChange(event, n.bookId, n.isBorrowed)}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
                </TableCell>
                <TableCell numeric>
                    {n.title}
                </TableCell>
                <TableCell numeric >
                    {n.author}
                </TableCell>
                <TableCell numeric>{n.category}</TableCell>
                <TableCell numeric>{n.status}</TableCell>
              </TableRow>
            )
          }) : <h3>No Books Available </h3>}
        </TableBody>
        </Table>
  );
}

export default AvailableBooksToBorrow