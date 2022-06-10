import React from 'react';
import './single.scss'
import {useParams} from 'react-router-dom'
import data from "../../data";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import DetailTable from "../../components/detailTable/DetailTable";

const Single = () => {
    const {productId} = useParams()
    const product = data.find(item => item.id.toString() === productId)

    return (
        <Box className='single'>
            <Box className='img-container'>
                <img src={product.img} alt={product.title} className='game-img' />
            </Box>

            <Container>
                <DetailTable product={product} />
            </Container>
        </Box>
    );
};

export default Single;
