import styled from "styled-components"
import { 
    COLOR,
    FONT
 } from 'assets'
 
export const PosTopicStyled = styled.div`
/*===============================================
 Container 
===============================================*/
    
/*===============================================
Theme 
===============================================*/
    .theme_standard {
        .direction_content1 {                    
            padding-left: 12px;
            // border-right: 2px solid ${COLOR.Grey_2};
            .content_topic {
                padding-top: 14px;
                .product_topic1 {
                    font-size: ${FONT.SIZE_8};
                    width: 60%;
                    border-bottom: 1.5px solid ${COLOR.Grey_2};
                    cursor: pointer;
                }
                .product_topic2 {
                    padding-top: 15px;
                    font-size: ${FONT.SIZE_8};
                    width: 60%;
                    border-bottom: 1.5px solid ${COLOR.Grey_2};
                }
            }
        }
    }
`