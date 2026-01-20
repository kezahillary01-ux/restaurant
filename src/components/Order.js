import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from "@fortawesome/free-regular-svg-icons"

function Order() {
    const [ order, setOrder ] = useState([])

    const getOrders = async () => {
        const { data } = await axios.get("http://localhost:5000/api/v1/orders/getall")
        setOrder(data.data)
        console.log(order);
    }

  useEffect( () => {
    getOrders()
  }, [])

  return (
    <div class="neworders">
        <div class="recent">
        <div class="headorders">
            <h2>Recent Oders</h2>
            <a href="#" class="btn">View All</a>
        </div>
        <table>
            <thead>
                <tr>
                    <td>Picture</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Food Name</td>
                    <td>Count food</td>
                    <td>Extra food</td>
                    <td>Location</td>
                    <td>Message</td>
                    <td>Delevered</td>
                </tr>
            </thead>

            <tbody>
                {
                    order.map((details)=> (
                        <tr>
                        <td>
                            <FontAwesomeIcon icon={faUser} />
                        </td>
                        <td>{details.custname}</td>
                        <td>{details.email}</td>
                        <td>{details.foodname}</td>
                        <td>{details.countfood}</td>
                        <td>{details.extrafood}</td>
                        <td>{details.location}</td>
                        <td>{details.message}</td>
                        <td>
                            <span class="status delivered">{details.delevered}</span>
                        </td>
                    </tr>

                    ))
                }
            </tbody>
        </table>
    </div>
    </div>
  )
}

export default Order