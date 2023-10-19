"use client"
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps, AlertColor } from '@mui/material/Alert';
import { NotificationProps, NotificationMethods } from '@/types/Notification';

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Notification: React.FC<NotificationProps & { ref?: React.Ref<NotificationMethods> }> = forwardRef(
    ({ open, onClose, message, severity }, ref) => {
        const [isOpen, setIsOpen] = useState<boolean>(open);
        const [notificationMessage, setNotificationMessage] = useState<string>(message);
        const [notificationSeverity, setNotificationSeverity] = useState<AlertColor>(severity);

        useImperativeHandle(ref, () => ({
            showNotification: (message: string, severity: AlertColor) => {
                setNotificationMessage(message);
                setNotificationSeverity(severity);
                setIsOpen(true);
            },

            isOpen: isOpen,
            onClose: () => setIsOpen(false),
            message: notificationMessage,
            severity: notificationSeverity,
        }), [isOpen, notificationMessage, notificationSeverity]);

        const handleClose = () => {
            setIsOpen(false);
            if (onClose) {
                onClose();
            }
        };

        return (
            <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={notificationSeverity} sx={{ width: '100%' }}>
                    {notificationMessage}
                </Alert>
            </Snackbar>
        );
    }
);

Notification.displayName = 'Notification';
export default React.memo(Notification);
