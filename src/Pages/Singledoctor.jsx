import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Singledoctor() {
    let [singledoctor, setsingledoctor] = useState([])
    let { id } = useParams();
    // console.log(id);
    useEffect(() => {
        axios.get(`http://localhost:8099/singledoctor/${id}`).then(res => {
            // console.log(res.data);
            setsingledoctor(res.data.data)
        })
    }, [])
    console.log(singledoctor.Department);
    return (
        <div>
            <section class="page-title bg-1">
                <div class="overlay"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="block text-center">
                                <span class="text-white">Doctor Details</span>
                                <h1 class="text-capitalize mb-5 text-lg">{singledoctor.Doctor_Name}</h1>

                                <ul class="list-inline breadcumb-nav">
                                    <li class="list-inline-item"><a href="index.html" class="text-white">Home</a></li>
                                    <li class="list-inline-item"><span class="text-white">/</span></li>
                                    <li class="list-inline-item"><a href="#" class="text-white-50">Doctor Details</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="section doctor-single">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-6">
                            <div class="doctor-img-block">
                                <img src={`http://localhost:8099/${singledoctor.Image}`} alt="" class="img-fluid w-100" />

                                <div class="info-block mt-4">
                                    <h4 class="mb-0">{singledoctor.Doctor_Name}</h4>
                                    <p>{ }</p>

                                    <ul class="list-inline mt-4 doctor-social-links">
                                        <li class="list-inline-item"><a href="#!"><i class="icofont-facebook"></i></a></li>
                                        <li class="list-inline-item"><a href="#!"><i class="icofont-twitter"></i></a></li>
                                        <li class="list-inline-item"><a href="#!"><i class="icofont-skype"></i></a></li>
                                        <li class="list-inline-item"><a href="#!"><i class="icofont-linkedin"></i></a></li>
                                        <li class="list-inline-item"><a href="#!"><i class="icofont-pinterest"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-8 col-md-6">
                            <div class="doctor-details mt-4 mt-lg-0">
                                <h2 class="text-md">Introducing myself</h2>
                                <div class="divider my-4"></div>
                                <p>{singledoctor.About_myself}</p>

                                <a href="appoinment.html" class="btn btn-main-2 btn-round-full mt-3">Make an Appoinment<i
                                    class="icofont-simple-right ml-2  "></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section doctor-qualification gray-bg">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="section-title">
                                <h3>My Educational Qualifications</h3>
                                <div class="divider my-4"></div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-6 mb-4 mb-lg-0">
                            <div class="edu-block mb-5">
                                <span class="h6 text-muted">Year(2005-2007) </span>
                                <h4 class="mb-3 title-color">MBBS, M.D at University of Wyoming</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi doloremque harum, mollitia, soluta maxime
                                    porro veritatis fuga autem impedit corrupti aperiam sint, architecto, error nesciunt temporibus! Vel quod,
                                    dolor aliquam!</p>
                            </div>

                            <div class="edu-block">
                                <span class="h6 text-muted">Year(2007-2009) </span>
                                <h4 class="mb-3 title-color">M.D. of Netherland Medical College</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi doloremque harum, mollitia, soluta maxime
                                    porro veritatis fuga autem impedit corrupti aperiam sint, architecto, error nesciunt temporibus! Vel quod,
                                    dolor aliquam!</p>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="edu-block mb-5">
                                <span class="h6 text-muted">Year(2009-2010) </span>
                                <h4 class="mb-3 title-color">MBBS, M.D at University of Japan</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi doloremque harum, mollitia, soluta maxime
                                    porro veritatis fuga autem impedit corrupti aperiam sint, architecto, error nesciunt temporibus! Vel quod,
                                    dolor aliquam!</p>
                            </div>

                            <div class="edu-block">
                                <span class="h6 text-muted">Year(2010-2011) </span>
                                <h4 class="mb-3 title-color">M.D. of Canada Medical College</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi doloremque harum, mollitia, soluta maxime
                                    porro veritatis fuga autem impedit corrupti aperiam sint, architecto, error nesciunt temporibus! Vel quod,
                                    dolor aliquam!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="section doctor-skills">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4">
                            <h3>My skills</h3>
                            <div class="divider my-4"></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In architecto voluptatem alias, aspernatur
                                voluptatibus corporis quisquam? Consequuntur, ad, doloribus, doloremque voluptatem at consectetur natus eum
                                ipsam dolorum iste laudantium tenetur.</p>
                        </div>
                        <div class="col-lg-4">
                            <div class="skill-list">
                                <h5 class="mb-4">Expertise area</h5>
                                <ul class="list-unstyled department-service">
                                    <li><i class="icofont-check mr-2"></i>International Drug Database</li>
                                    <li><i class="icofont-check mr-2"></i>Stretchers and Stretcher Accessories</li>
                                    <li><i class="icofont-check mr-2"></i>Cushions and Mattresses</li>
                                    <li><i class="icofont-check mr-2"></i>Cholesterol and lipid tests</li>
                                    <li><i class="icofont-check mr-2"></i>Critical Care Medicine Specialists</li>
                                    <li><i class="icofont-check mr-2"></i>Emergency Assistance</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="sidebar-widget  gray-bg p-4">
                                <h5 class="mb-4">Make Appoinment</h5>

                                <ul class="list-unstyled lh-35">
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
                                    <h3 class="text-color-2">+23-4565-65768</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Singledoctor