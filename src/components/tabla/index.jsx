import { useRouter } from "next/router";
import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Title,
  Button,
  Icon
} from "@tremor/react";



function Tabla({productos}){

    const router = useRouter()

    return(
    <Card>
    <Title>Lista de productos</Title>
    <Table className="mt-5">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Nombre</TableHeaderCell>
          <TableHeaderCell>Precio</TableHeaderCell>
          <TableHeaderCell>Cantidad</TableHeaderCell>
          <TableHeaderCell>Accion</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {productos.map((product) => (
          <TableRow key={product.id}>
            <TableCell>{product.nombre}</TableCell>
            <TableCell>
              <Text>{product.precio}</Text>
            </TableCell>
            <TableCell>
              <Text>{product.cantidad}</Text>
            </TableCell>  
            <TableCell>
            <Button size="xs" color="red" onClick={()=>router.push(`/producto/${product.id}`)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>

            </Button>
            </TableCell>          
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
  )
}

export { Tabla }