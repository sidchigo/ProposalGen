import { StyleSheet } from "@react-pdf/renderer";

export const modernTemplateStyles = StyleSheet.create({
	page: {
		fontSize: 11,
		padding: 40,
		lineHeight: 1.6,
		color: "#2D2D2D",
		backgroundColor: "#FFFDF9",
		// fontFamily: "Helvetica",
	},

	heading: {
		fontSize: 26,
		fontWeight: "bold",
		color: "#1A1A1A",
		marginBottom: 20,
		textTransform: "uppercase",
		letterSpacing: 1.2,
	},

	section: {
		marginBottom: 25,
	},

	label: {
		fontSize: 10,
		color: "#A58F6F",
		textTransform: "uppercase",
		marginBottom: 4,
		fontWeight: 500,
		letterSpacing: 0.5,
	},

	value: {
		fontSize: 11,
		color: "#2B2B2B",
		lineHeight: 1.5,
	},

	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		gap: 20,
		marginBottom: 10,
	},

	divider: {
		height: 1,
		backgroundColor: "#E4DCCC",
		marginVertical: 20,
	},

	cost: {
		color: "#946E3C",
		fontSize: 14,
		fontWeight: "bold",
	},

	listItem: {
		marginBottom: 5,
	},

	footer: {
		position: "absolute",
		bottom: 30,
		left: 40,
		right: 40,
		fontSize: 9,
		color: "#AAA",
		flexDirection: "row",
		justifyContent: "space-between",
		borderTop: "1 solid #DDD",
		paddingTop: 8,
	},
});
