import { Metadata } from "next";
import { PropsWithChildren } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
	title: "Kenton Duprey - Web Developer",
	description: "Building elegant web solutions for clients and companies",
};

const inter = Inter({
	subsets: ["latin"],
	style: ["normal"],
	variable: "--font-raleway",
});

const rootLayout = ({ children }: PropsWithChildren) => {
	return (
		<html lang="en" className={`${inter.variable}`}>
			<body>{children}</body>
		</html>
	);
};

export default rootLayout;
