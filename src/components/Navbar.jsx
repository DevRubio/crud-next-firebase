import Link from "next/link"
const Navbar = () =>{
    return(
        <div className="flex border w-full h-20">
            <div className="flex ml-16 list-none place-items-center">
                <Link href="/"> 
                   
                        Panel de Control
                   
                </Link>
            </div>
        </div>
    )
}

export {Navbar}