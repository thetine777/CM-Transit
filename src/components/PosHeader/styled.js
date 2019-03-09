import styled from "styled-components"
import { 
    COLOR,
    FONT
 } from 'assets'
 
export const PosHeaderStyled = styled.div`
/*===============================================
 Container 
===============================================*/
    
/*===============================================
Theme 
===============================================*/
    .theme_standard {
        .direction_head {
            display : flex;
            justify-Content: space-between;     
            .user_logout {
                padding-top: 5px;
                padding-right: 14px;
                color: ${COLOR.GREEN_3};
                font-size: ${FONT.SIZE_5};
                font-family: "Kanit-Regular";
                .user {
                    padding-right: 11px;
                }
                .logout {
                    padding-left: 21px;
                    padding-right: 6px;
                }
                ul {
                    list-style-type: none;
                    overflow: hidden;
                }
                li {
                    float: left;
                    cursor: pointer;
                }  
            } 
        }
    }
`