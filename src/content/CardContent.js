import { Card, CardHeader, Typography, IconButton, CardMedia } from '@mui/material'
import React from 'react'
import { Box } from '@mui/system'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function CardContent(props) {
    return (
        <Card sx={{
            maxWidth: 400,
            bgcolor: '#F4F4F2',
            mt: 1
        }}>
            <CardHeader
                avatar={<Box sx={{
                    bgcolor: '#E0DEDE',
                    width: 60,
                    height: 30,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#495464',
                    borderRadius: 1
                }}>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontWeight: 600,
                        fontSize: 10
                    }}>
                        NEW
                    </Typography>
                </Box>}
                title={
                    <Box sx={{
                        pl: 28
                    }}>
                        <IconButton >
                            <DensityMediumIcon />
                        </IconButton>
                    </Box>


                }
                action={
                    <Box sx={{
                        pt: 0.2
                    }}>
                        <IconButton>
                            <FavoriteBorderIcon sx={{
                                fontSize: 26
                            }} />
                        </IconButton>
                    </Box>
                }

            />
            <CardMedia
                component="img"
                height="140"
                image={props.image}
                alt="item"
            />
            <CardContent>
                <Typography>
                    Nama
                </Typography>
            </CardContent>
        </Card>
    )
}
