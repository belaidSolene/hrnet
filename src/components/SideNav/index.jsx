import { NavLink } from 'react-router-dom'

import styled from 'styled-components'

export default function SideNav() {
	return (
		<aside>
			<nav>
				<StyledNavLink to='/'>+ Add Employee</StyledNavLink>
				<StyledNavLink to='/employees'>
					Employees' List
				</StyledNavLink>
			</nav>
		</aside>
	)
}

const StyledNavLink = styled(NavLink)`
	display: block;
`

{
	/* <aside className="sidebar">
<nav>
  <ul>
    <li>
      <Link to="/" className={location.pathname === '/' ? 'link-employee active' : 'link-employee'}>
        <img src={plus} alt="" className='png-employee-list'/>
        <p className='txt-employee'>Add Employee</p>
      </Link>
    </li>
    <li>
      <Link to="/employees" className={location.pathname === '/employees' ? 'link-employee active' : 'link-employee'}>
        <img src={list} alt="" className='png-employee-list'/>
        <p className='txt-employee'>List Employees</p>
      </Link>
    </li>
  </ul>
</nav>
</aside>
.sidebar {
    background-color: white;
    width: 280px; 
    height: 100vh;
    border-right: 1px solid rgb(212, 211, 211);
  
    nav ul {
      list-style: none;
      padding: 0;
      margin-top: 30px;
    }
    nav li {
      margin-bottom: 10px;
      a {
        display: flex; 
        align-items: center; 
        padding: 0 20px; 
        font-size: 0.9rem;
        font-weight: 400;
        text-decoration: none;
        color: rgb(144, 134, 134);
        cursor: pointer;
        border: none;
        transition: all 0.2s ease; 
      }
    }
  
    .emoji-employee {
      width: 18px;
      font-size: 20px;
      margin-right: 10px;
    }
  
    .png-employee-list {
      width: 20px;
      height: 18px;
      margin-right: 29px;
    }
  }
  
  .link-employee.active {
    border-left: 4px solid #6ed217;
    color: rgb(37, 37, 37);
    background-color: #f2f8f1d1;
    padding-left: 20px; 
  }
  
  .link-employee:hover {
    background-color: #f7f7f7; 
  } */
}
