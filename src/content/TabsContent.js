import React from 'react'
import { Box } from '@mui/system'
import { Tabs } from '@mui/material'
import { Tab } from '@mui/material'
import { Autocomplete } from '@mui/material'
import { TextField } from '@mui/material'


export default function TabsContent() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (

        <Box sx={{
            width: '100%',
            bgcolor: '#F4F4F2',
            mt: 2,
            borderRadius: 2,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center'


        }}>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={pilihan}
                sx={{ width: 100, pb: 2, pl: 3 }}
                renderInput={(params) => <TextField {...params} label="ALL TYPES"
                    variant="standard"
                />}
            />
            <Tabs value={value} onChange={handleChange} centered>
                <Tab label="Popular Products" />
                <Tab label="Low Price" />
                <Tab label="High Price" />
            </Tabs>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={pilihan}
                sx={{ width: 100, pb: 2, pr: 3 }}
                renderInput={(params) => <TextField {...params} label="PRICE"
                    variant="standard"
                />}
            />

        </Box>
    )
}

const pilihan = [
    { label: 'Option1' },
    { label: 'Option2' },
    { label: 'Option3' }
];
