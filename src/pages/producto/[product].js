import { firebaseApp } from "@/app/firebase"
import { deleteDoc, doc, getDoc, getFirestore } from "firebase/firestore"
import { useRouter } from "next/router"
import { Button, Card, Metric, Text, Icon } from "@tremor/react";

const db = getFirestore(firebaseApp)

export default function Producto({producto}){
    const { query } = useRouter()
    const router = useRouter()
    const deleteProduct = async()=>{
        const {product} = query
        await deleteDoc(doc(db, 'producto', product))
        router.push('/')
    }
    return(
        <div className="">
            <Card className="max-w-xs mx-auto" decoration="top" decorationColor="indigo">
                <Text>{producto.nombre}</Text>
                <Metric>$ {producto.precio}</Metric>
                <Text>{producto.cantidad}</Text>
                <Button color="red" onClick={deleteProduct}>Eliminar</Button>
                <Button color="blue" onClick={()=>router.push('/')}>Volver</Button>
            </Card>
        </div>
    )
}

export async function getServerSideProps({query:{product}}){
    const docRef = doc(db,'producto', product)
    const docSnap = await getDoc(docRef)
    const producto = docSnap.data()

    return{
        props:{
            producto
        }
    }
}