import React from 'react';
import { Link } from 'react-router-dom';
import { faGem } from "@fortawesome/free-regular-svg-icons"
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { faUsers, faPaperPlane, faLock, faRightToBracket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navbar() {
  
    return (
        <div class="navigation">
        <ul>
            <li>
                <a href="#" className='menu-icons'>
                    <span class="icon">
                        <FontAwesomeIcon icon={faGem} size='xl' />
                    </span>
                    <span className="title-logo">Brand Name</span>
                </a>
            </li>

            <li>
                <a href="/dashboard" className='menu-icons'>
                    <span class="icon">
                        <FontAwesomeIcon icon={faHouse} size="lg"  />
                    </span>
                    <span class="title">Dashboard</span>
                </a>
            </li>

            <li>
                <Link to="/dashboard/orders" className='menu-icons'>
                    <span class="icon">
                        <FontAwesomeIcon icon={faUsers} size="lg" />
                    </span>
                    <span class="title">Orders</span>
                </Link>
            </li>

            <li>
                <Link to="/dashboard/reservation" className='menu-icons'>
                    <span class="icon">
                        <FontAwesomeIcon icon={faPaperPlane} size="lg" />
                    </span>
                    <span class="title">Reservations</span>
                </Link>
            </li>

            <li>
                <a href="#" className='menu-icons'>
                    <span class="icon"><FontAwesomeIcon icon={faLock} size="lg" /></span>
                    <span class="title">Password</span>
                </a>
            </li>

            <li>
                <a href="#" className='menu-icons'>
                    <span class="icon"><FontAwesomeIcon icon={faRightToBracket} size="lg" /></span>
                    <span class="title">Sign out</span>
                </a>
            </li>
        </ul>
    </div>
    )
  }

export default Navbar
