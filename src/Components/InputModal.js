import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function FormPropsTextFields() {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
                <TextField
                    required
                    id="outlined-required"
                    label="نام کالا"
                    dir='ltr'
                    type='file'
                />
                <Stack spacing={2} direction="row">
                    <Button variant="contained">Browse</Button>
                </Stack>
        </Box>
    );
}
