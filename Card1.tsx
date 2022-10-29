import React from 'react';
import { useState } from 'react';
import { Card, Col, Row, Button, Text } from "@nextui-org/react";

export const Card1 = () => (


  <Card css={{ w: "100%", h: "500px" }}>
    
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src="https://assets.imgix.net/unsplash/bear.jpg"
        objectFit="cover"
        width="100"
        height="100%"
        alt="Relaxing app background"
        
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#0f111466",
        borderTop: "$borderWeights$light solid $gray800",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row justify="center" align="center">
        
            
          
      </Row>
    </Card.Footer>
  </Card>
);