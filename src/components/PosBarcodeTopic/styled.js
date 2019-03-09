import styled from "styled-components"
import { 
    COLOR,
    FONT
 } from 'assets'
 
export const PosBarcodeTopicStyled = styled.div`
/*===============================================
 Container 
===============================================*/
    
/*===============================================
Theme 
===============================================*/
.theme_standard {
    background:${COLOR.white};
    height: 50px;
    padding-left: 0px;
    .border_topic {
        display: flex;
        align:items: center;
        border-bottom: 2px solid ${COLOR.Grey_2};
        .topic {
            display: flex;
            align-items: center;
            padding-left: 12px;
            padding-right: 12px;
            font-size: ${FONT.SIZE_5};
            color:${COLOR.Grey_1};
            font-family: "Kanit-regular";
            height: 50px;
            }
        }
        .image_topic {
            height: 41px;
            width: auto;
        }
        ul {
            list-style-type: none;
            overflow: hidden;
            padding-left: 0px;
            margin-bottom: 0px;
        }  
        li {
            float: left;
            }
            .padfont {
                padding-left: 5px;
            }
        }
    }
}
`