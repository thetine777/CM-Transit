import styled from "styled-components"
import { 
    COLOR,
    FONT
 } from 'assets'
 
export const BottonModalStyled = styled.div`
/*===============================================
 Container 
===============================================*/
    
/*===============================================
Theme 
===============================================*/
    .theme_standard {
        .botton_close {
            position: absolute;
            right: -13px;
            top: -19px;
            display: flex;
            justijy-content: center; 
            border-radius: 50%;
            width: 36px;
            height: 36px;
            background: ${COLOR.GREEN_3};
            border: 1px solid ${COLOR.GREEN_3};
            color: ${COLOR.white};
            font-size: ${FONT.SIZE_9};
            justify-content: center;
            align-items: center;
            .glyphicon {
                top: 0px;
            }
        }
    }
`