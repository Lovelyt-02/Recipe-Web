import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
    return (
        <Link to={`/recipe/${recipe.uri.split('_')[1]}`} style={{ textDecoration: 'none' }}>
            <Card sx={{ maxWidth: 200, maxHeight: 320 }}>
                <CardMedia component="img"
                    alt={recipe.label}
                    height="200"
                    image={recipe.image}
                    sx={{ objectFit: 'cover' }} />

                <CardContent>
                    <Typography gutterBottom variant='h6' component='div'>{recipe.label}</Typography>
                    <Typography variant='body2' sx={{ color: 'text.secondary' }}>{recipe.source}</Typography>
                </CardContent>
            </Card>
        </Link>
    );
}

export default RecipeCard
