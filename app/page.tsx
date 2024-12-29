import CardItem from './_components/card-item'
import Navbar from './_components/navigation-menu'
import Map from './_components/map'
import { cardData } from './data'
// import Modal from './_components/modal'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col lg:flex-row">
        {/* Section with Map */}
        <section className="flex justify-center lg:w-1/3">
          <Map />
        </section>
        {/* Section with Cards */}
        <section className="flex flex-wrap justify-center lg:w-2/3">
          {cardData.map((item, index) => (
            <CardItem key={index} data={item} />
          ))}
        </section>

        {/* <Modal /> */}
      </div>
    </div>
  )
}
