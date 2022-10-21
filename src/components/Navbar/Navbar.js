import CartWidget from '../CartWidget/CartWidget'
import { useState, useEffect } from 'react'
import './Navbar.css'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { db } from '../../services/firebase'

const NavBar = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const collectionRef = query(collection(db, 'categories'), orderBy('order'))

    getDocs(collectionRef).then(response => {
      console.log(response)

      const categoriesAdapted = response.docs.map(doc => {
        const data = doc.data()
        return { id: doc.id, ...data}
      })

      setCategories(categoriesAdapted)
    })
  }, [])

  console.log(categories)

  return (
    <nav className="NavBar" >
        <Link to='/'>
          <h3>Ecommerce</h3>
        </Link>
        <div className="Categories">
            { categories.map(cat => (
                <NavLink key={cat.id} to={`/category/${cat.slug}`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>{cat.label}</NavLink>
            ))}
            {/* <NavLink to='/category/celular' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Celular</NavLink>
            <NavLink to='/category/tablet' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Tablet</NavLink>
            <NavLink to='/category/notebook' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Notebook</NavLink> */}
        </div>
        <CartWidget />
    </nav>
  )
}

export default NavBar