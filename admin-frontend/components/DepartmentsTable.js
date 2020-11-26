
import departmentApi from '../api/departmentApi';
import React from 'react'
import Notiflix from 'notiflix';

const DepartmentsTable = () => {

    const [departments, setDepartments] = React.useState([]);

    React.useEffect(async() => { 
        loadDepartments();
    },[]);

    const loadDepartments= async ()=>
    {
        const resp = await departmentApi.getAll()
        .catch(err=> console.log);

        if(!resp.error)
            setDepartments(resp)
    }

    const deleteDepartment = async (id) =>
    {
        Notiflix.Confirm.Show( 
            'Eliminar Usuario', 
            'Estas seguro de eliminar el usuario seleccionado?', 'Si', 'No',
         async () => { 
            const resp = await departmentApi.deleteDepartment(id)
            .catch(err=> console.log);

            if(!resp.error)
            {
            loadDepartments()

            Notiflix.Notify.Success('Departamento eliminado correctamente')
            }
        }); 
    }

  return (
     <div className="Container mt-5">
        <h4 className="text-info">Lista de departamentos</h4>
        <table className="table">
           <caption>{!departments ? 'No se encontraron departamentos' : `Se encontraron ${departments.length} departamentos`}</caption>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Admin</th>
                    <th scope="col"># Usuarios</th>
                    <th scope="col"> ... </th>
                </tr>
            </thead>
            <tbody>
                {
                   departments?.map((department, index)=>{
                    return <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{department.name}</td>
                                <td> 
                                    <input className="form-check-input" 
                                    type="checkbox" 
                                    name="isAdmin" 
                                    checked ={department.isAdmin}
                                    readOnly
                                    />
                                </td>
                                <td>{department.users?.length || 0}</td>
                                <td><button className="btn btn-sm btn-danger" onClick={()=>{deleteDepartment(department.id)}}>Eliminar</button></td>
                            </tr>
                    })
                }
             
            </tbody>
        </table>
     </div> 
  )
}

export default DepartmentsTable;


