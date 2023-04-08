import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
    return(
        <NavStyled>
            <NavLink to='/' className={({ isActive }) => isActive ? 'active' : false}>
                Crear cuestionario
            </NavLink>

            <NavLink to='/cuestionarios' className={({ isActive }) => isActive ? 'active' : false}>
                Ver cuestionarios
            </NavLink>

            <NavLink to='/login' className={({ isActive }) => isActive ? 'active' : false}>
                Iniciar sesion
            </NavLink>
        </NavStyled>
    )
}

export default NavBar

const NavStyled = styled.nav`
    position: sticky;
    top: 0;
    display: flex;  
    align-items: center;
    z-index: 100;
    padding: 10px;
    margin-bottom: 3rem;
    border-bottom: 1px solid #b5e0ff;

    a{
        text-decoration: none;
        font-size: 13px;
        margin: 10px 30px;
    }

    a.active, a:hover{
        color: #b5e0ff;
    }
`