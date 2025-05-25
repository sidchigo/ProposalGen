import {
	Document,
	Page,
	Text,
	View,
	StyleSheet,
	Font,
	Image,
} from "@react-pdf/renderer";
import dayjs from "dayjs";

// Optional: Register fonts
Font.register({
	family: "Inter",
	fonts: [
		{
			src: "/fonts/InterRegular.ttf", // Replace with actual font path
		}, // Normal
	],
});

// Styles
const styles = StyleSheet.create({
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

const ProposalPDF = (props) => {
	const {
		clientName,
		projectTitle,
		projectDescription,
		timeline,
		scope,
		pricing,
		termsConditions,
	} = props;

	return (
		<Document>
			<Page size="A4" style={styles.page}>
				{/* Header */}
				<View style={styles.section}>
					<Text style={styles.heading}>{projectTitle}</Text>
					<View style={styles.row}>
						<View>
							<Text style={styles.label}>Prepared For:</Text>
							<Text style={styles.value}>{clientName}</Text>
						</View>
						<View>
							<Text style={styles.label}>From</Text>
							<Text style={styles.value}>Siddhesh Naik</Text>
							<Text style={styles.value}>
								sid.naik26@mail.com
							</Text>
						</View>
						{/* <Image
						src="https://tanakastudio.com/logo.png" // Replace with actual logo path
						style={{ width: 40, height: 40 }}
					/> */}
					</View>
				</View>

				<View style={styles.divider} />

				{/* Scope */}
				<View style={styles.section}>
					<Text style={styles.label}>Scope</Text>
					<Text style={styles.value}>{scope}</Text>
				</View>

				{/* Pricing */}
				<View style={styles.section}>
					<Text style={styles.label}>Cost</Text>
					<Text style={styles.cost}>{pricing}</Text>
				</View>

				{/* Timeline */}
				<View style={styles.section}>
					<Text style={styles.label}>Timeline</Text>
					<Text style={styles.value}>{timeline}</Text>
				</View>

				{/* Description */}
				<View style={styles.section}>
					<Text style={styles.label}>Description</Text>
					<Text style={styles.value}>{projectDescription}</Text>
				</View>

				{/* T&C */}
				<View style={styles.section}>
					<Text style={styles.label}>Terms & conditions</Text>
					<Text style={styles.value}>{termsConditions}</Text>
				</View>

				{/* Footer */}
				<View style={styles.footer}>
					<Text>
						Proposal Created On: {dayjs().format("DD/MM/YYYY")}
					</Text>
					<Text>proposalgen.vercel.app</Text>
				</View>
			</Page>
		</Document>
	);
};

export default ProposalPDF;
