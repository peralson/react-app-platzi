import React from'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import gravatar from '../utils/gravatar'
import classNames from 'classnames'
import { logoutRequest } from '../actions'
import '../assets/styles/components/Header.scss'

import logo from '../assets/img/logo-platzi-video-BW2.png'
import userIcon from '../assets/img/user-icon.png'

const Header = props => {
    const { user, isLogin, isRegister } = props
    const hasUser = Object.keys(user).length > 0

    const handleLogout = () => {
        props.logoutRequest({})
    }

    const headerClass = classNames('header', {
        isLogin,
        isRegister
    })

    return(
        <header className={headerClass}>
            <Link to="/">
                <img className="header__img" src={logo} alt="Platzi Video" />
            </Link>
            <div className="header__menu">
            <div className="header__menu--profile">
                {hasUser ?
                    <img src={gravatar(user.email)} alt={user.email} /> :
                    <img src={userIcon} alt="Image de perfil" />
                }
                <p>Perfil</p>
            </div>
            <ul>
                {hasUser ?
                    <Link to="/favourites">
                        Tus videos favoritos
                    </Link>
                    : null
                }
                {hasUser ?
                    <li>
                        <Link to="/login" onClick={handleLogout}>
                            Cerrar Sesión
                        </Link>
                    </li>
                    : 
                    <li>
                        <Link to="/login">
                            Iniciar Sesión
                        </Link>
                    </li>
                }
            </ul>
            </div>
        </header>
    )
}

Header.propTypes = {
    user: PropTypes.object
}


const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    logoutRequest,
}


export default connect(mapStateToProps, mapDispatchToProps)(Header)