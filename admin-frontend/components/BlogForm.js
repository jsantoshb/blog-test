import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import dateformat from 'dateformat';
import blogApi from '../api/blogApi';
import Notiflix from 'notiflix';

const BlogForm = () => {
    const [blog, setBlog] = React.useState({title:'', content:''})
    const router = useRouter();

    const saveBlog = async (event) => {
        event.preventDefault()
        const date = dateformat(new Date(), "isoDateTime");
        const data = JSON.stringify({...blog, created:date, userId:'5fbc6a21484baf37c8c16259'});

        const resp = await blogApi.postBlog(data)
        .catch(err=> console.log(err))

        if(!resp.error)
        {
            Notiflix.Report.Success('Guardado', 'Blog guardado correctamente.')
            router.push('/')
        }
        else
            Notiflix.Report.Failure('Algo salio mal', 'Ocurrio un problema al guardar el blog, asegurate de llenar todos los campos.');
      
    }
    
    const handleInputChange = ({target})=>{
        const value = target.value;
        const name = target.name;
    
        setBlog({
            ...blog,
          [name]: value
        });
      }

    return <>
        <h2>Nuevo blog</h2>
        <form onSubmit={saveBlog}>
        <div className="form-group">
            <label>Titulo</label>
            <input 
            type="text" 
            name='title' 
            className="form-control" 
            id="title" 
            placeholder="Titulo del blog"
            onChange={handleInputChange}
            />
        </div>
        <div className="form-group">
            <label>Contenido</label>
            <textarea 
            name='content' 
            className="form-control" 
            id="content" 
            rows="10"
            placeholder="Ingresa el contenido del blog"
            onChange={handleInputChange}
            ></textarea>
        </div>
        <button className='btn btn-primary right m-2' onSubmit={saveBlog}>Publicar</button>
        <Link href='/'> 
            <a className='btn btn-seccundary text-danger right m-2'>Cancelar</a>
        </Link>
        
        </form>
    </>
};

export default BlogForm;