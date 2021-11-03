import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="bg-blue-400">
      <Head>
        <title> Home | Gestión de Proyectos</title>
      </Head>
      <p>Pagina de index</p>
      <Link href="/admin/usuarios">
        <a className="cursor-pointer">ir usuarios</a>
      </Link>
    </div>
  )
}

export default Home
