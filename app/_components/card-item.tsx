import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from './ui/card'

const CardItem = () => {
  return (
    <div className="p-10">
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default CardItem
