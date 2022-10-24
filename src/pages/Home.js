import banner from '../img/banner.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import GridCarolsel from '../components/GridCarousel'

function Home() {
    return (
        <>
            <section>
                <img id="banner" src={banner} className="img-fluid my-4" />

                <h2>Destinos Populares</h2>

                <GridCarolsel />
            </section>
        </>
    )
}

export default Home