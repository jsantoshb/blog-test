
const getAll = () => new Promise((resolve, reject)=>{
    fetch(`http://${process.env.BASE_URL}/blogs?filter[include][0][relation]=user&filter[order]=created%20DESC`)
    .then(res=> 
        resolve(res.json())
    )
    .catch(err=> {
        reject(err);

    });
})

const getById = (id) => new Promise((resolve, reject)=>{
    fetch(`http://${process.env.BASE_URL}/blogs/${id}`)
    .then(res=> 
        resolve(res.json())
    )
    .catch(err=> {
        reject(err);

    });
})

const postBlog = (data) => new Promise((resolve, reject)=>{
    
    fetch(`http://${process.env.BASE_URL}/blogs`,
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

export default {getAll, getById, postBlog}
     