import compoundLogo from '../assets/img/compound.png';
import aavelogo from '../assets/img/aave.jpg';
import curvelogo from '../assets/img/curve.png';
import { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Network from './Network';
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useGlobalState } from '../hooks/GlobalState';

function Defi() {
    const [balance, setBalance] = useState(localStorage.getItem('balance'));
    const [days, setDays] = useGlobalState('day');

    function showBalance() {
        setBalance(localStorage.getItem('balance'));
    }

    function changeDays(event) {
        setDays(event.target.value);
    }

    return (
        <div className="defi-main">
            <h1>Defi Eco System Demo</h1>
            <Button variant="contained" color="primary" onClick={showBalance}>Current Balance</Button>
            <h3>${balance}</h3>
            <div className="primary-networks">
                <Grid container>
                    <Grid item xs={12} md={4}>
                        <Network image={compoundLogo} title="Compound" interest="5"></Network>
                    </Grid>
                    <Grid item xs={4}>
                        <Network image={aavelogo} title="Aave" interest="3"></Network>
                    </Grid>
                    <Grid item xs={4}>
                        <Network image={curvelogo} title="Curve" interest="2.5"></Network>
                    </Grid>
                </Grid>
            </div>
            <div className="time-section">
                <TextField
                    id="standard-number"
                    label="Days Passed"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    onChange={changeDays}
                />
            </div>
        </div>
    );
}

export default Defi;