import Container from '../components/Container';
import UsersTable from '../components/UsersTable';
import DepartmentsTable from '../components/DepartmentsTable';
import Link from 'next/link'

export default function Admin() {
  return (
    <Container>
      <h1>Admin site</h1>
      <UsersTable />
      <div className="flex-row-reverse d-flex m-0 p-0">
        <Link href="/user/user"><a className="btn btn-sm btn-info right">Nuevo usuario</a></Link>
      </div>
      <DepartmentsTable />
      <div className="flex-row-reverse d-flex m-0 p-0">
        <Link href="/department/department"><a className="btn btn-sm btn-info right">Nuevo departamento</a></Link>
      </div>
    </Container>
  )
}
