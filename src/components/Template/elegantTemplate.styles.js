import { StyleSheet } from "@react-pdf/renderer";

export const elegantTemplateStyles = StyleSheet.create({
	page: {
		padding: 0,
		backgroundColor: "#EFEAE6",
		fontSize: 11,
		color: "#222",
		lineHeight: 1.6,
		fontFamily: "Helvetica", // replace with a display font for more impact
	},

	// Layout containers
	section: {
		padding: 40,
		backgroundColor: "#FFFFFF",
		marginBottom: 10,
	},

	heading: {
		fontSize: 30,
		fontWeight: 700,
		textTransform: "uppercase",
		letterSpacing: 1,
		marginBottom: 10,
		color: "#1A1A1A",
		borderBottom: "2px solid #DDD",
		paddingBottom: 8,
	},

	label: {
		fontSize: 10,
		color: "#6E6E6E",
		textTransform: "uppercase",
		marginBottom: 3,
		letterSpacing: 0.6,
		fontWeight: 600,
	},

	value: {
		fontSize: 12,
		marginBottom: 6,
		color: "#2A2A2A",
	},

	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start",
		gap: 30,
		marginBottom: 15,
	},

	divider: {
		height: 2,
		backgroundColor: "#E5E5E5",
		marginVertical: 20,
	},

	cost: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#8E3B46",
		marginTop: 5,
		backgroundColor: "#FAF0ED",
		paddingVertical: 6,
		paddingHorizontal: 10,
		borderRadius: 4,
		alignSelf: "flex-start",
	},

	listItem: {
		marginBottom: 5,
		paddingLeft: 10,
		borderLeft: "3px solid #DDD",
	},

	footer: {
		position: "absolute",
		bottom: 30,
		left: 40,
		right: 40,
		fontSize: 9,
		color: "#999",
		flexDirection: "row",
		justifyContent: "space-between",
		borderTop: "1 solid #DDD",
		paddingTop: 10,
	},

	// Optional header layout override
	headerCard: {
		backgroundColor: "#FDFBF8",
		padding: 30,
		borderBottom: "2px solid #EEE",
	},

	headerRow: {
		flexDirection: "row",
		justifyContent: "space-between",
	},

	logoBox: {
		width: 50,
		height: 50,
		backgroundColor: "#222",
		borderRadius: 4,
	},

	highlightBox: {
		backgroundColor: "#F4E3D7",
		padding: 15,
		borderRadius: 6,
		marginVertical: 10,
	},
});
