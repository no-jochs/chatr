import { ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function RoomSelector({ rooms }): JSX.Element {
  return(
    <ListGroup>
      {rooms.map(room => (
        <ListGroupItem key={room.name}>
          <Link to={`/rooms/${room.name}`}>{room.name}</Link>
        </ListGroupItem>
      ))}
    </ListGroup>
  )
}