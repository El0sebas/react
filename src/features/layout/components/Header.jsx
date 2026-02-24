import React from "react"
import { NavLink } from "react-router-dom"

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        
        <NavLink to="/" className="navbar-brand fw-bold">
          Carrito de Compras
        </NavLink>

        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav me-3">

            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Inicio
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Artículos
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/props"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Props
              </NavLink>
            </li>

          </ul>

          <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar productos..."
            />
            <button className="btn btn-primary" type="submit">
              Buscar
            </button>
          </form>

        </div>
      </div>
    </nav>
  )
}