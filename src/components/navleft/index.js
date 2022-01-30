import React from "react";
import "./index.css";
import { Hidden, Grid } from "@mui/material";

const NavLeft = (props) => {

    return (
        <Grid className="gridItem_LeftNav" xs={12} sm={12} md={8} lg={3} xl={3} item container spacing={0} direction="column" alignItems="flex-start">
            {props.item.map((item, index) => (
                <Grid item key={index}>
                    <div className= {`div_navStack div_navStack${index}`} >
                        {item.name}
                    </div>
                </Grid>
            ))}
            <Grid item>
                {/* Đoạn này kh hiểu s nút tắt nó kh close, trong khi cái nav bên component navbar dòng 16 cùng logic lại oce */}
                <div className="div_navStack div_navStackClose" onClick={props.onClick}> -Close- </div>
            </Grid>
        </Grid>)
}

const ExpandButton = (props) => {
    return (
    <div className="div_expandButton" >
        <Hidden only={['xs','sm']}>
            <div className="div_expandButton_text" onClick={props.onClick}>
                ba gach
            </div>
        </Hidden>
    </div>
    )
}
export {ExpandButton};
export default NavLeft;