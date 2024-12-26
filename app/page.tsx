import CardItem from './_components/card-item'
import Navbar from './_components/navigation-menu'
import { cardData } from './data'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap justify-center gap-4">
        {cardData.map((item, index) => (
          <CardItem key={index} data={item} />
        ))}
      </div>
    </div>
  )
}
