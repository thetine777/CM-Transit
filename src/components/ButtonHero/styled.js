import styled from "styled-components"
import { 
    COLOR,
    FONT
 } from 'assets'
 
export const ButtonHeroStyled = styled.div.attrs({
    button_width: props => props.width,
    button_height: props => props.height
})`
/*===============================================
 Container 
===============================================*/
    
/*===============================================
Theme 
===============================================*/
    .theme_standard {
        .button_submit {
            width: ${props => props.button_width};
            border-radius: 5px;
            height: ${props => props.button_height};
            border: 2px solid ${COLOR.GREEN_3};
            font-size: ${FONT.SIZE_8};
            color: ${COLOR.white};
            background: ${COLOR.GREEN_3};
            padding: 0px;
            &:hover {
                background: ${COLOR.GREEN_1};
                border: 2px solid ${COLOR.GREEN_1};
                transition: all 60ms ease-in;
            }
        }
    }
    .theme_Grey {
        .button_submit {
            width: ${props => props.button_width};
            border-radius: 5px;
            height: ${props => props.button_height};
            border: 2px solid ${COLOR.Grey_5};
            font-size: ${FONT.SIZE_8};
            color: ${COLOR.white};
            background: ${COLOR.Grey_5};
            padding: 0px;
            &:hover {
                background: ${COLOR.Grey_3};
                border: 2px solid ${COLOR.Grey_3};
                transition: all 60ms ease-in;
            }
        }
    }
    .theme_blue {
        .button_submit {
            font-family: "Roboto";
            font-weight: 400;
            width: ${props => props.button_width};
            border-radius: 5px;
            height: ${props => props.button_height};
            border: 2px solid ${COLOR.BLUE1};
            font-size: ${FONT.SIZE_3};
            color: ${COLOR.white};
            background: ${COLOR.BLUE1};
            padding: 0px;
            &:hover {
                background: ${COLOR.BLUE2};
                border: 2px solid ${COLOR.BLUE2};
                transition: all 150ms ease-in;
            }
        }
    }
    .theme_yellow {
        .button_submit {
            font-family: "Roboto";
            font-weight: 400;
            width: ${props => props.button_width};
            border-radius: 5px;
            height: ${props => props.button_height};
            border: 2px solid ${COLOR.YELLOW1};
            font-size: ${FONT.SIZE_3};
            color: ${COLOR.white};
            background: ${COLOR.YELLOW1};
            padding: 0px;
            &:hover {
                background: ${COLOR.YELLOW2};
                border: 2px solid ${COLOR.YELLOW2};
                transition: all 150ms ease-in;
            }
        }
    }
`