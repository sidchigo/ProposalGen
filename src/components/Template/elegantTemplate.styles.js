import { StyleSheet, Font } from "@react-pdf/renderer";

// Font.register({
// 	family: "Inter",
// 	fonts: [
// 		{
// 			src: "/fonts/InterSemiBold.ttf", // Replace with actual font path
// 		}, // Normal
// 	],
// });

export const boldYellowStyles = StyleSheet.create({
	page: {
		fontSize: 11,
		padding: 40,
		lineHeight: 1.6,
		color: "#111111",
		backgroundColor: "#FFFFFF",
		// fontFamily: "Helvetica",
	},

	heading: {
		fontSize: 26,
		fontWeight: "bold",
		color: "#222222",
		marginBottom: 20,
		textTransform: "uppercase",
		letterSpacing: 1.2,
	},

	section: {
		marginBottom: 25,
	},

	label: {
		fontSize: 10,
		color: "#F4B400",
		textTransform: "uppercase",
		marginBottom: 4,
		fontWeight: 500,
		letterSpacing: 0.5,
	},

	value: {
		fontSize: 11,
		color: "#1D1D1D",
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
		backgroundColor: "#FDEFB2",
		marginVertical: 20,
	},

	cost: {
		color: "#F4B400",
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

export const elegantTemplateStyles = StyleSheet.create({
	page: {
		paddingTop: 10,
		backgroundColor: "#EFEAE6",
		fontSize: 11,
		color: "#222",
		lineHeight: 1.6,
		// fontFamily: "Helvetica", // replace with a display font for more impact
		paddingBottom: 50,
		// fontFamily: "Inter",
	},

	// Layout containers
	section: {
		padding: 20,
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
		backgroundColor: "#32292F",
		bottom: 0,
		left: 0,
		right: 0,
		fontSize: 9,
		color: "#F0F7F4",
		flexDirection: "row",
		justifyContent: "space-between",
		borderTop: "1 solid #F0F7F4",
		padding: 20,
		marginTop: 10,
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
