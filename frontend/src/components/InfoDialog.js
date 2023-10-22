// InfoDialog.js
import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const InfoDialog = ({ open, onClose }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Info</DialogTitle>
            <DialogContent>
                <p>
                    <strong>ForestGuardian is a monitoring system that provides data on various environmental conditions.</strong>
                </p>
                <p>
                    <strong>Wildfire Indicator:</strong> The Icons change with the temperature. The color of the icon changes to orange if the temperature is above 30°C, 35°C or 40°C.
                </p>
                <p>
                    <strong>Refresh:</strong> Clicking this button will refresh the data.
                </p>
                <p>
                    <strong>Info:</strong> Clicking this button opens this information dialog.
                </p>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default InfoDialog;
