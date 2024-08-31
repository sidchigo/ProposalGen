import React from "react";
import {
	Page,
	Text,
	View,
	Document,
	StyleSheet,
	renderToBuffer,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
	page: {
		flexDirection: "row",
		backgroundColor: "#E4E4E4",
	},
	section: {
		margin: 10,
		padding: 10,
		flexGrow: 1,
	},
});

// Create Document Component
const Receipt = () => (
	<Document>
		<Page size="A4" style={styles.page}>
			<View style={styles.section}>
				<Text>Section #1</Text>
			</View>
			<View style={styles.section}>
				<Text>Section #2</Text>
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
