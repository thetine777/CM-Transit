import styled from "styled-components"
import { 
    COLOR,
    FONT
 } from 'assets'
 
export const DropdownHeroStyled = styled.div.attrs({
    width_label: props => props.width_label,
    width_select: props => props.width_select,
    max_width: props => props.max_width,
    height: props => props.height,
})`
/*===============================================
 Container 
===============================================*/
    
/*===============================================
Theme 
===============================================*/
    .theme_standard {
        .control-label {
            width: ${props => props.width_label};
            padding: 0px;
        }
        .padding {
            padding: 0px;
            max-width: ${props => props.max_width};
            width: 100%;
        }
        .form-group {
            display: flex;
            margin-bottom: 11px;
        }
        .Select-control {
            width: ${props => props.width_select};
        }
    }
`