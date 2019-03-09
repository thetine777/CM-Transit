import styled from "styled-components"
import { 
    COLOR,
    FONT
 } from 'assets'
 
export const CancelHeroStyled = styled.div`
/*===============================================
 Container 
===============================================*/
    
/*===============================================
Theme 
===============================================*/
    .theme_standard {
        padding-top: 10px;
        display: flex;
        justify-content: flex-end;
        .cancel_product_style {
            width: 83px;
            text-align: center;
            color: ${COLOR.Orenge};
            font-size: ${FONT.SIZE_4};
            border-left: 1px solid ${COLOR.Grey_3};
            cursor: pointer;
        }
    }
`