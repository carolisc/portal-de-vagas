import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card'
import { Calendar, MapPin, UserRound } from 'lucide-react'

const CardItem = () => {
  return (
    <div className="p-10">
      <Card className="h-80 w-56">
        <CardHeader>
          <Image
            className="h-80 w-52 rounded-sm p-1"
            src="/temos-vagas.jpg"
            width={200}
            height={180}
            alt="Picture of the author"
          />
          <CardTitle className="p-1">Cargo</CardTitle>
          <CardDescription>
            <div className="flex flex-row">
              <UserRound />
              <h2 className="text-sm">Nome e Sobrenome</h2>
            </div>
            <div className="flex flex-row pt-1">
              <MapPin />
              <p className="text-sm">2.8km</p>
            </div>
            <div className="flex flex-row pt-1">
              <Calendar />
              <p className="text-sm">3 dias</p>
            </div>
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}

export default CardItem
