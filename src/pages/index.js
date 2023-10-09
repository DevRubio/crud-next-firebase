import Image from 'next/image'
import RootLayout from '../components/layout'
import { Formulario } from '../app/formulario'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { firebaseApp } from '../app/firebase'
import { Tabla } from '@/components/tabla'
const db = getFirestore(firebaseApp)



export default function Home({productos}) {
  return (
    <main className="min-h-screen">
        <div className='flex place-content-center font-semibold'>
          <h2>CRUD Next - Firebase</h2>          
        </div>
        <div className='grid grid-cols-2 items-center m-3'>
        <Formulario/> 
        <Tabla
          productos={productos}
        />
        </div>        
     
    </main>
  )
}


export const getServerSideProps = async(context)=>{
  const querySnapshot = await getDocs(collection(db,'producto'))
        const docs = []
        querySnapshot.forEach((doc)=>{
          docs.push({...doc.data(), id: doc.id})
        })
        return{
          props:{
            productos: docs
          }
        }
}