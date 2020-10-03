import React, { Component } from 'react'

import Card from '../Card';

import qaurantinebar from '../../images/Screenshot (16).png';
import quiz from '../../images/Screenshot (18).png';
import weather from '../../images/Screenshot (19).png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Project extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Quarantine Bar',
                    subTitle: 'Cocktail Recipes for Quarantine',
                    imgSrc: qaurantinebar,
                    link: 'https://billyjhicksjr.github.io/qaurantinebar/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Code Quiz',
                    subTitle: 'Timed Quiz Application',
                    imgSrc: quiz,
                    link: 'https://demi0504.github.io/code-quiz/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Weather App',
                    subTitle: 'Check the Local Weather',
                    imgSrc: weather,
                    link: 'https://demi0504.github.io/weather-app/',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Project;