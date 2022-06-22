import React, {useState, useRef ,useEffect} from 'react';
import Box from "@mui/material/Box";
import {Button, Typography} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import {uploadApi} from "./upload";
import { FileUploader } from './FileUploader.component';
import {api} from "../../../services/Config"
import {toast} from "react-toastify";

function Form({ onClose, category ,products ,handel}) {
    const [value, setValue] = useState(null)
    const [img, setImg] = useState([]);
    const [editorText, setEditorText] = useState(null)
    
    const submitUploadForm = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("image", e.target.image.files[0])
        setValue({ ...value,'image': e.target.image.files[0].name})
        if (e.currentTarget[0].value !== '') {
            e.currentTarget.reset();
            toast.success('عکس با موفقیت آپلود شد.')
            const res = await uploadApi.upload(formData)
            .then(response => {
                return response;
            })
            .catch(error => {
                return Promise.reject(error);
            });
            setImg((prevImg) => [...prevImg, res.data])
        } else {
            toast.error('حداقل یک عکس آپلود کنید')
        }
    };

    const imageList = img.length > 0 && img.map(img => {
        return {
            value: img,
            label: <img style={{width: '70px', height: '70px'}} 
                src={`http://localhost:3002/files/${img}`}/>
        }
    })

    const handleDeleteImage = (index) => {
        const deletedImg = img.splice(index, 1)
        setImg(prevState => prevState.filter(item => {
            return item !== deletedImg
        }))
        toast.success("عکس مورد نظر با موفقیت حذف شد")
    }
    
    const handelSubmit = async (e) => {
        e.preventDefault()
        if (products) {
            await api.patch(`/products/${products.id}`,value)
            toast.success('محصول با موفقیت ویرایش شد.')
            handel()
            onClose()
        } 
        else  {
            await api.post(`/products`,value)
            toast.success('محصول با موفقیت افزوده شد.')
            handel()
            onClose()
        } 
    }
    return (
        <Box sx={{
                display: 'flex', 
                flexDirection: "column",
                justifyContent: 'center', 
                alignItems: 'start',
            }}
        >

            <Box sx={{
                display: "flex", 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                width: '100%'}}
            >
                <Typography>افزودن/ویرایش کالا</Typography>
                <CloseIcon cursor="pointer" onClick={onClose}/>
            </Box>   

            <Typography sx={{mt: 1}}>تصویر کالا :</Typography>
            <FileUploader
                onFileSelectError={({error}) => alert(error)}
                handleSubmit={submitUploadForm}
            />
           

            <Box
                component="form"
                sx={{
                    width: '100%',
                    '& .MuiTextField-root': {my: 1},
                }}
                noValidate
                autoComplete="off"
                onSubmit={handelSubmit} 
            >
               
                {
                    imageList.length > 0 &&
                    <Box sx={{
                        overflowX: 'scroll', 
                        "figure": {display: 'inline-block'}}}
                    >
                        {img.map((item, index) => {
                            return (
                                <Typography component='figure'
                                    sx={{
                                        width: '80px',
                                        height: '80px',
                                        "img": {height: '100%', width: '100%'},
                                        mr: 2,
                                        position: 'relative'
                                    }}
                                >
                                    <CancelPresentationIcon cursor='pointer'
                                        onClick={() => handleDeleteImage(index)}
                                        sx={{
                                            position: 'absolute',
                                            "color": 'error.main'
                                        }}
                                    />
                                    < img src={`http://localhost:3002/files/${item}`} alt=""/>
                                </Typography>
                            )
                        })}
                    </Box>
                }

                <Typography sx={{mt: 2}}>نام کالا :</Typography>

                <input
                    type='text' 
                    name="name"
                    placeholder="نام کالا"
                    style={{
                        width: '100%',
                        height: '55px',
                        border: '1px solid #ccc',
                        padding: '0 8px',
                        fontSize: '1.2rem',
                        borderRadius: '4px'
                    }}
                    onChange={e =>{
                        setValue({...value , 'name' : e.target.value})
                    }}
                    defaultValue={products ? products.name : ''}
                />
         
                <Typography sx={{my: 1}}>قیمت کالا :</Typography>

                <input 
                    type='number' 
                    name='price' 
                    placeholder='قیمت کالا را وارد نمایید..' 
                    style={{
                        width: '100%',
                        height: '55px',
                        border: '1px solid #ccc',
                        padding: '0 8px',
                        fontSize: '1.2rem',
                        borderRadius: '4px'
                    }}
                    onChange={e =>{
                        setValue({...value , 'price' : e.target.value})
                    }}
                    defaultValue={products ? products.price : ''}
                />

                <Typography sx={{my: 1}}>موجودی کالا :</Typography>

                <input 
                    type='number' 
                    name='count' 
                    placeholder='موجودی کالا را وارد نمایید...' 
                    style={{
                        width: '100%',
                        height: '55px',
                        border: '1px solid #ccc',
                        padding: '0 8px',
                        fontSize: '1.2rem',
                        borderRadius: '4px'
                    }}
                    onChange={e =>{
                        setValue({...value , 'count' : e.target.value})
                    }}
                    defaultValue={products ? products.count : ''}
                />
 
                <Typography sx={{my: 1}}>دسته کالا :</Typography>

                <select
                    name='category'
                    style={{
                        width: '100%',
                        height: '40px',
                        border: '1px solid #ccc',
                        padding: '0 10px',
                        fontSize: '1rem',
                        borderRadius: '4px'
                    }}
                    onChange={e =>{
                        setValue({...value , 'category' : e.target.value})
                    }}
                    
                >
                    <option value="" disabled selected hidden> 
                        {products? products.category : 'دسته ی مورد نظر را انتخاب کنید'}
                    </option>
                    {category.map(categories => {
                        return <option value={categories.id} key={categories.id}>{categories.name}</option>
                    })}
                </select>
   
                <Typography sx={{my: 2}}>توضیحات کالا :</Typography>

                <CKEditor
                    key="description"
                    id="description"
                    name='description'
                    editor={ClassicEditor}
                    data={editorText}
                    onChange={(event, editor) => {
                        const data = editor.getData()
                        setValue({...value , 'description' : data})
                        setEditorText(data)
                    }}   
                    onReady={(editor => 
                        products ?  editor.setData(products.description) : ''
                    )}
                    onBlur={(event, editor) => {
                        console.log("Blur.", editor);
                    }}
                    onFocus={(event, editor) => {
                        console.log("Focus.", editor);
                    }}
                />

                <Box sx={{display: 'flex', justifyContent: 'center', mt: 2}}>
                    <Button  type='submit' size='large' color='info' variant='contained'>
                        ذخیره
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default Form;