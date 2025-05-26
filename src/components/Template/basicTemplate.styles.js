import { StyleSheet } from "@react-pdf/renderer";

export const basicTemplateStyles = StyleSheet.create({
	page: {
		// fontFamily: "Inter",
		fontSize: 12,
		padding: 30,
		lineHeight: 1.6,
		color: "#000",
	},
	section: {
		marginBottom: 20,
	},
	heading: {
		fontSize: 22,
		fontWeight: "bold",
		marginBottom: 10,
	},
	label: {
		fontSize: 10,
		color: "#888",
		textTransform: "uppercase",
		marginBottom: 3,
	},
	value: {
		fontSize: 12,
		marginBottom: 5,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	divider: {
		height: 1,
		backgroundColor: "#ddd",
		marginVertical: 10,
	},
	cost: {
		color: "#d32f2f",
		fontWeight: "bold",
		fontSize: 12,
	},
	listItem: {
		marginBottom: 5,
	},
	footer: {
		position: "absolute",
		bottom: 30,
		left: 30,
		right: 30,
		fontSize: 10,
		color: "#888",
		flexDirection: "row",
		justifyContent: "space-between",
	},
});
