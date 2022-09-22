import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
  return (
    <Container>
        <Section 
            title="Model S"
            description="Order online for Touchless Delivery"
            backgroundImg="model-s.jpg"
            leftBtntext="Custon Order"
            rightBtntext="Existing Inventory"
        />
        <Section 
            title="Model Y"
            description="Order online for Touchless Delivery"
            backgroundImg="model-y.jpg"
            leftBtntext="Custon Order"
            rightBtntext="Existing Inventory"
        />
        <Section 
            title="Model 3"
            description="Order online for Touchless Delivery"
            backgroundImg="model-3.jpg"
            leftBtntext="Custon Order"
            rightBtntext="Existing Inventory"
        />
        <Section 
            title="Model X"
            description="Order online for Touchless Delivery"
            backgroundImg="model-x.jpg"
            leftBtntext="Custon Order"
            rightBtntext="Existing Inventory"
        />
        <Section 
            title="Lowest Cost Solar Panels in America"
            description="Money-back quarantee"
            backgroundImg="solar-panel.jpg"
            leftBtntext="Order now"
            rightBtntext="learn  more"
        />
        <Section 
            title="Solar for New Roofs"
            description="Solar Roof Costs Less Than a New Roof"
            backgroundImg="solar-roof.jpg"
            leftBtntext="Order now"
            rightBtntext="learn  more"
        />
        <Section 
            title="Acceessories"
            description=""
            backgroundImg="accessories.jpg"
            leftBtntext="Order now"
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`