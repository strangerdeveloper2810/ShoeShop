import React from "react";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { Container } from "@mui/material";
type Props = {
    children: React.ReactNode
};
const UserLayout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Header />
            <Container>
                {children}
            </Container>
            <Footer />
        </>
    );
};
export default UserLayout;