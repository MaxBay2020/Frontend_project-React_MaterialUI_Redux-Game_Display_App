import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './product.scss'

const Product = ({product}) => {
    const {title, img, production, price} = product

    return (
        <Card className='product' sx={{ maxWidth: 345}}>
            <CardHeader
                title={title}
                subheader={production}
            />
            <CardMedia
                className='game-img'
                component="img"
                height="194"
                image={img}
                alt={title}
            />
            <CardContent>
                <Typography variant="h5" color="text.secondary">${price}</Typography>
            </CardContent>
        </Card>
    );
};

export default Product;
