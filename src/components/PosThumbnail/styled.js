import styled from "styled-components"
import { 
    COLOR,
    FONT
 } from 'assets'
 
export const PosThumbnailStyled = styled.div`
/*===============================================
 Container 
===============================================*/
    
/*===============================================
Theme 
===============================================*/
    .theme_standard {
        .thumbnail{
            border: none;
            padding: 0px;
            cursor: pointer;
            .caption {
                padding :0px;
            }
        p {
            color: ${COLOR.GREEN_3};
            margin: -3px 0 0px;
            font-family: "Kanit-Regular";
        }
    }
`