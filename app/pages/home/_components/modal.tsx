import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '../../../_components/ui/dialog'
import { Calendar, MapPin, Share2, Bookmark } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../../../_components/ui/avatar'
import { Container } from 'postcss'

interface ModalItemProps {
  data: {
    image: string
    title: string
    description: string
    company: string
    email: string
    contract: string
    name: string
    distance: string
    daysAgo: string
  }
}

const Modal = ({ data }: ModalItemProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className="cursor-pointer">Ver mais</p>
      </DialogTrigger>
      <DialogContent className="flex max-w-[971px] flex-col lg:flex-row">
        <div className="flex h-80 w-80 justify-center lg:w-1/3 ">
          <img className="rounded-md" src={data.image} alt={data.title} />
        </div>
        <div className="flex flex-wrap justify-center lg:w-2/3 ">
          <div className="flex flex-col gap-3">
            <div className="flex flex-row">
              <Avatar className="mr-6">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h1 className="flex items-center text-lg text-gray-700">{data.name}</h1>
            </div>
            <h2 className="text-lg font-bold">{data.title}</h2>
            <p>{data.description}</p>
          </div>
          <div className="flex flex-row items-center space-x-96">
            <div className="flex flex-col">
              <div className="flex flex-row gap-2">
                <MapPin className="w-5" />
                <p className="text-lg">{data.distance}</p>
              </div>
              <div className="flex flex-row gap-2">
                <Calendar className="w-5" />
                <p className="text-lg">{data.daysAgo}</p>
              </div>
            </div>
            <div className="flex">
              <Share2 className="w-5" />
              <Bookmark className="w-5" />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default Modal
