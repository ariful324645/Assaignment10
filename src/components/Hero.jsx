import React from 'react';

const Hero = () => {
                return (
                  <div>
                    <div className=" w-11/12  mx-auto">
                      <div className="carousel w-full">
                        <div
                          id="slide1"
                          className="carousel-item h-[500px] bg-amber-100 relative w-full"
                        >
                          <img
                            src="https://i.ibb.co/Mx2w8HyH/r-1.jpg"
                            className="w-full object-cover"
                          />
                          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className="btn btn-circle">
                              ❮
                            </a>
                            <a href="#slide2" className="btn btn-circle">
                              ❯
                            </a>
                          </div>
                        </div>
                        <div
                          id="slide2"
                          className="carousel-item h-[500px] relative w-full"
                        >
                          <img
                            src="https://i.ibb.co/4nwwBBxd/r2.jpg"
                            className="w-full object-cover"
                          />
                          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">
                              ❮
                            </a>
                            <a href="#slide3" className="btn btn-circle">
                              ❯
                            </a>
                          </div>
                        </div>
                        <div
                          id="slide3"
                          className="carousel-item h-[500px] relative w-full"
                        >
                          <img
                            src="https://i.ibb.co/45B5pDX/r5.jpg"
                            className="w-full object-cover"
                          />
                          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">
                              ❮
                            </a>
                            <a href="#slide4" className="btn btn-circle">
                              ❯
                            </a>
                          </div>
                        </div>
                        <div
                          id="slide4"
                          className="carousel-item h-[500px] relative w-full"
                        >
                          <img
                            src="https://i.ibb.co/kVV1rYFJ/r4.jpg"
                            className="w-full object-cover"
                          />
                          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle">
                              ❮
                            </a>
                            <a href="#slide1" className="btn btn-circle">
                              ❯
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
};

export default Hero;