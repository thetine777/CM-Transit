import styled from "styled-components"
import { 
    COLOR,
    FONT
 } from 'assets'
 
export const PosQDoorStyled = styled.div`
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
                font-size: ${FONT.SIZE_8};
                color:${COLOR.Grey_1};
                border-right: 1px solid ${COLOR.Grey_2};
                font-weight: bold;
                font-family: "Kanit-bold";
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
                cursor: pointer;
                &:hover {
                    background: ${COLOR.GREEN_1};
                    .topic {
                        color: ${COLOR.white};
                    }
                }
                .padfont {
                    padding-left: 5px;
                }
            }
        }
    }
`