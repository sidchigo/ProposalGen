import React from "react";
import {
	Page,
	Text,
	View,
	Document,
	StyleSheet,
	renderToBuffer,
	Font,
} from "@react-pdf/renderer";

// Create styles
Font.register({
	family: "Inter",
	src: "http://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fMZhrib2Bg-4.ttf",
});

// Create styles
const styles = StyleSheet.create({
	body: {
		paddingTop: 35,
		paddingBottom: 65,
		paddingHorizontal: 35,
	},
	headerRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		backgroundColor: "#e4dcd3",
		paddingLeft: 20,
		paddingRight: 20,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingLeft: 20,
		paddingRight: 20,
	},
	headerTitle: {
		fontSize: 18,
		fontFamily: "Inter",
	},
	rowText: {
		fontSize: 14,
		fontFamily: "Helvetica",
		paddingTop: 5,
		paddingBottom: 5,
	},
	title: {
		fontSize: 24,
		textAlign: "center",
		fontFamily: "Inter",
	},
	author: {
		fontSize: 12,
		textAlign: "center",
	},
	sideText: {
		marginLeft: 12,
		fontSize: 12,
		textAlign: "left",
	},
	subtitle: {
		fontSize: 18,
		margin: 12,
		fontFamily: "Inter",
	},
	text: {
		margin: 12,
		fontSize: 14,
		textAlign: "justify",
		fontFamily: "Times-Roman",
	},
	image: {
		marginVertical: 15,
		marginHorizontal: 100,
	},
	header: {
		fontSize: 12,
		marginBottom: 20,
		textAlign: "center",
		color: "grey",
	},
});

// Create Document Component
const Receipt = () => (
	<Document>
		<Page style={styles.body}>
			<Text style={styles.header} fixed>
				title will be here
			</Text>
			<Text style={styles.title}>Don Quijote de la Mancha</Text>
			<Text style={styles.author}>Miguel de Cervantes</Text>
			<Text style={styles.author}>Miguel de Cervantes</Text>
			<Text style={styles.author}>Miguel de Cervantes</Text>

			<View
				style={{
					flex: 1,
					flexDirection: "row",
					justifyContent: "space-between",
				}}
			>
				<View>
					<Text style={styles.subtitle}>Issued to:</Text>
					<Text style={styles.sideText}>
						Name of the person 1234567890
					</Text>
					<Text style={styles.sideText}>1234567890</Text>
				</View>
				<View>
					<Text style={styles.subtitle}>Receipt No: 1234567890</Text>
					<Text style={styles.sideText}>Date: 22/08/2024</Text>
				</View>
			</View>

			<View style={styles.headerRow}>
				<Text style={styles.headerTitle}>Event</Text>
				<Text style={styles.headerTitle}>Amount</Text>
			</View>
			<View style={styles.row}>
				<Text style={styles.rowText}>Event number 1</Text>
				<Text style={styles.rowText}>100</Text>
			</View>
			<View style={styles.headerRow}>
				<Text style={styles.headerTitle}>Total</Text>
				<Text style={styles.headerTitle}>100</Text>
			</View>

			<View
				style={{
					flex: 1,
					flexDirection: "row",
					justifyContent: "flex-end",
				}}
			>
				<View>
					<Text style={styles.subtitle}>Thank you</Text>
					<Text style={styles.sideText}>Signature</Text>
				</View>
			</View>
		</Page>
	</Document>
);

export const POST = async (request) => {
	try {
		// ReactPDF.renderToFile(<Receipt />, `receipt.pdf`);
		const pdf = await renderToBuffer(<Receipt />);
		return new Response(pdf, {
			headers: {
				"Content-Type": "application/pdf",
				"Content-disposition": `attachment;filename="receipt.pdf"`,
			},
		});
	} catch (error) {
		console.log("Error in generating receipt PDF: ", error);
		return new Response(JSON.stringify({ msg: "Failed to generate PDF" }), {
			status: 500,
		});
	}
};
