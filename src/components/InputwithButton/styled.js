import styled from "styled-components"
import { 
    COLOR,
    FONT
 } from 'assets'
 
export const InputwithButtonStyled = styled.div.attrs({
    width_input: props => props.width_input,
    width_button: props => props.width_button,
    height_input: props => props.height_input,
    height_button: props => props.height_button,
    width_label: props => props.width_label,
})`
/*===============================================
 Container 
===============================================*/
    
/*===============================================
Theme 
===============================================*/
    .theme_standard {
        display: flex;
        .label2 {
            width: ${props => props.width_label};
        }
        .input-group {
            margin-right: 6px;
            .form_control {
                border: 1px solid solid ${COLOR.Grey_3};
                height: ${props => props.height_input};
                width: ${props => props.width_input};
                text-align: center;
                z-index: 0;
            }
            .input-group-addon {
                padding: 0px;
                height: 29px;
                border: 0px;
                .btn {
                    color: ${COLOR.white};
                    background: ${COLOR.GREEN_3};
                    border: 2px solid ${COLOR.GREEN_3};
                    font-size: ${FONT.SIZE_6};
                    width: ${props => props.width_button};
                    height: ${props => props.height_button};
                    padding: 0px;
                    &:hover {
                        background: ${COLOR.GREEN_1};
                        border: 2px solid ${COLOR.GREEN_1};
                    }
                }
            }
        } 
    }
`