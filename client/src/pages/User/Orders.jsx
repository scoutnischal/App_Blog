import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout'
import UserMenu from '../../components/UserMenu'
import axios from 'axios'
import { useAuth } from '../../components/context/Auth'
import {moment} from "moment"

const Orders = () => {
    const [auth, setAuth] = useAuth();
    const [orders, setOrders] = useState([]);
    const abc=[1];

    const getOrders = async () => {
        try {
            const { data } = await axios.get('/api/admin/orders');
            setOrders(data)

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        if (auth?.token) getOrders();
        //eslint-disable-next-line
    }, [auth?.token])

    return (
        <Layout title={"Orders-ecommerce"}>
            <div className="container-fluid p-3 m-3">
                <div className="row">
                    <div className="col-md-3">
                        <UserMenu />
                    </div>
                    <div className="col-md-9">
                        <h1> All Orders</h1>
                        {
                            abc?.map((o, i) => {
                                return (
                                    <div className='border shadow'>
                                        <table className='table'>
                                            <thead>
                                                <tr>
                                                    <td scope="col">#</td>
                                                    <td scope="col">Status</td>
                                                    <td scope="col">Buyer</td>
                                                    <td scope="col"> date</td>
                                                    <td scope="col">Payment</td>
                                                    <td scope="col">Quantity</td>
                                                </tr>
                                            </thead>
                                            {/* <tbody>
                                                <tr>
                                                    <td>{i + 1}</td>
                                                    <td>{o?.status}</td>
                                                    <td>{o?.buyer?.name}</td>
                                                    <td>{moment(o?.createAt).fromNow()}</td>
                                                    <td>{o?.payment.success ? "Success" : "Failed"}</td>
                                                    <td>{o?.products?.length}</td>
                                                </tr>
                                            </tbody> */}
                                        </table>

                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Orders