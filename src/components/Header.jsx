import { Link } from "react-router-dom"
function Header() {
  return (
    <div className="flex justify-between w-full p-5 mb-[120px] items-center bg-black max-lg:flex-col">

        <h1 className="text-3xl font-bold max-lg:pt-5">portfolio</h1>
        <ul className="flex justify-around text-[23px]  max-lg:pt-10">
            <li className="mx-10">
              <Link to="/">about</Link>
            </li>
            
            <li className="mx-10">
              <Link to="/projects">projects</Link>
            </li>
        </ul>

    </div>
  )
}

export default Header