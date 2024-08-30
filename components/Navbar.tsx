import { Navitems } from "@/constants"

const Navbar = () => {
  return (
    <header className="w-full  flex items-center p-2 justify-between">
        <h2 className="text-3xl font-serif text-gray-100">VA</h2>
        <nav className="mr-10">
            <ul className="hidden text-uppercase lg:flex lg:justify-center lg:items-center lg:gap-6">
                {Navitems.map((items,index)=>(
                    <li key={index}><a href={items.href}>{items.name}</a></li>
                ))}   
            </ul>
        </nav>
    </header>
  )
}

export default Navbar