import styled from "styled-components"
import { 
    COLOR,
    FONT
 } from 'assets'
 
export const InputHeroStyled = styled.div.attrs({
    width_label: props => props.width_label,
    width_input: props => props.width_input,
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
        .form-control {
            height: ${props => props.height};
            width: ${props => props.width_input};
        }
        .form-group {
            display: flex;
            margin: 0px;
            margin-bottom: 11px;
            .padding {
                padding: 0px;
                max-width: ${props => props.max_width};
                width: 100%;
                .label2 {

                }
            }
        }
        .control-label {
            width: ${props => props.width_label};
            padding: 0px;
            padding-right: 8px;
        }
        .btn {
            color: ${COLOR.white};
            background: ${COLOR.GREEN_3};
            border: 2px solid ${COLOR.GREEN_3};
            &:hover {
                background: ${COLOR.GREEN_1};
                border: 2px solid ${COLOR.GREEN_1};
            }
        }
        .bath {
            padding-left: 7px;
        }
    }
    .theme_Green {
        .form-control {
            height: ${props => props.height};
            width: ${props => props.width_input};
            border-radius: 10px 10px 0px 0px;
            border: 1.5px solid ${COLOR.GREEN_3};
            border-radius: 10px 10px 0px 0px;
            text-align: center;
            color: ${COLOR.GREEN_3};
        }
        .form-group {
            display: flex;
            margin: 0px;
            margin-bottom: 11px;
            .padding {
                padding: 0px;
                max-width: ${props => props.max_width};
                width: 100%;
                .label2 {
                    color: ${COLOR.GREEN_3};
                }
            }
        }
        .control-label {
            width: ${props => props.width_label};
            padding: 0px;
        }
        .bath {
            padding-left: 7px;
        }
    }
`