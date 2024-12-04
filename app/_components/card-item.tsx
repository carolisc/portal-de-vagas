import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card'
import { Calendar, MapPin, UserRound, Share2, Bookmark } from 'lucide-react'

const CardItem = () => {
  return (
    <div className="p-10">
      <Card className="h-80 w-56 rounded-lg border border-gray-200 bg-white shadow-lg">
        <CardHeader className="h-full w-full p-2">
          <Image
            className="h-36 w-full rounded-t-md object-cover"
            src="/temos-vagas.jpg"
            width={200}
            height={180}
            alt="Picture of the author"
          />
          <CardTitle className="mt-2 text-lg font-bold text-gray-800">Cargo</CardTitle>
          <CardDescription className="relative mt-2 flex flex-row">
            <div className="">
              <div className="flex items-center gap-1">
                <UserRound className="w-4 text-gray-500" />
                <h2 className="text-sm font-medium text-gray-700">Nome e Sobrenome</h2>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 text-gray-500" />
                <p className="text-sm text-gray-600">2.8km</p>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 text-gray-500" />
                <p className="text-sm text-gray-600">3 dias</p>
              </div>
            </div>
            <div className="flex flex-row items-end ">
              <Share2 className="w-5" />
              <Bookmark className="w-5" />
            </div>
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  )
}

export default CardItem
