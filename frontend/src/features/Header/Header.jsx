import React from 'react';
import { useSelector } from 'react-redux';
import Log from './Log';
import Reg from './Reg';

function Header() {
  const datas = useSelector((state) => state.auth);
  const { name } = datas;
  console.log(name, 'nameeeeeeee');
  async function logout(e) {
    e.preventDefault();
    if (e) {
      const response = await fetch('/api/auth/logout');
      const data = await response.json();
      if (data.logout) {
        window.location.replace('/');
      }
    }
  }
  return (
    <nav className="navbar">
      <div className="container">
        <div>
          <a className="navbar-brand" href="/">CF Runway</a>
        </div>
        <ul className="nav justify-content-end">
          {name
            ? (
              <li className="nav-item">
                <button type="button" className="btn btn-dark btn-header" id="logout" onClick={logout}>Выход</button>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <button type="button" className="btn btn-dark btn-header" data-bs-toggle="modal" data-bs-target="#logModal">Вход</button>
                </li>
                <li className="nav-item">
                  <button type="button" className="btn btn-dark btn-header" data-bs-toggle="modal" data-bs-target="#regModal" id="reg-link">Регистрация</button>
                </li>
              </>
            )}

        </ul>
      </div>
      <Log />
      <Reg />
    </nav>
  );
}

export default Header;
