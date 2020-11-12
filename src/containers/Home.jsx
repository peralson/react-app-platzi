import React from 'react'
import { connect } from 'react-redux'

// Components
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'

// SCSS
import '../assets/styles/App.scss'

const Home = ({ searchQuery, trends, originals }) => {

    return (
        <>
            <Header />
            <Search isHome />
            {searchQuery.length > 0 &&
                <Categories title="Resultados de la búsqueda">
                    <Carousel>
                        {searchQuery.map(item => 
                            <CarouselItem 
                                key={item.id}
                                {...item}
                            />
                        )}
                    </Carousel>
                </Categories>
            }

            {trends.length > 0 &&
                <Categories title="Tendencias en tu país">
                    <Carousel>
                        {trends.map(item => 
                            <CarouselItem key={item.id} {...item} />
                        )}
                    </Carousel>
                </Categories>
            }

            {originals.length > 0 &&
                <Categories title="Originales de Platzi Video">
                    <Carousel>
                        {originals.map(item => 
                            <CarouselItem key={item.id} {...item} />
                        )}
                    </Carousel>
                </Categories>
            }
        </>
    )
}

const mapStateToProps = state => {
    return {
        searchQuery: state.searchQuery,
        trends: state.trends,
        originals: state.originals
    }
}

export default connect(mapStateToProps, null)(Home)