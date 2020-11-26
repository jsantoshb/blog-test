import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import dateformat from 'dateformat';
import departmentApi from '../api/departmentApi';
import Notiflix from 'notiflix';

const UserForm = () => {

    const [department, setDepartment] = React.useState({name:'', isAdmin:false})
    const router = useRouter();

    const saveDepartment = async (event) => {
        event.preventDefault()
        const date = dateformat(new Date(), "isoDateTime");
        const data = JSON.stringify({...department, created:date});

        const resp = await departmentApi.postDepartment(data)
        .catch(err=> console.log(err))

        if(!resp.error)
        {
            Notiflix.Report.Success('Guardado', 'Departamento guardado correctamente.')
            router.push('/admin')
        }
        else
            Notiflix.Report.Failure('Algo salio mal', 'Ocurrio un problema al guardar el departamento, asegurate de llenar todos los campos.');
    }
    
    const handleInputChange = ({target})=>{
        const value = target.type == 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        setDepartment({
            ...department,
          [name]: value 
        });
      }

    return <>
        <h2>Nuevo departamento</h2>
        <form onSubmit={saveDepartment}>
        <div className="form-group">
            <label>Nombre</label>
            <input 
            type="text" 
            name='name' 
            className="form-control" 
     
            placeholder="Nombre del departamento"
            onChange={handleInputChange}
            />
        </div>
        <div className="form-check">
            <input className="form-check-input" 
            type="checkbox" 
            name="isAdmin" 
            onChange={handleInputChange}
            />
            <label className="form-check-label" >
                Admin
            </label>
        </div>

        <button className='btn btn-primary right m-2' onSubmit={saveDepartment}>Guardar</button>
        <Link href='/'> 
            <a className='btn btn-seccundary text-danger right m-2'>Cancelar</a>
        </Link>
        
        </form>
    </>
};

export default UserForm;