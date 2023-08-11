import React from 'react'
import Navigation from '../../Components/Navigation/Navigation'
import './styles.modules.css'
import { useNavigate } from 'react-router-dom'
import Footer from '../../Components/Navigation/Footer'
export default function AllProducts() {
    const Navigate = useNavigate()

    return (
        <>
            <Navigation />

            <div className='Cover-Products'>
                <div className='Cover__content'>
                    <h1 className='Cover__title'>Shop All Products</h1>
                    <p className='Cover__text'>We provide wide range of printing services</p>
                </div>
            </div>

            <div className="Grid-Wrapper">
                <div className="container grid" >
                    <div className="grid-1" onClick={() => {
                        Navigate('/Product/Flyers')
                    }}
                    >
                        <img src="/Grid/Flyer.png" alt="Mockup" />
                        <div className="grid-1div" onMouseEnter={() => {
                            document.getElementById("Flyer-Div").style.display = "block"
                        }}
                            onMouseLeave={() => {
                                document.getElementById("Flyer-Div").style.display = "none"
                            }}
                        >
                            <h5>Flyer</h5>
                            <p id="Flyer-Div">Promote your business with high quality flyers!</p>
                            <h6>Shop Now</h6>
                        </div>
                    </div>
                    <div className="grid-1" onClick={() => {
                        Navigate('/Product/Business-Cards')
                    }}>
                        <img src="/Grid/Business Card.png" alt="PrintMate" />
                        <div className="grid-1div" onMouseEnter={() => {
                            document.getElementById("Flyer-Div-2").style.display = "block"
                        }}
                            onMouseLeave={() => {
                                document.getElementById("Flyer-Div-2").style.display = "none"
                            }}
                        >
                            <h5>Business Card</h5>
                            <p id="Flyer-Div-2">Promote your business with high quality business cards!</p>
                            <h6>Shop Now</h6>
                        </div>
                    </div>
                    <div className="grid-1" onClick={() => {
                        Navigate('/Product/Posters')
                    }}>
                        <img src="/Grid/Poster.png" alt="PrintMate" />
                        <div className="grid-1div" onMouseEnter={() => {
                            document.getElementById("Flyer-Div-3").style.display = "block"
                        }}
                            onMouseLeave={() => {
                                document.getElementById("Flyer-Div-3").style.display = "none"
                            }}
                        >
                            <h5>Posters</h5>
                            <p id="Flyer-Div-3">Promote your business with high quality posters!</p>
                            <h6>Shop Now</h6>
                        </div>
                    </div>
                    <div className="grid-1" onClick={() => {
                        Navigate('/Product/Merchandise')
                    }}>
                        <img src="/Grid/Merch.png" alt="PrintMate" />
                        <div className="grid-1div" onMouseEnter={() => {
                            document.getElementById("Flyer-Div-4").style.display = "block"
                        }}
                            onMouseLeave={() => {
                                document.getElementById("Flyer-Div-4").style.display = "none"
                            }}
                        >
                            <h5>Merchandise</h5>
                            <p id="Flyer-Div-4">Promote your business with high quality merchandise!</p>
                            <h6>Shop Now</h6>
                        </div>
                    </div>
                    <div className="grid-1" onClick={() => {
                        Navigate('/Product/Business-Stationery')
                    }}>
                        <img src="/Grid/Stationary.png" alt="PrintMate" />
                        <div className="grid-1div" onMouseEnter={() => {
                            document.getElementById("Flyer-Div-5").style.display = "block"
                        }}
                            onMouseLeave={() => {
                                document.getElementById("Flyer-Div-5").style.display = "none"
                            }}
                        >
                            <h5>Business Stationery</h5>
                            <p id="Flyer-Div-5">Promote your business with high quality stationery!</p>
                            <h6>Shop Now</h6>
                        </div>
                    </div>
                    <div className="grid-1" onClick={() => {
                        Navigate('/Product/Cards')
                    }}>
                        <img src="/Grid/Invites.png" alt="PrintMate" />
                        <div className="grid-1div" onMouseEnter={() => {
                            document.getElementById("Flyer-Div-6").style.display = "block"
                        }}
                            onMouseLeave={() => {
                                document.getElementById("Flyer-Div-6").style.display = "none"
                            }}
                        >
                            <h5>Cards & Invites</h5>
                            <p id="Flyer-Div-6">Promote your business with high quality cards & invites!</p>
                            <h6>Shop Now</h6>
                        </div>
                    </div>
                    <div className="grid-1" onClick={() => {
                        Navigate('/Product/Calenders')
                    }}>
                        <img src="/Grid/Calender.png" alt="PrintMate" />
                        <div className="grid-1div" onMouseEnter={() => {
                            document.getElementById("Flyer-Div-7").style.display = "block"
                        }}
                            onMouseLeave={() => {
                                document.getElementById("Flyer-Div-7").style.display = "none"
                            }}
                        >
                            <h5>Calenders</h5>
                            <p id="Flyer-Div-7">Promote your business with high quality calenders!</p>
                            <h6>Shop Now</h6>
                        </div>
                    </div>
                    <div className="grid-1" onClick={() => {
                        Navigate('/Product/Banners')
                    }
                    }>
                        <img src="/Grid/Banners.jpg" alt="PrintMate" />
                        <div className="grid-1div" onMouseEnter={() => {
                            document.getElementById("Flyer-Div-8").style.display = "block"
                        }}
                            onMouseLeave={() => {
                                document.getElementById("Flyer-Div-8").style.display = "none"
                            }}
                        >
                            <h5>Banners</h5>
                            <p id="Flyer-Div-8">Promote your business with high quality banners!</p>
                            <h6>Shop Now</h6>
                        </div>
                    </div>

                    <div className="grid-1" onClick={() => {
                        Navigate('/Product/A-Frame')
                    }}>
                        <img src="/AFrames/AFrame-Product1-3.png" alt="PrintMate" />
                        <div className="grid-1div" onMouseEnter={() => {
                            document.getElementById("Flyer-Div-9").style.display = "block"
                        }}
                            onMouseLeave={() => {
                                document.getElementById("Flyer-Div-9").style.display = "none"
                            }}
                        >
                            <h5>A-Frame</h5>
                            <p id="Flyer-Div-9">Promote your business with high quality A frames!</p>
                            <h6>Shop Now</h6>
                        </div>
                    </div>
                    <div className="grid-1" onClick={() => {
                        Navigate('/Product/Cardboard Signs')
                    }}>
                        <img src="/Cardboard-Signs/CardboardSigns-Product2.jpg" alt="PrintMate" />
                        <div className="grid-1div" onMouseEnter={() => {
                            document.getElementById("Flyer-Div-10").style.display = "block"
                        }}
                            onMouseLeave={() => {
                                document.getElementById("Flyer-Div-10").style.display = "none"
                            }}
                        >
                            <h5>Cardboard Signs</h5>
                            <p id="Flyer-Div-10">Promote your business with high quality cardboard signs!</p>
                            <h6>Shop Now</h6>
                        </div>
                    </div>
                    <div className="grid-1" onClick={() => {
                        Navigate('/Product/Correx')
                    }}>
                        <img src="/Correx/Correx-Product1.jpg" alt="PrintMate" />
                        <div className="grid-1div" onMouseEnter={() => {
                            document.getElementById("Flyer-Div-11").style.display = "block"
                        }}
                            onMouseLeave={() => {
                                document.getElementById("Flyer-Div-11").style.display = "none"
                            }}
                        >
                            <h5>Correx</h5>
                            <p id="Flyer-Div-11">Promote your business with high quality correx signs!</p>
                            <h6>Shop Now</h6>
                        </div>
                    </div>
                    <div className="grid-1" onClick={() => {
                        Navigate('/Product/Aluminium-Signs')
                    }}>
                        <img src="/Aluminum/Aluminium-Product2.jpg" alt="PrintMate" />
                        <div className="grid-1div" onMouseEnter={() => {
                            document.getElementById("Flyer-Div-12").style.display = "block"
                        }}
                            onMouseLeave={() => {
                                document.getElementById("Flyer-Div-12").style.display = "none"
                            }}
                        >
                            <h5>Aluminium Signs</h5>
                            <p id="Flyer-Div-12">Promote your business with high quality aluminum signs!</p>
                            <h6>Shop Now</h6>
                        </div>
                    </div>
                    <div className="grid-1" onClick={() => {
                        Navigate('/Product/Folded-Leaflets')
                    }}>
                        <img src="/FoldedLeaflets/FoldedLeaflets-Product1.jpg" alt="PrintMate" />
                        <div className="grid-1div" onMouseEnter={() => {
                            document.getElementById("Flyer-Div-13").style.display = "block"
                        }}
                            onMouseLeave={() => {
                                document.getElementById("Flyer-Div-13").style.display = "none"
                            }}
                        >
                            <h5>Folded Leaflets</h5>
                            <p id="Flyer-Div-13">Promote your business with high quality leaflets!</p>
                            <h6>Shop Now</h6>
                        </div>
                    </div>
                    <div className="grid-1" onClick={() => {
                        Navigate('/Product/Menus')
                    }}>
                        <img src="/Menus/Menus-Product1.jpg" alt="PrintMate" />
                        <div className="grid-1div" onMouseEnter={() => {
                            document.getElementById("Flyer-Div-14").style.display = "block"
                        }}
                            onMouseLeave={() => {
                                document.getElementById("Flyer-Div-14").style.display = "none"
                            }}
                        >
                            <h5>Menus</h5>
                            <p id="Flyer-Div-14">Promote your business with high quality menus!</p>
                            <h6>Shop Now</h6>
                        </div>

                    </div>
                    <div className="grid-1" onClick={() => {
                        Navigate('/Product/Perforation')
                    }}>
                        <img src="/Perforation/Perforation-Product1.jpg" alt="PrintMate" />
                        <div className="grid-1div" onMouseEnter={() => {
                            document.getElementById("Flyer-Div-15").style.display = "block"
                        }}
                            onMouseLeave={() => {
                                document.getElementById("Flyer-Div-15").style.display = "none"
                            }}
                        >
                            <h5>Perforation</h5>
                            <p id="Flyer-Div-15">Promote your business with high quality perforation!</p>
                            <h6>Shop Now</h6>
                        </div>
                    </div>

                    <div className="grid-1" onClick={() => {
                        Navigate('/Product/Stickers-and-Labels')
                    }}>
                        <img src="/Stickers/Stickers-Product1.jpg" alt="PrintMate" />
                        <div className="grid-1div" onMouseEnter={() => {
                            document.getElementById("Flyer-Div-16").style.display = "block"
                        }}
                            onMouseLeave={() => {
                                document.getElementById("Flyer-Div-16").style.display = "none"
                            }}
                        >
                            <h5>Stickers & Labels</h5>
                            <p id="Flyer-Div-16">Promote your business with high quality stickers & labels!</p>
                            <h6>Shop Now</h6>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
