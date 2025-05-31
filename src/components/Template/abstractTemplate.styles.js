import { StyleSheet, Font } from "@react-pdf/renderer";

Font.register({
	family: "Lora",
	fonts: [{ src: "/fonts/LoraSemiBold.ttf" }],
});

Font.register({
	family: "Nunito",
	fonts: [{ src: "/fonts/NunitoSemibold.ttf" }],
});

export const abstractTemplateStyles = StyleSheet.create({
	page: {
		fontSize: 12,
		paddingTop: 20,
		paddingBottom: 65,
		lineHeight: 1.7,
		backgroundColor: "#EDEAF7", // soft lavender
		color: "#2B2B2B",
		fontFamily: "Nunito",
	},

	heading: {
		fontSize: 28,
		fontWeight: "700",
		fontFamily: "Lora",
		color: "#7E57C2", // soft violet
		marginBottom: 20,
		letterSpacing: 0.8,
		textTransform: "uppercase",
		textAlign: "center",
		backgroundColor: "#F5F3FA",
		padding: 10,
		marginTop: -20,
		borderBottom: "5pt solid #D1C4E9",
	},

	section: {
		marginBottom: 25,
		padding: 20,
		backgroundColor: "#F5F3FA", // light violet block
		border: "1pt solid #D1C4E9", // muted purple border
		borderRadius: 8,
		marginHorizontal: 20,
	},

	label: {
		fontSize: 10,
		color: "#9575CD", // soft muted purple
		textTransform: "uppercase",
		marginBottom: 4,
		fontWeight: 600,
		letterSpacing: 0.5,
	},

	value: {
		fontSize: 11,
		color: "#2B2B2B",
		lineHeight: 1.6,
	},

	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		gap: 20,
		marginBottom: 10,
		marginHorizontal: 20,
	},

	divider: {
		height: 0,
	},

	cost: {
		fontSize: 13,
		fontWeight: "600",
		color: "#4A148C",
	},

	listItem: {
		marginBottom: 6,
		paddingLeft: 10,
		borderLeft: "2px solid #CE93D8", // lighter purple bar
	},

	footer: {
		position: "absolute",
		bottom: 30,
		left: 40,
		right: 40,
		fontSize: 9,
		color: "#6A1B9A",
		flexDirection: "row",
		justifyContent: "space-between",
		borderTop: "1 solid #CE93D8",
		paddingTop: 10,
	},
});
