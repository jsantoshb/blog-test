
const postDepartment = (data) => new Promise((resolve, reject)=>{
    fetch(`http://${process.env.BASE_URL}/departments`,
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
    fetch(`http://${process.env.BASE_URL}/departments?filter[include][0][relation]=users`)
    .then(res=> 
        resolve(res.json())
    )
    .catch(err=> {
        reject(err);

    });
})


const getById = (id) => new Promise((resolve, reject)=>{
    fetch(`http://${process.env.BASE_URL}/departments/${id}`)
    .then(res=> 
        
        resolve(res.json())
    )
    .catch(err=> {
        reject(err);

    });
})

const deleteDepartment = (id) => new Promise((resolve, reject)=>{
    fetch(`http://${process.env.BASE_URL}/departments/${id}`,
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

export default {getAll, getById, postDepartment, deleteDepartment}