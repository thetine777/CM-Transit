import styled from "styled-components"
import { 
    COLOR,
    FONT
 } from 'assets'
 
export const PosReportStyled = styled.div`
/*===============================================
 Container 
===============================================*/
    
/*===============================================
Theme 
===============================================*/
    .theme_standard {
        ul {
            list-style-type: none;
            border: 1px solid ${COLOR.GREEN_3};
            width: fit-content;
            padding: 0;
            border-radius: 5px;
            .active {
                li {
                    background: ${COLOR.GREEN_3};
                }   
            }
        }
        .list {
            font-size: ${FONT.SIZE_6}
            text-align: center;
            border-bottom: 1px solid ${COLOR.GREEN_3};
            &:hover {
                background: ${COLOR.GREEN_3};
                transition: all 60ms ease-in;
                color: ${COLOR.white};
            }
            &:nth-child(5n+0) {
                border: none;
            } 
        }
        .datetime {
            font-size: ${FONT.SIZE_6}
            text-align: center;
            border-bottom: 1px solid ${COLOR.GREEN_3};
            &:hover {
                background: ${COLOR.GREEN_3};
                transition: all 60ms ease-in;
            }
            &:nth-child(5n+0) {
                border: none;
            } 
            .font_color {
                &:hover {
                    color: ${COLOR.white};
                }          
            }
        }
        .form-control {
            text-align: center;
        }
        .form-group {
            margin: 0px;
            padding: 5px;
        }
    }
`