import React from 'react'
import { Link } from 'react-router-dom'
import WithUser from '../Layouts/WithUser'

 function Home() {
  return (
    <div>
      <p><Link to='./Category'> گروه لبنیات</Link></p>
      <p><Link to='/detail'>عکس محصولات</Link></p>
    </div>
  )
}export default WithUser(Home)
