import styled from "styled-components"
import { 
    COLOR,
    FONT
 } from 'assets'
 
export const PosModalStyled = styled.div`
/*===============================================
 Container 
===============================================*/
    
/*===============================================
Theme 
===============================================*/
    .theme_payment {
        .modal_payment {
            display: flex;
            justify-content: center;
            width: fit-content;
            padding-left: 31px;
            padding-top: 33px;
            padding-bottom: 36px;
            .modal_image {
                padding-right: 28px; 
                .size_figure {
                    width: 114px;
                    height: 116px;
                    .size_image {
                        width: 100%;
                        height: auto;
                    }
                }
            }
            p {
                font-family: "Kanit-regular";
                color: ${COLOR.Grey_1};
                font-size: ${FONT.SIZE_9};
                margin: 0px;
            }
        }
        .modal_payment2 {
            display: flex;
            justify-content: center;
            font-family: "Kanit-regular";
            font-size: ${FONT.SIZE_14};
            margin-bottom: 15px;
            .price {
                color: ${COLOR.GREEN_3};
                padding-right: 27px;
            }
            .discount {
                color: ${COLOR.Orenge};
            } 
        }
        .modal_payment3 {
            display: flex;
            justify-content: center;
            font-family: "Kanit-regular";
            margin-bottom: 13px;
            .font_style {
                padding-left: 21px;
                padding-right: 7px;
                font-size: ${FONT.SIZE_13};
                color: ${COLOR.Grey_1};
            }
            .font_bath {
                font-size: ${FONT.SIZE_13};
                color: ${COLOR.GREEN_3};
                padding-right: 10px;
            }
            .padding {
                padding-top: 5px;          
                .modal_button {
                    color: ${COLOR.white};
                    background: ${COLOR.GREEN_3};
                    border: none;
                    border-radius: 50%;
                    height: 27px;
                    width: 27px;
                }
                .modal_input_amount {
                    margin-left: 5px;
                    margin-right: 5px;
                    border: 1px solid ${COLOR.Grey_2};
                    height: 34px;
                    width: 80px;
                    text-align: center;
                }
            }
            .modal_input_discount {
                margin-right: 5px;
                border: 1px solid ${COLOR.Grey_2};
                height: 34px;
                width: 80px;
                margin-top: 5px;
                text-align: center;
            } 
        }
        .modal_payment4 {
            display: flex;
            justify-content: center;
            font-family: "Kanit-regular";
            .font_sum {
                color: ${COLOR.Orenge};
                font-size: ${FONT.SIZE_15};
            }
            .font_bath {
                font-size: ${FONT.SIZE_15};
                color: ${COLOR.GREEN_3};
                padding-right: 12px;
                padding-left: 9px;
            }
            .modal_input_sum {
                margin-top: 10px;
                border: 1px solid ${COLOR.Grey_2};
                height: 34px;
                width: 80px;
                text-align: center;
            } 
        }
        .modal_payment5 {
            display: flex;
            justify-content: center;
            font-family: "Kanit-regular";
            padding-top: 14px;
            padding-bottom: 26px;
            .botton_submit {
                height: 40px;
                width: 93px;
                border: 2px solid ${COLOR.GREEN_3};
                background: ${COLOR.white};
                border-radius: 20px;
                p {
                    font-size: ${FONT.SIZE_12};
                    color: ${COLOR.GREEN_3};
                    font-family: "Kanit-regular";
                    line-height: 1;
                }
            }  
        }
    }
    .theme_member {
        .modal_member_all {
            display: flex;
            .modal_member {
                display: flex;
                justify-content: center;
                font-family: "Kanit-regular";
                height: 181px;
                width: 477px;
                padding-top: 15px;
                margin-top: 16px;
                margin-bottom: 16px;
                margin-left: 31px;
                border-right: 1px solid ${COLOR.Grey_1};
                .modal_image {
                    padding-right: 40px;
                    .size_figure {
                        width: 101px;
                        height: 85px;
                        .size_image {
                            width: 100%;
                            height: auto;
                        }
                    }  
                }
                .Detail_style {
                    padding-right: 30px; 
                    p {
                        font-family: "Kanit-regular";
                        color: ${COLOR.Grey_1};
                        font-size: ${FONT.SIZE_9};
                        margin: 0px;
                    }   
                }    
            }
            .modal_member2 {
                font-family: "Kanit-regular";
                display: flex;
                flex-direction: column;
                align-items: center;
                p {
                    font-family: "Kanit-regular";
                    font-size: ${FONT.SIZE_16};
                    text-align: center;
                    // height: 140px;
                    line-height: 1; 
                    margin: 0px;
                }
                .font_point {
                    font-size: ${FONT.SIZE_9};
                    color: ${COLOR.GREEN_3};
                    text-align: center;
                }
            }
        }
    }
    .theme_Q {
        margin-top: 14px;
        margin-left: 23px;
        margin-right: 23px;
        margin-bottom: 25.5px;
        .modal_Q {
            display: flex;
            justify-content: flex-start;
            font-family: "Kanit-regular";
            .modal_image {
                padding-right: 14px;
                padding-left: 8px;
                .size_figure {
                    width: 66px;
                    height: 52px;
                    .size_image {
                        width: 100%;
                        height: auto;
                    }
                }  
            }
            .font_style {
                font-size: ${FONT.SIZE_11};
                color: ${COLOR.GREEN_3};
                padding-top: 10px;
            } 
        }
        .modal_Q2 {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            font-family: "Kanit-regular";
            margin-top: 23px;
            padding-left: 46px;
            padding-right: 46px;
            .button_Q {
                width: calc(20% - 19px);
                height: 34px;
                background: ${COLOR.white};
                color: ${COLOR.GREEN_3};
                border: 1px solid ${COLOR.GREEN_3};
                font-size: ${FONT.SIZE_7};
                border-radius: 5px;
                text-align: center;
                margin-left: 9.5px;
                margin-right: 9.5px;
                margin-top: 8.5px;
                margin-bottom: 8.5px; 
            }
        }
    }
    .theme_Catalog {
        .modal_catalog {
            font-family: "Kanit-regular";
            font-size: ${FONT.SIZE_10};
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            height: 212px;
            width: max-content;
            .sub_catalog {
                display: flex;    
                height: 48px;
                width: 180px;
                margin-left: 23px;
                border-right: 1px solid ${COLOR.Grey_2};
                .Minus {
                    display: flex;
                    align-items: center;
                }
                .border_catalog {
                    border-top: 1px solid ${COLOR.Grey_2};
                    width: 150px;
                    display: flex;
                    align-items: center;
                }
                &:hover {
                    color: ${COLOR.GREEN_3};    
                    font-family: "Kanit-bold";      
                }
                &:first-child{   
                    .border_catalog {
                        border-top: none;
                    } 
                }
                &:nth-child(5n+0) {  
                    .border_catalog {
                        border-top: none;
                    }
                }
            }
        }
    }
`