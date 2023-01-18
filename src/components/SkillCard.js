import React from 'react'
import { Button, Card } from 'react-bootstrap'

const SkillCard = ({title,description,icon ,levelText, level }) => {

  return (
    <Card style={{ width: '12rem', height:"auto" }} className="mx-3 rounded text-dark">
      <Card.Header>
        <h5> {icon} {title}</h5>
      </Card.Header>
      <Card.Body>
       
        <Card.Text className="lh-sm" >
          {levelText}:  {level}
        </Card.Text>
        
      </Card.Body>
    </Card>
  )
}

export default SkillCard