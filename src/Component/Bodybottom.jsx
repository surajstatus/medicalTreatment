import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../Style/Bodybottom.css'


const Bodybottom = () => {
    return (
        <>
            <div className="body-bottom">
                <div style={{ color: 'red', fontStyle: 'italic', fontWeight: 'bolder', fontFamily: 'cursive', fontSize: '1.5em', textAlign: 'center', marginTop: '20px' }}>Doctors</div>
                <div style={{ color: 'brown', fontWeight: 'bolder', fontFamily: 'cursive', fontSize: '2em', textAlign: 'center' }}>Top Orthopaedic <span style={{ color: 'blue', fontFamily: 'sans-serif' }}>Doctors</span></div>
                <div className="carousel-card">
                    <OwlCarousel items={3} margin={1} loop={true} autoplay={true} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <div>
                            <div class="card" style={{ width: "17rem", height: '250px', padding: '10px' }}>

                                <img loading="lazy"  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top-bottom" height={'100%'} alt="no image found" />
                                <div class="card-body" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                                    <div className="titlename">
                                        <div style={{ fontStyle: 'italic', color: 'red', fontFamily: 'sans-serif' }}>Dr. Faique Falke</div>
                                        <div style={{ fontSize: '10px', fontWeight: 'bold' }}>Musaffah Industrial - Abu Dhabi</div>
                                        <div style={{ fontSize: '10px' }}>Doctor Degree & Specialist</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="card" style={{ width: "17rem", height: '250px', padding: '10px' }}>
                                
                                <img loading="lazy"  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top-bottom" height={'100%'} alt="no image found" />
                                <div class="card-body" style={{ display: 'flex', alignItems: 'center', justifyContent:'center' }}>
                                    
                                    <div className="titlename">
                                        <div style={{ fontStyle:'italic', color:'red', fontFamily:'sans-serif' }}>Dr. Faique Falke</div>
                                        <div style={{ fontSize: '10px', fontWeight:'bold' }}>Musaffah Industrial - Abu Dhabi</div>
                                        <div style={{ fontSize: '10px' }}>Doctor Degree & Specialist</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="card" style={{ width: "17rem", height: '250px', padding: '10px' }}>
                                
                                <img loading="lazy"  src="https://plus.unsplash.com/premium_photo-1661764878654-3d0fc2eefcca?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top-bottom" height={'100%'} alt="no image found" />
                                <div class="card-body" style={{ display: 'flex', alignItems: 'center', justifyContent:'center' }}>
                                    
                                    <div className="titlename">
                                        <div style={{ fontStyle:'italic', color:'red', fontFamily:'sans-serif' }}>Dr. Faique Falke</div>
                                        <div style={{ fontSize: '10px', fontWeight:'bold' }}>Musaffah Industrial - Abu Dhabi</div>
                                        <div style={{ fontSize: '10px' }}>Doctor Degree & Specialist</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="card" style={{ width: "17rem", height: '250px', padding: '10px' }}>
                                
                                <img loading="lazy"  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top-bottom" height={'100%'} alt="no image found" />
                                <div class="card-body" style={{ display: 'flex', alignItems: 'center', justifyContent:'center' }}>
                                    
                                    <div className="titlename">
                                        <div style={{ fontStyle:'italic', color:'red', fontFamily:'sans-serif' }}>Dr. Faique Falke</div>
                                        <div style={{ fontSize: '10px', fontWeight:'bold' }}>Musaffah Industrial - Abu Dhabi</div>
                                        <div style={{ fontSize: '10px' }}>Doctor Degree & Specialist</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="card" style={{ width: "17rem", height: '250px', padding: '10px' }}>
                                
                                <img loading="lazy"  src="https://plus.unsplash.com/premium_photo-1661764878654-3d0fc2eefcca?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top-bottom" height={'100%'} alt="no image found" />
                                <div class="card-body" style={{ display: 'flex', alignItems: 'center', justifyContent:'center' }}>
                                    
                                    <div className="titlename">
                                        <div style={{ fontStyle:'italic', color:'red', fontFamily:'sans-serif' }}>Dr. Faique Falke</div>
                                        <div style={{ fontSize: '10px', fontWeight:'bold' }}>Musaffah Industrial - Abu Dhabi</div>
                                        <div style={{ fontSize: '10px' }}>Doctor Degree & Specialist</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="card" style={{ width: "17rem", height: '250px', padding: '10px' }}>
                                
                                <img loading="lazy"  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top-bottom" height={'100%'} alt="no image found" />
                                <div class="card-body" style={{ display: 'flex', alignItems: 'center', justifyContent:'center' }}>
                                    
                                    <div className="titlename">
                                        <div style={{ fontStyle:'italic', color:'red', fontFamily:'sans-serif' }}>Dr. Faique Falke</div>
                                        <div style={{ fontSize: '10px', fontWeight:'bold' }}>Musaffah Industrial - Abu Dhabi</div>
                                        <div style={{ fontSize: '10px' }}>Doctor Degree & Specialist</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>


            {/* Hospital */}


            <div className="body-bottom-hospital">
                <div style={{ color: 'red', fontStyle: 'italic', fontWeight: 'bolder', fontFamily: 'cursive', fontSize: '1.5em', textAlign: 'center', marginTop: '20px' }}>Hospitals</div>
                <div style={{ color: 'brown', fontWeight: 'bolder', fontFamily: 'cursive', fontSize: '2em', textAlign: 'center' }}>Recommended <span style={{ color: 'blue', fontFamily: 'sans-serif' }}>Hospitals</span></div>
                <div className="carousel-card">
                    <OwlCarousel items={3} margin={1} autoplay={true} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <div>
                            <div class="card" style={{ width: "17rem", border:'1px dashed red' , height: '250px' }}>

                                <img loading="lazy"  src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top-bottom" height={'100%'} alt="no image found" />
                                <div class="card-body" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                                    <div className="titlename">
                                        <div style={{ fontSize: '10px', fontWeight: 'bold' }}>Apollo Hospitals</div>
                                        <div style={{ fontStyle: 'italic', color: 'red', fontFamily: 'sans-serif' }}>Bangalore</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="card" style={{ width: "17rem", border:'1px dashed red' , height: '250px' }}>
                                
                                <img loading="lazy"  src="https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top-bottom" height={'100%'} alt="no image found" />
                                <div class="card-body" style={{ display: 'flex', alignItems: 'center', justifyContent:'center' }}>
                                    
                                    <div className="titlename">
                                        <div style={{ fontSize: '10px', fontWeight:'bold' }}>APJ KM Hospital</div>
                                        <div style={{ fontStyle:'italic', color:'red', fontFamily:'sans-serif' }}>Hyderabad</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="card" style={{ width: "17rem", border:'1px dashed red' , height: '250px' }}>
                                
                                <img loading="lazy"  src="https://images.unsplash.com/photo-1626315869436-d6781ba69d6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top-bottom" height={'100%'} alt="no image found" />
                                <div class="card-body" style={{ display: 'flex', alignItems: 'center', justifyContent:'center' }}>
                                    
                                    <div className="titlename">
                                        <div style={{ fontSize: '10px', fontWeight:'bold' }}>IBM Private Hospital</div>
                                        <div style={{ fontStyle:'italic', color:'red', fontFamily:'sans-serif' }}>Lucknow</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="card" style={{ width: "17rem", border:'1px dashed red' , height: '250px' }}>
                                
                                <img loading="lazy"  src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top-bottom" height={'100%'} alt="no image found" />
                                <div class="card-body" style={{ display: 'flex', alignItems: 'center', justifyContent:'center' }}>
                                    
                                    <div className="titlename">
                                        <div style={{ fontSize: '10px', fontWeight:'bold' }}>KEM Hospital</div>
                                        <div style={{ fontStyle:'italic', color:'red', fontFamily:'sans-serif' }}>Mumbai</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="card" style={{ width: "17rem", border:'1px dashed red' , height: '250px' }}>
                                
                                <img loading="lazy"  src="https://images.unsplash.com/photo-1626315869436-d6781ba69d6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top-bottom" height={'100%'} alt="no image found" />
                                <div class="card-body" style={{ display: 'flex', alignItems: 'center', justifyContent:'center' }}>
                                    
                                    <div className="titlename">
                                        <div style={{ fontSize: '10px', fontWeight:'bold' }}>Medanta Hospital</div>
                                        <div style={{ fontStyle:'italic', color:'red', fontFamily:'sans-serif' }}>Gurgaon</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="card" style={{ width: "17rem", border:'1px dashed red' , height: '250px' }}>
                                
                                <img loading="lazy"  src="https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top-bottom" height={'100%'} alt="no image found" />
                                <div class="card-body" style={{ display: 'flex', alignItems: 'center', justifyContent:'center' }}>
                                    
                                    <div className="titlename">
                                        <div style={{ fontSize: '10px', fontWeight:'bold' }}>Jaslok Hospital</div>
                                        <div style={{ fontStyle:'italic', color:'red', fontFamily:'sans-serif' }}>Mumbai</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>

            <div style={{textAlign:'center', padding:'50px'}}>Don't hesitate, contact us for better help and services. <a href='/' >Explore all Hospitals</a></div>
        </>
    )
}

export default Bodybottom
