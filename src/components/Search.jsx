import React from 'react'
import { connect } from 'react-redux'
import { searchRequest } from '../actions'

// SCSS
import className from 'classnames'
import '../assets/styles/components/Search.scss'

const Search = (props) => {
    const { isHome } = props
    
    const inputStyle = className('input', {
        isHome,
    })

    const handleInput = event => {
        props.searchRequest(event.target.value)
    }

    return(
        <section className="main">
            <h2 className="main__title">¿Qué quieres ver hoy?</h2>
            <input
                type="text"
                className={inputStyle}
                placeholder="Buscar..."
                onChange={handleInput}
            />
        </section>
    )
}

const mapDispatchToProps = {
    searchRequest,
}


export default connect(null, mapDispatchToProps)(Search)