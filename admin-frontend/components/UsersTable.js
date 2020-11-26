
import userApi from '../api/userApi';
import Link from 'next/link';
import dateformat from 'dateformat';
import React from 'react'
import Notiflix from 'notiflix';

const UsersTable = () => {

    const [users, setUsers] = React.useState([]);

    React.useEffect(async() => {
        loadUsers();
    },[]);

    const loadUsers = async ()=>
    {
        const resp = await userApi.getAll()
        .catch(err=> console.log);

        if(!resp.error)
            setUsers(resp)
    }

    const deleteUser = async (id) =>
    {
        Notiflix.Confirm.Show( 
            'Eliminar Usuario', 
            'Estas seguro de eliminar el usuario seleccionado?', 'Si', 'No',
         async function(){ 
            const resp = await userApi.deleteUser(id)
            .catch(err=> console.log);

            if(!resp.error)
            loadUsers()
        }); 
    }

  return (
     <div className="Container mt-5">
         <h4 className="text-info">Lista de usuarios</h4>
        <table className="table">
           <caption>{!users ? 'No se encontraron usuarios' : `Se encontraron ${users.length} usuarios`}</caption>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">email</th>
                    <th scope="col">Rol</th>
                    <th scope="col">Departamento</th>
                    <td scope="col"> ... </td>
                </tr>
            </thead>
            <tbody>
                {
                   users?.map((user, index)=>{
                    return <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role?.name}</td>
                                <td>{user.department?.name}</td>
                                <td><button className="btn btn-sm btn-danger" onClick={()=>{deleteUser(user.id)}}>Eliminar</button></td>
                            </tr>
                    })
                }
             
            </tbody>
        </table>
     </div> 
  )
}

export default UsersTable;


