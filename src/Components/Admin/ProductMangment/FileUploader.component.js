import React, {useRef} from 'react'
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
 

const FileUploader = ({ onFileSelectError, handleSubmit}) => {
    const fileInput = useRef(null)

    const handleFileInput = (e) => {
        const file = e.target.files[0];
        if (file.size > 1024 * 1024) {

            onFileSelectError({error: "File size cannot exceed more than 2MB"});
            fileInput.current.value = null

        }

    };
   
    return (

        <Box onSubmit={handleSubmit} component="form"
             sx={{width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', my: 2,"input":{border:"1px solid gray",py:1,px:2}}}>
            <input ref={fileInput} name='image' type="file" onChange={handleFileInput} style={{width: "400px",borderRadius:"4px"}}/>
            <label>

            </label>
            <Button type='submit' color='info' variant="contained">
                Upload
            </Button>

        </Box>

    )
}

export {FileUploader};