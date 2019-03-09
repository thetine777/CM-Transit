import React from 'react'
import { AaFormStyled } from './styled'
import { userService } from "apiService"
import { iconImages } from 'assets'

class AaForm extends React.Component {
    state = {

    }

    componentDidMount = () => {
        this.fetchData()
    }

    onRef = (e) => {
        this.form = e
    }
    fetchData = () => {
        let formData = this.form
        const { user, password } = formData
        user.value = "eaf"
        password.value = "ff18dfdf"
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const { user, password } = e.target
        let params = {
            user: user,
            password: password
        }
    }
    render() {
        return (
            <AaFormStyled>
                <form ref={this.onRef} onSubmit={this.handleSubmit}>
                    <input type="text" name="user" />
                    <input type="password" name="password" />
                    <button type="submit">submit</button>
                </form>
            </AaFormStyled>
        )
    }
}
export default AaForm