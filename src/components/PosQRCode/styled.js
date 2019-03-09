import styled from "styled-components"
import { 
    COLOR,
    FONT
 } from 'assets'
 
export const PosQRCodeStyled = styled.div`
/*===============================================
 Container 
===============================================*/
    
/*===============================================
Theme 
===============================================*/
    .theme_standard {
        .input_member {
            display : flex;
            .pad_barcode_qrcode {
                padding-right: 7px;
                padding-left: 7px;
                border-left: 1.5px solid ${COLOR.Grey_3};
                height: 34px;
            }                      
        }
    }
`