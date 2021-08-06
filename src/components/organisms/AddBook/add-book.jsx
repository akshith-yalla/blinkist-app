import React, {useState} from 'react';
import { makeStyles, Grid, Card, CardContent, CardHeader,TextField, ThemeProvider } from '@material-ui/core';
import Button from '../../atoms/Button/button';

const useStyles = makeStyles((theme)=>({
    root:{
        marginBottom: "1rem"
    },
    btn:{
        textAlign: "center"
    }
    
}));

const AddBook = (props) => {
    const {btnTitle} = props;
    const styles = useStyles();
    const [formData, setFormData] = useState({
            name:"",
            author:"",
            category:"",
            readCount:"",
            readTime:"",
            imageUrl:""
    })
    const handleChange =(e)=>{
        const data = formData
        const inputData = {...data};
        inputData[e.target.id] = e.target.value;
        setFormData(inputData);
    };

    const addBook =()=>{
        console.log('book details submitted', formData)
        setFormData(prevState=>(prevState))
        alert('Book details added successfully')
    };

    return (
            <Grid container >
                    <Card variant="outlined">
                        <CardHeader title="Add Book"></CardHeader>
                        <CardContent>
                                <form>
                                    <TextField className={styles.root}  type="text" fullWidth id="name" placeholder="Enter Book Name" variant="outlined" label="Book Name" onChange={(e)=>handleChange(e)} />
                                    <TextField className={styles.root}  type="text" fullWidth id="author" placeholder="Enter Author Name" variant="outlined" label="Book Author" onChange={(e)=>handleChange(e)} />
                                    <TextField className={styles.root}  type="text" fullWidth id="category" placeholder="Enter Book Category" variant="outlined" label="Book Category" onChange={(e)=>handleChange(e)} />
                                    <TextField className={styles.root}  type="text" fullWidth id="readCount" placeholder="Enter Read Count" variant="outlined" label="Read Count" onChange={(e)=>handleChange(e)} />
                                    <TextField className={styles.root}  type="text" fullWidth id="readTime" placeholder="Enter Read Time" variant="outlined" label="Read Time" onChange={(e)=>handleChange(e)} />
                                    <TextField className={styles.root}  type="text" fullWidth id="imageUrl" placeholder="Enter Book Image Url" variant="outlined" label="Book Image Url" onChange={(e)=>handleChange(e)} />
                                    <div className={styles.btn}><Button type="submit" color="primary" variant="contained" onClick={addBook} title="Add Book" /></div>
                                </form>
                        </CardContent>
                    </Card>
            </Grid>
    )
}

export default AddBook;
