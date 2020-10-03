import React, { Component } from 'react'

import Card from '../Card';

import qaurantinebar from '../../images/Screenshot (16).png';
import quiz from '../../images/Screenshot (18).png';
import weather from '../../images/Screenshot (19).png';
import burger from '../../images/Screenshot (26).png';
import movie from '../../images/Screenshot (28).png';
import notetaker from '../../images/Screenshot (31).png';
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
                {
                    id: 3,
                    title: 'Burger App',
                    subTitle: 'Build and Eat Some Burgers',
                    imgSrc: burger,
                    link: 'https://enigmatic-fortress-55695.herokuapp.com/',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Popcorn Bucket List',
                    subTitle: 'Movie Watchlist App',
                    imgSrc: movie,
                    link: 'https://still-reef-39883.herokuapp.com/',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Note Taker',
                    subTitle: 'Taker of Notes',
                    imgSrc: notetaker,
                    link: 'https://github.com/demi0504/note-taker',
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