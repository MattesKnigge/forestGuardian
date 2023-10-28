import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const InfoDialog = ({ open, onClose }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle style={styles.title}>Welcome to ForestGuardian</DialogTitle>
            <DialogContent>
                <p style={styles.paragraph}>
                    <strong>ForestGuardian</strong> is an advanced environmental monitoring system, designed to provide invaluable insights into our natural world.
                </p>
                <p style={styles.paragraph}>
                    Explore the following features:
                </p>
                <ul style={styles.featuresList}>
                    <li><strong>Refresh:</strong> Keep your data up-to-date with a single click. The latest information is always at your fingertips.</li>
                    <li><strong>Info:</strong> Dive deeper into the system's capabilities by clicking the "Info" button and discover more about its functionalities.</li>
                </ul>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary" style={styles.closeButton}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

const styles = {
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
    },
    paragraph: {
        margin: '16px 0',
    },
    featuresList: {
        listStyleType: 'disc',
        marginLeft: '24px',
        marginTop: '8px',
    },
    closeButton: {
        color: '#1E1F1E',
        backgroundColor: '#537A5A',
    },
};

export default InfoDialog;
