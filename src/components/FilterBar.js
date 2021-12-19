import React from 'react'
import { Col, Row } from 'react-bootstrap'

export const FilterBar = () => {
    return (
        <Col xs={2} className="bg-primary">
        <Row className='vertically-centered'>
          <span className='text-white'>Filters Bar</span>
        </Row>
      </Col>
    )
}
