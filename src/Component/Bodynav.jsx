import React from 'react'
import '../Style/Bodynav.css'
import { ChatRightQuote, ChatRightQuoteFill, Quote } from 'react-bootstrap-icons'

const Bodynav = () => {
    return (
        <>
            <div className='body-part'>
                <div className="body-navbar">
                    <div className="b-navpoints">Overview</div>
                    <div className="b-navpoints">Eligibility</div>
                    <div className="b-navpoints">Preparation</div>
                    <div className="b-navpoints">About Treatment</div>
                    <div className="b-navpoints">Post-Treatment Care</div>
                    <div className="b-navpoints">Recovery Tips</div>
                    <div className="b-navpoints">FAQs</div>
                    <div className="b-navpoints">Patient Stories</div>
                </div>

                <div className='body-cont'>
                    <div className="body-contents"><br></br>
                        <div className='content-title'>Treatment Overview.</div><br></br>
                        <div>Lorem incididunt ut labore ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div><br></br>
                        <div>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</div><br></br>
                        <div>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</div>
                    </div>
                    <div className='image-div'>
                        <img loading="lazy"  src="https://news.emory.edu/stories/2023/04/winship_researchers_find_lorlatinib_to_be_safe_and_effective_treatment_for_high-risk_neuroblastoma/thumbs/story_main.jpg" alt="no image" />
                    </div>
                </div>

                <div className="whole-body-part">
                    
                    {/* absolute part */}

                    <div className="form-card">
                        <div style={{color: 'rgb(3, 74, 206)', fontStyle:'italic', fontWeight:'bolder', fontSize:'1.5em', fontFamily:'sans-serif'}}>Need Help ?</div>
                        <div>Just let us know. We will be happy to assist you.</div>
                        <div style={{display:'flex', flexDirection:'column', padding:'10px'}}>
                            <input type="text" placeholder='Full Name' style={{margin:'10px 0'}} />
                            <input type="text" placeholder='Email' style={{margin:'10px 0'}} />
                            <input type="text" placeholder='Phone Number' style={{margin:'10px 0'}} />
                            <textarea rows={2} cols={3} placeholder='Describe Your Treatment Requirement' style={{margin:'10px 0'}} />
                            <button type='submit' >Send Enquiry</button>
                        </div>
                    </div>


                    <div className='body-cont'>
                        <div className="body-contents"><br></br>
                            <div className='content-title'>Eligibility For Treatment.</div><br></br>
                            <div>Any individual who has tried diet and exercise but failed to lose weight is considered as a good candidate for gastric bypass. Although gastric bypass aids in weight loss, it is not an appropriate option for everyone. Based on the overall health and certain medical guidelines, the doctor will decide whether you are eligible for gastric bypass or not.</div><br></br>
                            <div>In general, gastric bypass could be a good option if:</div><br></br>
                            <ul>
                                <li>The BMI (body mass index) is 40 or more</li>
                                <li>Your BMI is 30 or more with severe weight-related health conditions like type-2 diabetes and high blood pressure</li>
                                <li>You are willing to make permanent changes in the lifestyle</li>
                            </ul>
                        </div>
                    </div>

                    <div className='body-cont'>
                        <div className="body-contents"><br></br>
                            <div className='content-title'>Preparation Before Treatment.</div><br></br>
                            <div>Any individual who has tried diet and exercise but failed to lose weight is considered as a good candidate for gastric bypass. Although gastric bypass aids in weight loss, it is not an appropriate option for everyone. Based on the overall health and certain medical guidelines, the doctor will decide whether you are eligible for gastric bypass or not.</div><br></br>
                            <div>In general, gastric bypass could be a good option if:</div><br></br>
                            <ul>
                                <li>The BMI (body mass index) is 40 or more</li>
                                <li>Your BMI is 30 or more with severe weight-related health conditions like type-2 diabetes and high blood pressure</li>
                                <li>You are willing to make permanent changes in the lifestyle</li>
                            </ul>
                        </div>
                    </div>

                    <div className='body-cont'>
                        <div className="body-contents"><br></br>
                            <div className='content-title'>About Treatment.</div><br></br>
                            <div>Any individual who has tried diet and exercise but failed to lose weight is considered as a good candidate for gastric bypass. Although gastric bypass aids in weight loss, it is not an appropriate option for everyone. Based on the overall health and certain medical guidelines, the doctor will decide whether you are eligible for gastric bypass or not.</div><br></br>
                            <div>In general, gastric bypass could be a good option if:</div><br></br>
                            <ul>
                                <li>The BMI (body mass index) is 40 or more</li>
                                <li>Your BMI is 30 or more with severe weight-related health conditions like type-2 diabetes and high blood pressure</li>
                                <li>You are willing to make permanent changes in the lifestyle</li>
                            </ul>
                        </div>
                    </div>

                    <div className='body-cont'>
                        <div className="body-contents"><br></br>
                            <div className='content-title'>Post-Treatment Care Treatment.</div><br></br>
                            <div>Any individual who has tried diet and exercise but failed to lose weight is considered as a good candidate for gastric bypass. Although gastric bypass aids in weight loss, it is not an appropriate option for everyone. Based on the overall health and certain medical guidelines, the doctor will decide whether you are eligible for gastric bypass or not.</div><br></br>
                            <div>In general, gastric bypass could be a good option if:</div><br></br>
                            <ul>
                                <li>The BMI (body mass index) is 40 or more</li>
                                <li>Your BMI is 30 or more with severe weight-related health conditions like type-2 diabetes and high blood pressure</li>
                                <li>You are willing to make permanent changes in the lifestyle</li>
                            </ul>
                        </div>
                    </div>

                    <div className='body-cont'>
                        <div className="body-contents"><br></br>
                            <div className='content-title'>Treatment Recovery Tips.</div><br></br>
                            <div>Any individual who has tried diet and exercise but failed to lose weight is considered as a good candidate for gastric bypass. Although gastric bypass aids in weight loss, it is not an appropriate option for everyone. Based on the overall health and certain medical guidelines, the doctor will decide whether you are eligible for gastric bypass or not.</div><br></br>
                            <div>In general, gastric bypass could be a good option if:</div><br></br>
                            <ul>
                                <li>The BMI (body mass index) is 40 or more</li>
                                <li>Your BMI is 30 or more with severe weight-related health conditions like type-2 diabetes and high blood pressure</li>
                                <li>You are willing to make permanent changes in the lifestyle</li>
                            </ul>
                        </div>
                    </div>

                    <div className='body-cont' style={{ borderBottom: '1px dashed blue' }}>
                        <div className="body-contents TreatmentFAQs"><br></br>
                            <div className='content-title'>Treatment FAQs.</div><br></br>
                            <div style={{ borderTop: '1px solid rgb(85, 85, 113)' }}>+ How do I know the clinic I am searching is verified?</div><br></br>
                            <div style={{ borderTop: '1px solid rgb(85, 85, 113)' }}>+ I can't travel alone so can some family member or friend of mine accompany me?</div><br></br>
                            <div style={{ borderTop: '1px solid rgb(85, 85, 113)' }}>- Can I see my doctor before I decide and what about my post recovery?</div><br></br>
                            <div style={{ borderTop: '1px solid blue' }}>Yes, pre and post treatment consultation can be done. You can speak to the doctor at the most appropriate time (before you decide to travel) to boost your confidence. The team at Mediretreats will also help you with arranging the OPD'S after the surgeries.</div>
                            <div style={{ borderTop: '1px solid blue', borderBottom: '1px solid rgb(85, 85, 113)' }} >+ How do I share my reports and medical cases with the clinic of my choice?</div><br></br>
                        </div>
                    </div>

                    <div className='body-cont'>
                        <div className="body-video">
                            <div className='content-title'>Patient Stories & Videos.</div><br></br>

                            <div className="cardBlock">
                                <div class="card" style={{ width: "22rem", height: '380px', padding: '10px' }}>
                                    <div style={{ display: 'flex' }}>
                                        <div style={{ fontSize: '12px', fontWeight: 'bold' }}>Underwent procedure for retinal detachment</div>
                                        &nbsp; &nbsp; &nbsp; &nbsp; <ChatRightQuoteFill color='pink' size={40} />
                                    </div>

                                    <img loading="lazy"  src="https://news.northwestern.edu/assets/Stories/2022/01/GettyImages-1181316878__FitMaxWzk3MCw2NTBd.jpg" class="card-img-top-bottom" alt="no image found" />
                                    <div class="card-body" style={{ display: 'flex', alignItems: 'center' }}>
                                        <div className="logopng" style={{ width: '20%' }}>
                                            <img loading="lazy"  style={{ width: '80%', borderRadius: '50%', objectFit: 'fill' }} src="https://images.unsplash.com/photo-1608681299041-cc19878f79f1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="title-pic" />
                                        </div>
                                        <div className="titlename">
                                            <div>Luke Olfert</div>
                                            <div style={{ fontSize: '10px' }}>New York, USA</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card" style={{ width: "22rem", height: '380px', padding: '10px' }}>
                                    <div style={{ display: 'flex' }}>
                                        <div style={{ fontSize: '12px', fontWeight: 'bold' }}>Underwent procedure for retinal detachment</div>
                                        &nbsp; &nbsp; &nbsp; &nbsp; <ChatRightQuoteFill color='pink' size={40} />
                                    </div>
                                    <div>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    </div>
                                    <div class="card-body" style={{ display: 'flex', alignItems: 'center' }}>
                                        <div className="logopng" style={{ width: '20%', height: '50px' }}>
                                            <img loading="lazy"  style={{ width: '80%', borderRadius: '50%', objectFit: 'cover' }} src="https://plus.unsplash.com/premium_photo-1679439492812-7aca28314e8a?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="title-pic" />
                                        </div>
                                        <div className="titlename">
                                            <div>Luke Olfert</div>
                                            <div style={{ fontSize: '10px' }}>Sydney, Australia</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Bodynav
