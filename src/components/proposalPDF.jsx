import { Document, Page, Text, View, Font } from "@react-pdf/renderer";
import dayjs from "dayjs";
import { elegantTemplateStyles } from "./Template/elegantTemplate.styles";
import { modernTemplateStyles } from "./Template/modernTemplate.styles";
import { abstractTemplateStyles } from "./Template/abstractTemplate.styles";

const templateMap = {
	elegant: elegantTemplateStyles,
	modern: modernTemplateStyles,
	abstract: abstractTemplateStyles,
};

Font.register({
	family: "Lora",
	fonts: [{ src: "/fonts/LoraSemiBold.ttf" }],
});

Font.register({
	family: "NunitoSemiBold",
	fonts: [{ src: "/fonts/NunitoSemibold.ttf" }],
});

Font.register({
	family: "Nunito",
	fonts: [{ src: "/fonts/NunitoRegular.ttf" }],
});

Font.register({
	family: "Inter",
	fonts: [{ src: "/fonts/InterSemiBold.ttf" }],
});

Font.register({
	family: "Inter",
	fonts: [{ src: "/fonts/InterRegular.ttf" }],
});

Font.register({
	family: "Playfair",
	fonts: [{ src: "/fonts/PlayfairDisplayBold.ttf" }],
});

const ProposalPDF = ({ template, ...props }) => {
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
	const styles = templateMap[template];

	return (
		<Document pageMode="fullScreen" title={projectTitle ?? "Proposal"}>
			<Page wrap size="A4" style={styles.page}>
				{/* Header */}
				<View style={styles.headerSection}>
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
				<View fixed style={styles.footer}>
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
