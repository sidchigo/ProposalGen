import { StyleSheet } from "@react-pdf/renderer";

export const modernTemplateStyles = StyleSheet.create({
	page: {
		fontSize: 12,
		paddingHorizontal: 20,
		paddingTop: 20,
		paddingBottom: 65,
		lineHeight: 1.6,
		color: "#2E2E2E",
		backgroundColor: "#F9FAFB",
		fontFamily: "Nunito",
	},

	heading: {
		fontSize: 28,
		fontWeight: "bold",
		color: "#1D4ED8",
		marginBottom: 20,
		textTransform: "uppercase",
		letterSpacing: 1,
		fontFamily: "Inter",
	},

	section: {
		marginBottom: 12,
		padding: 20,
		backgroundColor: "#FFFFFF",
		borderRadius: 6,
		boxShadow: "0px 2px 4px rgba(0,0,0,0.05)",
	},

	headerSection: {
		marginBottom: 12,
		padding: 20,
		backgroundColor: "#FFFFFF",
		borderRadius: 6,
		border: "1pt solid #E0E7FF",
		boxShadow: "0px 2px 4px rgba(0,0,0,1)",
	},

	label: {
		fontSize: 16,
		color: "#2563EB",
		textTransform: "uppercase",
		marginBottom: 3,
		fontWeight: 600,
		letterSpacing: 0.4,
		fontFamily: "Inter",
	},

	value: {
		fontSize: 11,
		color: "#374151",
		lineHeight: 1.5,
	},

	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		gap: 10,
		marginBottom: 12,
	},

	divider: {
		height: 0,
	},

	cost: {
		color: "#1D4ED8",
		fontSize: 14,
		fontWeight: "bold",
		backgroundColor: "#EFF6FF",
		paddingVertical: 4,
		paddingHorizontal: 8,
		borderRadius: 4,
		lineHeight: 1.5,
		alignSelf: "flex-start",
	},

	listItem: {
		marginBottom: 6,
		paddingLeft: 8,
		borderLeft: "3px solid #93C5FD",
	},

	footer: {
		position: "absolute",
		bottom: 30,
		left: 40,
		right: 40,
		fontSize: 9,
		color: "#6B7280",
		flexDirection: "row",
		justifyContent: "space-between",
		borderTop: "1 solid #D1D5DB",
		paddingTop: 8,
	},
});
