import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { Button, Dialog, IconButton, Typography, Chip } from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import './PaymentDialog.css';
import axios from 'axios'
import React from 'react';

const styles = (theme: Theme) =>
    createStyles({
        root: {
            margin: 0,
            padding: theme.spacing(2),
        },
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        }
    });

export interface DialogTitleProps extends WithStyles<typeof styles> {
    id: string;
    children: React.ReactNode;
    onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

function PaymentDialog(props: any) {
    const handleClose = () => {
        props.setOpen(false);
    };

    //Argument types for Update Payment
    interface IUpdatePayment {
        id: string;
        dollarAmount: number;
    }

    const handlePayNow = (req: IUpdatePayment) => {

        let id = JSON.stringify(req.id);
        let amt = JSON.stringify(req.dollarAmount);

        props.setOpen(false);
        axios({
            method: 'put',
            url: 'http://localhost:5000/api/Payment',
            data: {
                id: id,
                amount: amt
            }
        }).then((res) => {
            props.updatePaymentKey();
        }, (error) => {
            console.log(error);
        });
    }

    let formatedDate = JSON.stringify(props.dueDate).substring(1, 11);
    let displayDate = new Date(formatedDate);
    let displayMonth = displayDate.toString().split(" ")[1];

    return (
        <div>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={props.open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    <div className='dialog__headerLineOne'><div className="dialog__headerLineOneBold">{props.description}</div>
                        <div className="dialog__headerLineTwo">
                            <p>{displayMonth} {props.category}</p>
                            <p>{props.dollarAmount}</p>
                        </div>
                    </div>
                </DialogTitle>
                <DialogContent dividers>
                    <div className="dialog__contentLineOne">
                        <div style={{ fontWeight: 'bolder' }}>Total Today:</div>
                        <div><Chip size="small" label={props.dollarAmount} color="primary" className="dialog__chip" /></div>
                    </div>
                    <Typography className="dialog__contentLineTwo">
                        Your account ending with 12345 will be charged
                    </Typography>
                    <Typography align="center" gutterBottom>
                        By Clicking Pay Now, I hereby authorize Landlord Studio Limited, a Delaware corporation,
                        hereinafter called the company to handle my payment transaction process.
                     </Typography>
                </DialogContent>
                <DialogActions className="dialog__submitButton">
                    <Button autoFocus onClick={() => handlePayNow(props)} variant="contained" color="primary">
                        Pay Now
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default PaymentDialog
