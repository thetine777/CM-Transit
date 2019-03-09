import styled from "styled-components"
import { 
    COLOR,
    FONT
 } from 'assets'
 
export const TableHeroStyled = styled.div.attrs({
    width: props => props.width,
    height: props => props.height,
    max_height: props => props.max_height,
})`
/*===============================================
 Container 
===============================================*/
width: ${props => props.width};
height: ${props => props.height};
/*===============================================
Theme 
===============================================*/
    .theme_standard {
        .table_order {
            padding-top: 10px;
            .table-responsive {
                border: 1px solid ${COLOR.Grey_2};
                margin-bottom: 0px;
                border-radius: 10px;
                max-height: ${props => props.max_height};
                overflow: scroll;
                .table {
                    margin-bottom: 0px;
                    th {
                        font-family: "Kanit-bold" ;
                        text-align: center;
                    }
                    td {
                        border: none;
                        font-family: "Kanit-regular" ;
                        text-align: center;
                        .delete_edit {
                            display: flex;
                            justify-content: center;
                            .image {
                                height: 100%;
                                .icon {
                                    width: 16px;
                                    margin-left: 5px;
                                    margin-right: 5px;
                                }
                            }
                        }
                    }
                }
            }                   
        }
    }
    .theme_topRadius {
        .table_order {
            padding-top: 10px;
            .table-responsive {
                border: 1px solid ${COLOR.Grey_2};
                margin-bottom: 0px;
                max-height: ${props => props.max_height};
                border-radius: 10px 10px 0px 0px;
                overflow: scroll;
                .table {
                    margin-bottom: 0px;
                    th {
                        font-family: "Kanit-bold" ;
                        text-align: center;
                    }
                    td {
                        border: none;
                        font-family: "Kanit-regular" ;
                        text-align: center;
                    }
                }
            }                   
        }
    }
    .theme_bottomRadius {
        .table_order {
            padding-top: 10px;
            .table-responsive {
                border: 1px solid ${COLOR.Grey_2};
                margin-bottom: 0px;
                max-height: ${props => props.max_height};
                border-radius: 0px 0px 10px 10px;
                overflow: scroll;
                .table {
                    margin-bottom: 0px;
                    th {
                        font-family: "Kanit-bold" ;
                        text-align: center;
                    }
                    td {
                        border: none;
                        font-family: "Kanit-regular" ;
                        text-align: center;
                    }
                }
            }                   
        }
    }
`