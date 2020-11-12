import React from 'react'
import { connect } from 'react-redux'

// Components
import Header from '../components/Header'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'

import '../assets/styles/App.scss'
import '../assets/styles/components/Favourites.scss'

const Favourites = ({ myList }) => {

    return(
        <>
            <Header />
            <div className="parriba-plz">
                <Categories title="Tus videos favoritos">
                    {(myList.length > 0) ? 
                        <Carousel>
                            {myList.map(item => 
                                <CarouselItem 
                                    key={item.id}
                                    {...item}
                                    isList
                                />
                            )}
                        </Carousel> :
                        <Carousel>
                            <CarouselItem 
                                key={0}
                                title={"No has marcado ningun video aún!"}
                                year={2009}
                                contentRating={"16+"}
                                cover={"https://fsa.zobj.net/crop.php?r=2Qw-8f9e3vaOfLwkwolujkh9iTDyy1EOFJIwbLZjtmnoAmG3040HDFa6r3aN657Rvu0iJiAt1_XuQqIVR9BdcTJG3Hlh9cM-91ybAe48lJIC1hLPfXL1NjYiTpIiqAwCblLc73krBc546q2B"}
                                duration={164}
                                isList 
                            />
                        </Carousel>
                    }
                </Categories>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        myList: state.myList,
    }
}

export default connect(mapStateToProps, null)(Favourites)