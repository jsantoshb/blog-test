import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import departmentApi from '../api/departmentApi';
import roleApi from '../api/roleApi';
import userApi from '../api/userApi';
import Notiflix from 'notiflix';

const UserForm = () => {

    const [user, setUser] = React.useState({name:'', email:'', password:'', roleId:'', departmentId:''})
    const [departments, setDepartments] = React.useState([]);
    const [roles, setRoles] = React.useState([]);


    React.useEffect(async() => { 
       
        const departmentsResp = await departmentApi.getAll()
        .catch(err=> console.log);

        if(!departmentsResp.error)
            setDepartments(departmentsResp)

        const rolesResp = await roleApi.getAll()
        .catch(err=> console.log);

        if(!rolesResp.error)
            setRoles(rolesResp)

    },[]);

    const router = useRouter();

    const saveUser = async (event) => {
        event.preventDefault()
       
        const data = JSON.stringify(user);

        const resp = await userApi.postUser(data)
        .catch(err=> err)

        if(!resp.error)
        {
            Notiflix.Report.Success('Guardado', 'Usuario guardado correctamente.')
            router.push('/admin')
        }
        else
            Notiflix.Report.Failure('Algo salio mal', 'Ocurrio un problema al guardar el usuario, asegurate de llenar todos los campos.');
    }
    
    const handleInputChange = ({target})=>{
        const value = target.value;
        const name = target.name;
    
        setUser({
            ...user,
          [name]: value
        });

      }

    return <>
        <h2>Nuevo Usuario</h2>
        <form onSubmit={saveUser}>
        <div className="form-group">
            <label>Nombre</label>
            <input 
            type="text" 
            name='name' 
            className="form-control" 
     
            placeholder="Nombre del usuario"
            onChange={handleInputChange}
            />
        </div>
        <div className="form-group">
            <label>Correo</label>
            <input 
            type="email" 
            name='email' 
            className="form-control" 

            placeholder="Correo electrónico"
            onChange={handleInputChange}
            />
        </div>
        <div className="form-group">
            <label>Contraseña</label>
            <input 
            type="password"
            name='password' 
            className="form-control" 
            placeholder="Contraseña"
            onChange={handleInputChange}
            />
        </div>
        <div className="form-group">
        <label>Rol</label>
            <select 
                className="form-control form-control-sm"
                name='roleId' 
                onChange={handleInputChange}
            >
                {
                    roles?.map((rol, index)=>{
                        return   <option key={index} value={rol.id}>{rol.name}</option>
                    })
                }
            </select>
        </div>
        <div className="form-group">
        <label>Rol</label>
            <select 
                className="form-control form-control-sm"
                name='departmentId' 
                onChange={handleInputChange}
            >
                {
                    departments?.map((department, index)=>{
                        return   <option key={index} value={department.id}>{department.name}</option>
                    })
                }
            </select>
        </div>
        <button className='btn btn-primary right m-2' onSubmit={saveUser}>Guardar</button>
        <Link href='/'> 
            <a className='btn btn-seccundary text-danger right m-2'>Cancelar</a>
        </Link>
        
        </form>
    </>
};

export default UserForm;