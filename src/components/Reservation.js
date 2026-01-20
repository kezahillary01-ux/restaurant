import React from 'react'
import axios from 'axios';
import day from 'dayjs'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from "@fortawesome/free-regular-svg-icons"

const Reservation = () => {

    const [ reserv, setReserv ] = useState([])

    const getReservation = async () => {
        const { data } = await axios.get("http://localhost:5000/api/v1/reservation/getall")
        setReserv(data.data)
        console.log(reserv);
    }

  useEffect( () => {
    getReservation()
  }, [])

  return (
    <div class="newcustomers">
        <div class="headorders">
            <h2>Recent Customers</h2>
        </div>
        <table>
            {
                reserv.map((res) => (
                    <tr>
                        <td width="60px">
                        <FontAwesomeIcon icon={faUser} />
                        </td>
                        <td>{res.customerName}</td>
                        <td>{day(res.date).format("MM/DD/YYYY")}</td>
                        <td>{res.time}</td>
                        <td>{res.partySize}</td>
                        <td>{res.phoneNumber}</td>
                        
                    </tr>
                ))
            }
        </table>
    </div>
  )
}

export default Reservation