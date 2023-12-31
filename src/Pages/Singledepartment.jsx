import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

function Singledepartment() {
    let [singledepartment, setsingledepartments] = useState([])
    let { id } = useParams()
    useEffect(() => {
        axios.get(`http://localhost:8099/singledepartment/${id}`).then(res => {
            console.log(res.data.data);
            setsingledepartments(res.data.data)
        })
    }, [])
    return (
        <div>
            <section class="page-title bg-1">
                <div class="overlay"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="block text-center">
                                <span class="text-white">Department Details</span>
                                <h1 class="text-capitalize mb-5 text-lg">Single Department</h1>

                                <ul class="list-inline breadcumb-nav">
                                    <li class="list-inline-item"><a href="index.html" class="text-white">Home</a></li>
                                    <li class="list-inline-item"><span class="text-white">/</span></li>
                                    <li class="list-inline-item"><a href="#" class="text-white-50">Department Details</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section department-single">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="department-img">
                                <img src={`http://localhost:8099/${singledepartment.big_image}`} alt="" class="img-fluid"/>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-8">
                            <div class="department-content mt-5">
                                <h3 class="text-md">Medecine and Health</h3>
                                <div class="divider my-4"></div>
                                <p >
                                    {singledepartment.big_description}
                                </p>
                                <p></p>


                                <h3 class="mt-5 mb-4">Services features</h3>
                                <div class="divider my-4"></div>
                                <ul class="list-unstyled department-service">
                                    <li><i class="icofont-check mr-2"></i>{singledepartment.services}</li>
                                    {/* <li><i class="icofont-check mr-2"></i>Stretchers and Stretcher Accessories</li>
                                    <li><i class="icofont-check mr-2"></i>Cushions and Mattresses</li>
                                    <li><i class="icofont-check mr-2"></i>Cholesterol and lipid tests</li>
                                    <li><i class="icofont-check mr-2"></i>Critical Care Medicine Specialists</li>
                                    <li><i class="icofont-check mr-2"></i>Emergency Assistance</li> */}
                                </ul>

                                <a href="appoinment.html" class="btn btn-main-2 btn-round-full">Make an Appoinment<i class="icofont-simple-right ml-2  "></i></a>
                            </div>
                        </div>

                        <div class="col-lg-4">
                            <div class="sidebar-widget schedule-widget mt-5">
                                <h5 class="mb-4">Time Schedule</h5>

                                <ul class="list-unstyled">
                                    <li class="d-flex justify-content-between align-items-center">
                                        <span>Monday - Friday</span>
                                        <span>9:00 - 17:00</span>
                                    </li>
                                    <li class="d-flex justify-content-between align-items-center">
                                        <span>Saturday</span>
                                        <span>9:00 - 16:00</span>
                                    </li>
                                    <li class="d-flex justify-content-between align-items-center">
                                        <span>Sunday</span>
                                        <span>Closed</span>
                                    </li>
                                </ul>

                                <div class="sidebar-contatct-info mt-4">
                                    <p class="mb-0">Need Urgent Help?</p>
                                    <h3>+23-4565-65768</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Singledepartment