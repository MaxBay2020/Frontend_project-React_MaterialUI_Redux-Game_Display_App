import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './detailTable.scss'

const DetailTable = ({product}) => {
    const {id, title, production, price, genre} = product

    return (
        <TableContainer component={Paper} className='detailTable'>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className='tableCell'>Game Name</TableCell>
                        <TableCell className='tableCell'>Production</TableCell>
                        <TableCell className='tableCell'>Genre</TableCell>
                        <TableCell className='tableCell'>Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow
                        key={id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell className='tableCell' component="th" scope="row">
                            {title}
                        </TableCell>
                        <TableCell className='tableCell'>{production}</TableCell>
                        <TableCell className='tableCell'>{genre}</TableCell>
                        <TableCell className='tableCell'>${price}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default DetailTable;
