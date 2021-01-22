import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip, Button } from "@material-ui/core";
import './PaymentView.css';
import PaymentDialog from "../payments/PaymentDialog";
import axios from 'axios'
import Spinner from '../shared/Spinner'

function PaymentView() {
    const [paymentList, setPaymentList] = useState([]);
    const [isPaymentUpdate, setIsPaymentUpdate] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [updatePayment, setUpdatePayment] = useState({ id: "", dueDate: "", category: "", description: "", status: "", amount: "" });

    useEffect(() => {
        const getPaymentsUrl = "http://localhost:5000/api/Payment";
        axios.get(getPaymentsUrl).then(res => {
            setIsLoading(false);
            setPaymentList(res.data);
        })
    }, [isPaymentUpdate]);

    const updatePaymentKey = () => {
        setIsPaymentUpdate(!isPaymentUpdate);
        setIsLoading(true);
    }

    const renderTableHeader = () => {
        let headerValues = ['Due By', 'Description', 'Status', 'Amount', ' ']
        return headerValues.map((key, val) => {
            return <TableCell key={val}>{key}</TableCell>
        })
    }

    const handleClickOpen = (data: any) => {
        setOpen(true);
        setUpdatePayment(data);
    };

    const renderTableRows = () => {
        let currentDate = new Date();
        return paymentList && paymentList.map((data) => {

            const { id, dueDate, category, description, status, amount } = data;

            let formatedDate = JSON.stringify(dueDate).substring(1, 11);
            let displayDate = new Date(formatedDate);
            let displayMonth = displayDate.toString().split(" ")[1];
            let displayDay = displayDate.toString().split(" ")[2];

            return (
                <TableRow key={id}>
                    <TableCell style={{ fontWeight: 'bolder' }}>
                        <div>{displayMonth}</div><br /><div>{displayDay}</div>
                    </TableCell>
                    <TableCell><div>{category}</div><br /><div>{description}</div></TableCell>
                    <TableCell>{(status === 'Unpaid') && (displayDate < currentDate) ?
                        <Chip size="small" label="Overdue" color="secondary" />
                        : '  '}</TableCell>
                    <TableCell style={{ fontWeight: 'bolder' }}>{amount}</TableCell>
                    <TableCell>
                        {status === 'Unpaid' ?
                            <Button variant="contained" color="primary" onClick={() => handleClickOpen(data)}>Pay</Button>
                            : ' '}</TableCell>
                </TableRow>
            )
        })
    }

    return (
        <div className="payment__view">
            <PaymentDialog id={updatePayment.id}
                dueDate={updatePayment.dueDate}
                category={updatePayment.category}
                description={updatePayment.description}
                status={updatePayment.status}
                dollarAmount={updatePayment.amount}
                updatePaymentKey={updatePaymentKey}
                open={open}
                setOpen={setOpen} />
            {isLoading ? <Spinner /> : <TableContainer component={Paper}>
                <Table id='paymentList' size="small">
                    <TableHead>
                        <TableRow>
                            {renderTableHeader()}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {renderTableRows()}
                    </TableBody>
                </Table>
            </TableContainer>
            }
        </div>
    )
}

export default PaymentView
