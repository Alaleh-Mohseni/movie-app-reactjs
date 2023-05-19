import TopGonImg from "../../assets/top-gun.jpg";
import MarloweImg from "../../assets/Marlowe.jpg";
import Midway from "../../assets/midway-movie.jpg";


const Carousel = () => {
    return (
        <div id="myCarousel" className="carousel slide pointer-event" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={TopGonImg} className="img-fluid" alt="logo" width="100%" height="300px" />
                    <div className="container">
                        <div className="carousel-caption text-start">
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={MarloweImg} className="img-fluid" alt="logo" width="100%" height="300px" />
                    <div className="container">
                        <div className="carousel-caption">
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={Midway} className="img-fluid" alt="logo" width="100%" height="300px" />
                    <div className="container">
                        <div className="carousel-caption text-end">
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel