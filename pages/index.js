import Head from 'next/head'
import Link from 'next/link'
import Curso from '../components/Curso'
import Layout from '../components/Layout'
import Listado from '../components/Listado'
import ListadoBlog from '../components/ListadoBlog'



export default function Home({guitarras,curso,entradas}) {
  return (
  
      <Layout
        pagina='Inicio'
        guitarra={guitarras[3]}
        >
     <main className='contenedor'>
       <h1 className='heading'>Nuestra coleccion</h1>
      <Listado
        guitarras={guitarras}
        />
     </main>
     <Curso
        curso={curso}
     />
      <section className='contenedor'>
      <ListadoBlog 
          entradas={entradas}
      />
      </section>

     
      </Layout>
     
  
  )
}

export async function getServerSideProps(){
  const urlGuitarras = `${process.env.API_URL}/guitarras?_limit=6&_sort=created_at:desc`
  const urlCursos = `${process.env.API_URL}/cursos`
  const urlBlog = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`
  const [respGuitarras, respCursos,respBlog] = await Promise.all([
      fetch(urlGuitarras),
      fetch(urlCursos),
      fetch(urlBlog)
  ])

  const [ guitarras, curso,entradas] = await Promise.all([
    respGuitarras.json(),
    respCursos.json(),
    respBlog.json()
  ])
  return {
    props: {
      guitarras,
      curso,
      entradas
    }
  }

}
