import { Card } from 'react-bootstrap'

import imgcard1 from '../../assets/img/cards/Card1.png'
import imgcard2 from '../../assets/img/cards/Card2.png'
import imgcard3 from '../../assets/img/cards/Card3.png'

import './Cards.scss'

export default function Cards() {
  return (
    <section id="card-container">
      <Card className="card-class">
        <Card.Img className="card-img" variant="top" alt="Car1" src={imgcard1} />
        <Card.Body>
          <Card.Title className="card-title">
            Tecnologia de ponta para sua segurança.
          </Card.Title>
          <Card.Text className="card-text">
            Fechaduras eletrônicas para seu lar.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Sua casa é sua fortaleza.</small>
        </Card.Footer>
      </Card>

      <Card className="card-class">
        <Card.Img className="card-img" variant="top" alt="Card2" src={imgcard3} />
        <Card.Body>
          <Card.Title className="card-title">
            Fazendo história no ramo a decadas.
          </Card.Title>
          <Card.Text className="card-text">Desde 1961 ao seu dispor.</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Nossos clientes recomendam.</small>
        </Card.Footer>
      </Card>

      <Card className="card-class">
        <Card.Img className="card-img" variant="top" alt="Card3" src={imgcard2} />
        <Card.Body>
          <Card.Title className="card-title">
            Prezamos pelo seu bem estar e conforto.
          </Card.Title>
          <Card.Text className="card-text">
            Priorizando a sua saúde e conforto.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Queremos você bem!</small>
        </Card.Footer>
      </Card>
    </section>
  )
}
