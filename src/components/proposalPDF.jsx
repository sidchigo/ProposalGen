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

const ProposalPDF = ({ styles, ...props }) => {
	const {
		clientName,
		projectTitle,
		projectDescription,
		timeline,
		scope,
		pricing,
		termsConditions,
		companyName,
		companyEmail,
		website,
	} = props;
	console.log({ showCompanyEmail: companyName || companyEmail });

	return (
		<Document pageMode="fullScreen" title={projectTitle}>
			<Page wrap size="A4" style={styles.page}>
				{/* Header */}
				<View style={styles.section}>
					<Text style={styles.heading}>{projectTitle}</Text>
					<View style={styles.row}>
						<View style={styles.column}>
							<Text style={styles.label}>Prepared For</Text>
							<Text style={styles.value}>{clientName}</Text>
						</View>
						{(companyName || companyEmail) && (
							<View style={styles.column}>
								<Text style={styles.label}>From</Text>
								<Text style={styles.value}>{companyName}</Text>
								<Text style={styles.value}>
									{companyEmail || ""}
								</Text>
							</View>
						)}
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
					<Text>{website}</Text>
				</View>
			</Page>
		</Document>
	);
};

export default ProposalPDF;
