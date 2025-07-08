import { ShoppingCart } from "lucide-react"
import { Link } from "react-router-dom"

interface NavbarProps {
  onCartClick: () => void
}

const Navbar: React.FC<NavbarProps> = ({ onCartClick }) => {
  return (
    <nav className=" text-black shadow px-4 py-3 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">MyShop</Link>
      <div className="flex items-center gap-5">
        <Link to="/" className="text-blue-600 hover:text-blue-800 mr-4">
          Home
        </Link>
        <button
          onClick={onCartClick}
          className="bg-blue-300 text-black px-4 py-2 flex gap-2 rounded hover:bg-gray-100"
        >
          <ShoppingCart /><span className="font-semibold">Cart</span>
      </button>
      </div>
    </nav>
  )
}

export default Navbar
