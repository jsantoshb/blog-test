const post = (data) => new Promise((resolve, reject)=>{
    fetch(`http://${process.env.BASE_URL}/roles`,
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
    fetch(`http://${process.env.BASE_URL}/roles`)
    .then(res=> 
        resolve(res.json())
    )
    .catch(err=> {
        reject(err);

    });
})


const getById = (id) => new Promise((resolve, reject)=>{
    fetch(`http://${process.env.BASE_URL}/roles/${id}`)
    .then(res=> 
        
        resolve(res.json())
    )
    .catch(err=> {
        reject(err);

    });
})

export default {getAll, getById, post}