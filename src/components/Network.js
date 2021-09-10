
import { useState } from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useGlobalState } from '../hooks/GlobalState';

function Network(props) {
    const [amount, setAmount] = useState(0);
    const [interest, setInterst] = useState(0);
    const [total, setTotal] = useState(0);
    const rate = props.interest;
    const [days, setDays] = useGlobalState('day');

    var balance = localStorage.getItem('balance');
    
    function ShowInterest(event) {
        setAmount(event.target.value * 1);
        setInterst(event.target.value * rate / 100);
    }

    function DepositAmount() {
        if(amount > balance) alert("You can't deposit more than current balance!!!");
        else {
            setTotal(total + amount);
            localStorage.setItem('balance', balance - amount);
        }
    }

    function WithdrawAmount() {
        if(amount > total) alert("You cant withdraw more than deposited amount!!!");
        else {
            setTotal(total - amount);
            localStorage.setItem('balance', balance * 1 + amount * 1);
        }
        console.log(localStorage.getItem('balance'));
    }

    return (
        <div>
            <div className="network-header">
                <img src={props.image} width="100" height="100" /> <br />
                <label>{props.title}: {props.interest}%</label>
            </div>
            <div className="deposit-withdraw">
                <TextField
                    id="standard-number"
                    label="Amount"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    onChange={ShowInterest}
                />
                <div className="amount-interest">
                    <label>Entered Amount: ${amount}</label> <br />
                    <label>Interst Rate: ${interest}</label>
                </div>
            </div>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button onClick={DepositAmount}>Deposit</Button>
                <Button onClick={WithdrawAmount}>Withdraw</Button>
            </ButtonGroup>
            <div className="total-info">
                <label>Total Deposited: ${total}</label> <br />
                <label>Earned Interest: ${((total * rate / 100) * (days / 365)).toFixed(2)}</label>
            </div>
        </div>
    );
}

export default Network;