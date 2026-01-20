import React from "react";
import axios from 'axios';
import day from 'dayjs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { useEffect, useState } from 'react';

const Home = ({socket}) => {

    const [ order, setOrder ] = useState([])
    const [ reserv, setReserv ] = useState([])

    const getOrders = async () => {
        const { data } = await axios.get("http://localhost:5000/api/v1/orders/getall")
        setOrder(data.data)
        socket.emit("New notification", order)
        console.log(order);
    }

    const getReservation = async () => {
        const { data } = await axios.get("http://localhost:5000/api/v1/reservation/getall")
        setReserv(data.data)
        socket.emit("New notification", reserv)
        console.log(reserv);
    }

  useEffect( () => {
    getOrders()
    getReservation()
  }, [])



    return (
        <div class="main">
                        <div class="topbar">
                            <div class="toggle">
                                <ion-icon name="menu-outline"></ion-icon>
                            </div>


                            <div class="search">
                                <label>
                                    <input type="text" placeholder="Search here"></input>
                                    <ion-icon name="search-outline"></ion-icon>
                                </label>
                            </div>


                            <div class="user">
                                <img src="Customer/customer 4.jfif" alt=""></img>
                            </div>
                        </div>
                        {/* CARDS */}
                        <div class="cardBox">
                            <div class="card">
                                <div>
                                    <div class="numbers">{order.length < 9 ? "0" + order.length : order.length}</div>
                                    <div class="cardName">Orders</div>
                                </div>

                                <div class="iconBx">
                                    <ion-icon name="eye-outline"></ion-icon>
                                </div>
                            </div>
                            <div class="card">
                                <div>
                                    <div class="numbers">{reserv.length < 9 ? "0" + reserv.length : reserv.length}</div>
                                    <div class="cardName">Reservations</div>
                                </div>

                                <div class="iconBx">
                                    <ion-icon name="cart-outline"></ion-icon>
                                </div>
                            </div>
                            <div class="card">
                                <div>
                                    <div class="numbers">284</div>
                                    <div class="cardName">Comments</div>
                                </div>

                                <div class="iconBx">
                                <ion-icon name="chatbubbles-outline"></ion-icon>
                                </div>
                            </div>
                            <div class="card">
                                <div>
                                    <div class="numbers">$7,240</div>
                                    <div class="cardName">Earnings</div>
                                </div>

                                <div class="iconBx">
                                    <ion-icon name="cash-outline"></ion-icon>
                                </div>
                            </div>
                        </div>
                                        {/* Order details list */}
                <div class="details">
                            <div class="recentOrders">
                                    <div class="cardHeader">
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
                                            {/* NEW CUSTOMERS */}
                            <div class="recentCustomers">
                                <div class="cardHeader">
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
                </div>
            </div>
    )
}

export default Home