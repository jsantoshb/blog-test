
const postUser = (data) => new Promise((resolve, reject)=>{
    fetch(`http://${process.env.BASE_URL}/users`,
    {
        method: 'POST',
        body: data,
         headers:{
         'Accept': 'application/json',
         'Content-Type': 'application/json'
        }
    })
    .then(res=> 
        resolve(res.json())
    )
    .catch(err=> {
        reject(err);
    });
})

const getAll = () => new Promise((resolve, reject)=>{
    fetch(`http://${process.env.BASE_URL}/users?filter[include][0][relation]=role&filter[include][1][relation]=department`)
    .then(res=> 
        resolve(res.json())
    )
    .catch(err=> {
        reject(err);

    });
})


const getById = (id) => new Promise((resolve, reject)=>{
    fetch(`http://${process.env.BASE_URL}/users/${id}`)
    .then(res=> 
        
        resolve(res.json())
    )
    .catch(err=> {
        reject(err);

    });
})


const deleteUser = (id) => new Promise((resolve, reject)=>{
    fetch(`http://${process.env.BASE_URL}/users/${id}`,
    {
        method: 'DELETE',
    })
    .then(res=> 
        
        resolve(res.json())
    )
    .catch(err=> {
        reject(err);

    });
})

export default {getAll, getById, postUser, deleteUser}