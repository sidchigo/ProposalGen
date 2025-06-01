import { StyleSheet } from "@react-pdf/renderer";

export const elegantTemplateStyles = StyleSheet.create({
	page: {
		fontSize: 12,
		paddingHorizontal: 20,
		paddingTop: 20,
		paddingBottom: 65,
		lineHeight: 1.6,
		color: "#F5F5F5",
		backgroundColor: "#1A1A1A",
		fontFamily: "Inter",
	},

	heading: {
		fontSize: 30,
		fontWeight: "bold",
		color: "#FFD700",
		marginBottom: 20,
		textTransform: "uppercase",
		letterSpacing: 1.5,
		fontFamily: "Playfair",
	},

	section: {
		marginBottom: 25,
		padding: 20,
		backgroundColor: "#2C2C2C",
		borderRadius: 6,
	},

	label: {
		fontSize: 14,
		color: "#E0C77C",
		textTransform: "uppercase",
		marginBottom: 4,
		fontWeight: 600,
		fontFamily: "Playfair",
	},

	value: {
		fontSize: 11,
		color: "#EAEAEA",
		lineHeight: 1.5,
	},

	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		gap: 20,
		marginBottom: 12,
	},

	divider: {
		height: 1,
		backgroundColor: "#555",
		marginVertical: 20,
	},

	cost: {
		fontSize: 11,
		color: "#EAEAEA",
		lineHeight: 1.5,
	},

	listItem: {
		marginBottom: 6,
		paddingLeft: 10,
		borderLeft: "3px solid #FFD700",
	},

	footer: {
		position: "absolute",
		bottom: 30,
		left: 40,
		right: 40,
		fontSize: 9,
		color: "#AAAAAA",
		flexDirection: "row",
		justifyContent: "space-between",
		borderTop: "1 solid #555",
		paddingTop: 8,
	},
});
