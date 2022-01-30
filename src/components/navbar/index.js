import React from "react";
import './index.css';

import { Container, Grid, Hidden } from "@mui/material";

const Navbar = (props) => {

    const width = window.innerWidth;
    console.log(width);
    return (
    <Container className="navComponent" maxWidth={'fixed'} disableGutters={true}>
        <Grid className="grid_container" container spacing={0}>
            <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                <div className="div_navGrid div_navGrid1" >
                    <Hidden only={['xs','sm']}>Logo</Hidden>
                    <Hidden only={['md','lg','xl']}><div onClick={props.onClick}>Nav</div></Hidden>
                </div> 
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <Hidden only={['xs','sm']}>
                    <div className="div_navGrid div_navGrid2">
                        <Grid container spacing={0}>
                            <Grid item md={8} lg={8} xl={8}>

                            </Grid>
                            <Grid item md={4} lg={4} xl={4}>Alert</Grid>
                        </Grid>
                    </div>
                </Hidden>
                <Hidden only={['md','lg','xl']}>
                    <div className="div_navGrid div_navGrid2">Logo</div>
                </Hidden>
            </Grid>
            <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                <div className="div_navGrid div_navGrid3">
                    <Hidden only={['xs','sm']}>Account</Hidden>
                    <Hidden only={['md','lg','xl']}>Alert</Hidden>
                </div> 
            </Grid>
        </Grid>
    </Container>
    )
}

export default Navbar;