import {AlertColor} from "@mui/material/Alert";

export interface NotificationProps {
    open: boolean;
    onClose: () => void;
    message: string;
    severity: "success" | "error" | "warning" | "info";
}

export interface NotificationMethods {
    showNotification: (message: string, severity: AlertColor) => void;
}