import React from 'react'
import { NavLink } from 'react-router-dom';
import css from './Layoyt.module.css';

const Layoyt = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li className={css.hideOnMobile}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? css.active : css.headerLink
                }
                to="/"
              >
                CH mobile
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Layoyt