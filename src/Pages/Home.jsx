import React from 'react'
import Banner from './HomepageComponents/Banner'
import PersonalCare from './HomepageComponents/PersonalCare'
import AwardWinning from './HomepageComponents/AwardWinning'
import Testimonial from './HomepageComponents/Testimonial'

function Home() {
    return (
        <div>
            <Banner/>
            <section class="features">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="feature-block d-lg-flex">
                                <div class="feature-item mb-5 mb-lg-0">
                                    <div class="feature-icon mb-4">
                                        <i class="icofont-surgeon-alt"></i>
                                    </div>
                                    <span>24 Hours Service</span>
                                    <h4 class="mb-3">Online Appoinment</h4>
                                    <p class="mb-4">Get ALl time support for emergency.We have introduced the principle of family medicine.</p>
                                    <a href="appoinment.html" class="btn btn-main btn-round-full">Make a appoinment</a>
                                </div>

                                <div class="feature-item mb-5 mb-lg-0">
                                    <div class="feature-icon mb-4">
                                        <i class="icofont-ui-clock"></i>
                                    </div>
                                    <span>Timing schedule</span>
                                    <h4 class="mb-3">Working Hours</h4>
                                    <ul class="w-hours list-unstyled">
                                        <li class="d-flex justify-content-between">Sun - Wed : <span>8:00 - 17:00</span></li>
                                        <li class="d-flex justify-content-between">Thu - Fri : <span>9:00 - 17:00</span></li>
                                        <li class="d-flex justify-content-between">Sat - sun : <span>10:00 - 17:00</span></li>
                                    </ul>
                                </div>

                                <div class="feature-item mb-5 mb-lg-0">
                                    <div class="feature-icon mb-4">
                                        <i class="icofont-support"></i>
                                    </div>
                                    <span>Emegency Cases</span>
                                    <h4 class="mb-3">1-800-700-6200</h4>
                                    <p>Get ALl time support for emergency.We have introduced the principle of family medicine.Get Conneted with us for any urgency .</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


           <PersonalCare/>

            <AwardWinning/>
            <section class="section appoinment">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 ">
                            <div class="appoinment-content">
                                <img src="images/about/img-3.jpg" alt="" class="img-fluid" />
                                <div class="emergency">
                                    <h2 class="text-lg"><i class="icofont-phone-circle text-lg"></i>+23 345 67980</h2>
                                </div>
                            </div>
                        </div>
                        {/* <div class="col-lg-6 col-md-10 ">
				<div class="appoinment-wrap mt-5 mt-lg-0">
					<h2 class="mb-2 title-color">Book appoinment</h2>
					<p class="mb-4">Mollitia dicta commodi est recusandae iste, natus eum asperiores corrupti qui velit . Iste dolorum atque similique praesentium soluta.</p>
					     <form id="#" class="appoinment-form" method="post" action="#">
                    <div class="row">
                         <div class="col-lg-6">
                            <div class="form-group">
                                <select class="form-control" id="exampleFormControlSelect1">
                                  <option>Choose Department</option>
                                  <option>Software Design</option>
                                  <option>Development cycle</option>
                                  <option>Software Development</option>
                                  <option>Maintenance</option>
                                  <option>Process Query</option>
                                  <option>Cost and Duration</option>
                                  <option>Modal Delivery</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form-group">
                                <select class="form-control" id="exampleFormControlSelect2">
                                  <option>Select Doctors</option>
                                  <option>Software Design</option>
                                  <option>Development cycle</option>
                                  <option>Software Development</option>
                                  <option>Maintenance</option>
                                  <option>Process Query</option>
                                  <option>Cost and Duration</option>
                                  <option>Modal Delivery</option>
                                </select>
                            </div>
                        </div>

                         <div class="col-lg-6">
                            <div class="form-group">
                                <input name="date" id="date" type="text" class="form-control" placeholder="dd/mm/yyyy"/>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="form-group">
                                <input name="time" id="time" type="text" class="form-control" placeholder="Time"/>
                            </div>
                        </div>
                         <div class="col-lg-6">
                            <div class="form-group">
                                <input name="name" id="name" type="text" class="form-control" placeholder="Full Name"/>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="form-group">
                                <input name="phone" id="phone" type="Number" class="form-control" placeholder="Phone Number"/>
                            </div>
                        </div>
                    </div>
                    <div class="form-group-2 mb-4">
                        <textarea name="message" id="message" class="form-control" rows="6" placeholder="Your Message"></textarea>
                    </div>

                    <a class="btn btn-main btn-round-full" href="appoinment.html" >Make Appoinment <i class="icofont-simple-right ml-2  "></i></a>
                </form>
            </div> */}
                        {/* </div> */}
                    </div>
                </div>
            </section>
            <Testimonial/>
            <section class="section clients">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-7">
                            <div class="section-title text-center">
                                <h2>Partners who support us</h2>
                                <div class="divider mx-auto my-4"></div>
                                <p>Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="row clients-logo">
                        <div class="col-lg-2">
                            <div class="client-thumb">
                                <img src="images/about/1.png" alt="" class="img-fluid" />
                            </div>
                        </div>
                        <div class="col-lg-2">
                            <div class="client-thumb">
                                <img src="images/about/2.png" alt="" class="img-fluid" />
                            </div>
                        </div>
                        <div class="col-lg-2">
                            <div class="client-thumb">
                                <img src="images/about/3.png" alt="" class="img-fluid" />
                            </div>
                        </div>
                        <div class="col-lg-2">
                            <div class="client-thumb">
                                <img src="images/about/4.png" alt="" class="img-fluid" />
                            </div>
                        </div>
                        <div class="col-lg-2">
                            <div class="client-thumb">
                                <img src="images/about/5.png" alt="" class="img-fluid" />
                            </div>
                        </div>
                        <div class="col-lg-2">
                            <div class="client-thumb">
                                <img src="images/about/6.png" alt="" class="img-fluid" />
                            </div>
                        </div>
                        <div class="col-lg-2">
                            <div class="client-thumb">
                                <img src="images/about/3.png" alt="" class="img-fluid" />
                            </div>
                        </div>
                        <div class="col-lg-2">
                            <div class="client-thumb">
                                <img src="images/about/4.png" alt="" class="img-fluid" />
                            </div>
                        </div>
                        <div class="col-lg-2">
                            <div class="client-thumb">
                                <img src="images/about/5.png" alt="" class="img-fluid" />
                            </div>
                        </div>
                        <div class="col-lg-2">
                            <div class="client-thumb">
                                <img src="images/about/6.png" alt="" class="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home