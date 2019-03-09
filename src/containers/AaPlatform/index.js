import React from 'react'
import { connect } from 'react-redux'
import { APlatformStyled } from './styled'
import { userService } from "apiService"
import { iconImages } from 'assets'
import {
    setReduxUserAuth,
} from 'actions'
import { } from 'components'

class APlatform extends React.Component {
    state = {

    }

    render() {
        return (
            <APlatformStyled>
                <div className="main-content">
                    test
                 </div>
            </APlatformStyled>
        )
    }
}

const mapStateToProps = state => ({
    authRedux: state.auth
})

const mapDispatchToProps = dispatch => ({
    setReduxUserAuth: data => dispatch(setReduxUserAuth(data))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(APlatform)