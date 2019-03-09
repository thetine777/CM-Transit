import styled from "styled-components"
import { 
    COLOR,
    FONT
 } from 'assets'
 
export const PosBarcodeSearchStyled = styled.div`
/*===============================================
 Container 
===============================================*/
    
/*===============================================
Theme 
===============================================*/
    .theme_standard { 
        .searching {
            font-size: ${FONT.SIZE_5};
            color: ${COLOR.Grey_1};
            padding-bottom: 10px;
            .form-control {
                height: 30px;
            }
            .form-group {
                display: flex;
                margin: 0px;
            }
            .control-label {
                width: 75px;
            }
        }
    }
`