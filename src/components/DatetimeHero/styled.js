import styled from "styled-components"
import { 
    COLOR,
    FONT
 } from 'assets'
 
export const DatetimeHeroStyled = styled.div.attrs({
    width_date: props => props.width_date,
})`
/*===============================================
 Container 
===============================================*/
    
/*===============================================
Theme 
===============================================*/
    .theme_standard {
        display: flex;
        .font {
            padding-left: 8px;
        }
        .form-group {
            width: ${props => props.width_date};
            padding-left: 8px;
            padding-right: 8px;
        }
    }
`