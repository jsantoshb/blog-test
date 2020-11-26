import Container from '../components/Container';
import Link from 'next/link';
import dateformat from 'dateformat';
import blogApi from '../api/blogApi';

export default function Index({blogs}) {
  return (
   <Container>
     <div className="mb-4">
      <h1>Blog site</h1> 
      <div className="flex-row-reverse d-flex">
      <Link href="/blog/newPost"><a className="btn btn-info right">Nuevo</a></Link>
    </div>
      
     </div>

     <div className="Container">
      { !blogs || blogs?.length == 0 ? 'Cargando...' :
            blogs.map((item, index)=>{
                return <div key={index} className="card">
                            <div className="card-body">
                                <h4 className="card-title">{item.title}</h4>
                                <p className="card-text">
                                  {
                                    item.content.length > 150 ? 
                                    item.content.slice(0,150) + ' [...]' :
                                    item.content
                                  }
                                </p>
                                <p className='text-capitalize'>Autor: {item.user?.name}</p>
                                <p className='text-capitalize'> Fecha: {dateformat(item.created, 'dd-mm-yyyy')}</p>
                                <div>
                                <Link href={{
                                        pathname: '/blog/blog',
                                        query: { id: item.id },
                                    }}>
                                        <a className="btn btn-primary right">Ver</a>
                                </Link>
                                </div>
                             
                            </div>
                        </div> 
            })
        } 
     </div> 
   </Container>
  )
}

Index.getInitialProps = async () => {
    const resp = await blogApi.getAll()
    .catch(err=> err)
  
    if(resp.error)
      return {blogs:[]}
    else
      return {blogs:resp}
  }