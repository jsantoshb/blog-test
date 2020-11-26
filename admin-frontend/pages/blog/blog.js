import Container from '../../components/Container';
import blogApi from '../../api/blogApi';
import Link from 'next/link';
import dateformat from 'dateformat';

export default function Blog({blog}) {
  return (
   <Container>
     <h1>Blog site</h1>
     <div className="Container">
        <h4 className="card-title">{blog.title}</h4>
        <p className="card-text">{blog.content}
        </p>
        <p className='text-capitalize'>Autor: {blog.user?.name}</p>
        <p className='text-capitalize'> Fecha: {dateformat(blog.created, 'dd-mm-yyyy')}</p>
        <div>
        <Link href='/'>
                <a className="btn btn-primary right">Volver</a>
        </Link>
        </div>
     </div> 
   </Container>
  )
}

Blog.getInitialProps =  async ({query}) => {
  console.log(query)
    const resp = await blogApi.getById(query.id)
    .catch(err=> console.log);

    if(resp.error)
      return {blog:undefined}
    else
      return { blog: resp }
  }