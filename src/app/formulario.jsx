'use client'
import { useState } from 'react'
import { firebaseApp } from './firebase'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { useRouter } from 'next/router'

const db = getFirestore(firebaseApp)

export function Formulario(){
    const valorInicial = {
        nombre: "",
        precio: "",
        cantidad: ""
    }

    const router = useRouter()

    const [dato, setDato] = useState(valorInicial)

    const obtenerInputs = (e)=>{
        const {name, value} = e.target
        setDato({...dato, [name]:value})
    }

    const guardarDatos = async(e)=>{
        e.preventDefault()
        try{
            await addDoc(collection(db, 'producto'),{
                ...dato
            })
            console.log("Datos guardados")
            router.push('/')
        }catch(error){
            console.log(error)
        }
    }


    return(
        <div className='flex items-center justify-center'>
            <form onSubmit={guardarDatos}>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                    <input type="text" name='nombre' value={dato.nombre} onChange={obtenerInputs} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nombre" required/>
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio</label>
                    <input type="text" name="precio" value={dato.precio} onChange={obtenerInputs} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="precio" required/>
                </div> 
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cantidad</label>
                    <input type="text" name="cantidad" value={dato.cantidad} onChange={obtenerInputs} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="precio" required/>
                </div>                
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>        


    )
}