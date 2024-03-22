import { Link } from "react-router-dom"
const Nav = () => {
    return(
        <div>
            <ul className='flex'>
                <li className='p-3'>Home</li>
                <li className='p-3'>
                    <Link to="/playgame">Play</Link>
                </li>
                <li className='p-3'><Link to="/rules">Rules</Link>
                </li>
            </ul>
        </div>
    )

}
export default Nav