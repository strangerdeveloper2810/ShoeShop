import React from "react";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
type Props = {
    children: React.ReactNode
};
const UserLayout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};
export default UserLayout;