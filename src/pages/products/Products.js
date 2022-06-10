import React from 'react';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import './products.scss'
import Product from "../../components/product/Product";
import data from '../../data'
import {Link} from 'react-router-dom'

const Products = () => {


    return (
        <Container className='products-container'>
            <Grid container spacing={3} direction="row">
                {
                    data.map(product => (
                        <Grid item key={product.id} xs={12} md={6} lg={4} >
                            <Link to={`/products/${product.id}`}>
                                <Product product={product} />
                            </Link>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    );
};

export default Products;
