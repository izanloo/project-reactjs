import React from 'react';
import Button from '@mui/material/Button';

const ButtonAdmin = ({name}) => {
    return (
        <div >
            <Button 
            className='btn-component'
                sx={{
                    color: '#3655b3',
                    display: 'flex',
                    fontSize: '.9rem',
                }}> 
                {name}
            </Button>
        </div>
    );
}

export default ButtonAdmin;

