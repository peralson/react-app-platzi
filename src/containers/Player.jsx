import React, { useLayoutEffect } from 'react'
import { connect } from 'react-redux'
import { getVideoSource } from '../actions'
import NotFound from './NotFound'

// SCSS & STATIC
import '../assets/styles/components/Player.scss'

const Player = props => {
    const { id } = props.match.params
    const hasPlaying = Object.keys(props.playing).length > 0

    useLayoutEffect(() => {
        props.getVideoSource(id)
    }, [])

    return hasPlaying ? (
        <>
            <div className="Player">
                <video controls autoPlay>
                    <source src={props.playing.source} type="video/mp4" />
                </video>
            </div>
            <div className="Player-back">
                <button type="button" onClick={() => props.history.goBack()}>
                    Regresar
                </button>
            </div>
        </>
    ) : <NotFound />
}

const mapDispatchToProps = {
    getVideoSource,
}

const mapStateToProps = state => {
    return {
        playing: state.playing
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)