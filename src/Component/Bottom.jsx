import React from 'react'
import imglogo from '../logohospital1.png'

const Bottom = () => {
    return (
        <>
            <div className='bottom-part'>
                <div style={{ backgroundColor: 'rgba(37, 93, 198, 0.737)', textAlign: 'center', color: 'white', padding: '50px 0', fontWeight: 'bolder' }}>
                    <div>Stay healthy and strong to enjoy life</div>
                    <div style={{ fontSize: '2em' }}>We have team of healthcare experts</div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ backgroundColor: ' rgb(3, 74, 206)' }}><button style={{ backgroundColor: ' rgb(3, 74, 206)', outline: 'none', border: 'none', color: 'white', fontFamily: 'sans-serif', fontWeight: 'bold' }}>Get in Touch</button></div>
                        <div style={{ borderLeft: '1px solid white', marginLeft: '10px', padding: '10px' }}>+91 898 777 9999</div>
                    </div>
                </div>

                <div style={{ backgroundColor: 'rgb(2, 4, 7)', color: 'white' }}>
                    <div style={{ display: 'flex', padding: '50px 10px', justifyContent: 'space-around', width: '95%' }}>
                        <div>
                            Important Links
                            <ul style={{ listStyleType: 'disc' }}>
                                <li>Home</li>
                                <li>About Us</li>
                                <li>FAQs</li>
                                <li>Blog</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>

                        <div>
                            Top Hospitals
                            <ul>
                                <li>Apollo Hospital Delhi</li>
                                <li>Medanta Hospital Gurgaon</li>
                                <li>Max Hospital Delhi</li>
                                <li>Jaslok Hospital Mumbai</li>
                                <li>Artemis Hospital Gurgaon</li>
                                <li>Fortis Hospital Gurgaon</li>
                                <li>View All</li>
                            </ul>
                        </div>
                        <div>
                            Speciality Treatments
                            <ul>
                                <li>Knee Replacement Surgeon Urologist</li>
                                <li>Urologist</li>
                                <li>Spine Surgeon</li>
                                <li>ENT Surgeons</li>
                                <li>Orthopedic</li>
                                <li>Cardiologist</li>
                                <li>View All</li>
                            </ul>
                        </div>
                        <div>
                            Medical Tourism Destinations
                            <ul>
                                <li>Medical Tourism in India</li>
                                <li>Medical Tourism in Sri Lanka</li>
                                <li>Medical Tourism in UAE</li>
                                <li>View All</li>
                            </ul>
                        </div>
                    </div>

                    <div style={{ borderTop: '1px solid white', display: 'flex', justifyContent: 'space-around' }}>
                        <div style={{ width: '25%', display: 'flex', alignItems: 'center' }}>
                            <img loading="lazy" src={imglogo} style={{ width: '100%' }} alt="logo" />
                        </div>
                        <div style={{ width: '50%' }}>
                            <div style={{ fontWeight: 'bolder', fontSize: '1.5em' }}>About Aafiya Mediretreats</div>
                            <div>Aafiya Mediretreats is a free, confidential, independent resource for patients and industry providers. Our mission is to provide a central portal where pa- tients, Medical Tourism providers, hospitals, clinics, employers, and insurance companies can all find the information they need. Our site focuses on patients looking for specific knowledge in the fields of medical tourism, dental tourism, and health tourism.</div>
                        </div>
                        <div style={{ width: '20%', lineHeight: '32px', borderLeft: '1px solid white', padding: '10px' }}>
                            <div style={{ fontWeight: 'bolder', fontSize: '1em' }}>Follow Us On</div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <div><img loading="lazy" style={{ width: '25px' }} src="https://qph.cf2.quoracdn.net/main-qimg-c587a229e7a3bd5e84d8abb46504eb52-lq" alt="" /></div>
                                <div><img loading="lazy" style={{ width: '25px', marginLeft: '10px' }} src="https://seeklogo.com/images/T/twitter-2012-negative-logo-5C6C1F1521-seeklogo.com.png" alt="" /></div>
                                <div><img loading="lazy" style={{ width: '25px', marginLeft: '10px' }} src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-instagram-new-logo-vector-download-13.png" alt="" /></div>
                                <div><img loading="lazy" style={{ width: '65px', marginLeft: '10px', background: 'white' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/753px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="" /></div>
                            </div>
                            <div>
                                <div>Customer Service</div>
                                <div style={{ color: 'blue' }}>+91 9856555666</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', height:'50px',alignItems: 'center', fontWeight:'bold',justifyContent: 'space-around', backgroundColor: ' rgb(3, 74, 206)', color: 'white' }}>
                <div>Copyright © 2020 Aafiya Mediretreats. All Rights Reserved. Designed by Ideamagix.</div>
                <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', width:'29%'}}>
                    <div>Terms And Conditions</div>
                    <div>Privacy Policy</div>
                </div>
            </div>
        </>
    )
}

export default Bottom
