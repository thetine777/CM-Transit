import styled from "styled-components"
import {
    COLOR,
    FONT
} from 'assets'

export const ShowMoneyStyled = styled.div.attrs({
    width: props => props.width,
    height: props => props.height,
})`
/*===============================================
 Container 
===============================================*/
    
/*===============================================
Theme 
===============================================*/
    .theme_black {
        .title {
            text-align: center;
            color: ${COLOR.BLACK};
        }
        .show_money {
            border: 2px solid ${COLOR.BLACK};
            border-radius: 6px;
            height: ${props => props.height};
            width: ${props => props.width};
            text-align: center;
            color: ${COLOR.BLACK};
            .bath {
                padding-left: 5px;
                color: ${COLOR.BLACK};
            }
        }
    }
    .theme_red {
        .title {
            text-align: center;
            color: ${COLOR.RED};
        }
        .show_money {
            border: 2px solid ${COLOR.RED};
            border-radius: 6px;
            height: ${props => props.height};
            width: ${props => props.width};
            text-align: center;
            color: ${COLOR.RED};
            .bath {
                padding-left: 5px;
                color: ${COLOR.RED};
            }
        }
    }
    .theme_green {
        .title {
            text-align: center;
            color: ${COLOR.GREEN_5};
        }
        .show_money {
            border: 2px solid ${COLOR.GREEN_5};
            border-radius: 6px;
            height: ${props => props.height};
            width: ${props => props.width};
            color: ${COLOR.GREEN_5};
            text-align: center;
            .bath {
                padding-left: 5px;
                color: ${COLOR.GREEN_5};
            }
        }
    }
    .theme_balance {
        .title {
            text-align: center;
            color: ${COLOR.GREEN_3};
        }
        .show_money {
            border: 1.5px solid ${COLOR.Grey_3};
            border-radius: 0px 0px 10px 10px;
            text-align: center;
            color: ${COLOR.Grey_1};
            height: ${props => props.height};
            width: ${props => props.width};
        }
    }
    .theme_barBlackTop {
        .title {
            text-align: center;
            color: ${COLOR.BLACK};
        }
        .show_money {
            text-align: center;
            color: ${COLOR.BLACK};
            height: ${props => props.height};
            width: ${props => props.width};
            border-radius: 10px 10px 0px 0px;
            border: 2px solid ${COLOR.BLACK};
            font-size: ${FONT.SIZE_9};
        }
    }
    .theme_barGrey {
        .title {
            text-align: center;
            color: ${COLOR.Grey_5};
        }
        .show_money {
            text-align: center;
            color: ${COLOR.Grey_5};
            height: ${props => props.height};
            width: ${props => props.width};
            border: 2px solid ${COLOR.Grey_5};
            font-size: ${FONT.SIZE_9};
        }
    }
    .theme_barRed {
        .title {
            text-align: center;
            color: ${COLOR.RED};
        }
        .show_money {
            text-align: center;
            color: ${COLOR.RED};
            height: ${props => props.height};
            width: ${props => props.width};
            border: 2px solid ${COLOR.RED};
            font-size: ${FONT.SIZE_9};
        }
    }
    .theme_barGreen {
        .title {
            text-align: center;
            color: ${COLOR.GREEN_3};
        }
        .show_money {
            text-align: center;
            color: ${COLOR.GREEN_3};
            height: ${props => props.height};
            width: ${props => props.width};
            border: 2px solid ${COLOR.GREEN_3};
            font-size: ${FONT.SIZE_9};
        }
    }
    .theme_barBlackBottom {
        .title {
            text-align: center;
            color: ${COLOR.BLACK};
        }
        .show_money {
            text-align: center;
            color: ${COLOR.BLACK};
            height: ${props => props.height};
            width: ${props => props.width};
            border-radius: 0px 0px 10px 10px;
            border: 2px solid ${COLOR.BLACK};
            font-size: ${FONT.SIZE_9};
        }
    }
`