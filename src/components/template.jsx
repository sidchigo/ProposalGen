"use client";
import {
    Document,
    Page,
    View,
    Text,
    StyleSheet,
    Link,
    BlobProvider,
    PDFDownloadLink,
} from "@react-pdf/renderer";
import dayjs from "dayjs";

// PDF Styles
const pdfStyles = StyleSheet.create({
    layout: {
        marginLeft: 16,
        marginRight: 16,
        paddingLeft: 32,
        paddingRight: 32,
        height: 1754,
        borderWidth: 1,
        borderColor: "#fca5a5",
        overflow: "scroll",
    },
    page: {
        height: 1754,
        width: 1240,
    },
    flex: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 16,
        alignItems: "center",
    },
    heading: {
        fontSize: 60,
        lineHeight: 1,
        fontWeight: 800,
        marginTop: 16,
    },
    text2XL: {
        fontSize: 24,
        lineHeight: 32,
    },
});

// Preview Styles (matching PDF layout)
const previewStyles = {
    container: {
        height: "80vh",
        border: "1px solid #fca5a5",
        overflow: "auto",
        width: "100%",
        background: "#fff",
        padding: "32px",
    },
    page: {
        width: "210mm",
        minHeight: "297mm",
        margin: "0 auto",
        background: "white",
        padding: "32px",
    },
    flex: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "16px",
        alignItems: "center",
    },
    heading: {
        fontSize: "60px",
        lineHeight: 1,
        fontWeight: 800,
        marginTop: "16px",
    },
    text2XL: {
        fontSize: "24px",
        lineHeight: "32px",
    },
    section: {
        marginTop: "16px",
    },
};

// PDF Document Component
function MyPDFDoc(props) {
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
            <Page size="A4" style={pdfStyles.layout}>
                <View style={pdfStyles.page}>
                    <View style={[pdfStyles.flex, pdfStyles.text2XL]}>
                        <Text>{dayjs().format("DD-MM-YYYY")}</Text>
                        <Text>Logo</Text>
                    </View>
                    <Text style={pdfStyles.heading}>
                        Proposal to {clientName} for {projectTitle}
                    </Text>
                    <View style={pdfStyles.flex}>
                        <View>
                            <Text>Completed by</Text>
                            <Text>John Doe</Text>
                        </View>
                        <View>
                            <Text>Contact</Text>
                            <Link href="mailto:abc@abc.com">abc@abc.com</Link>
                        </View>
                    </View>
                    <View style={{ marginTop: 16 }}>
                        <Text>Project overview</Text>
                        <Text>{projectDescription}</Text>
                        <Text>Estimated time of delivery</Text>
                        <Text>{timeline}</Text>
                        <Text>Scope</Text>
                        <Text>{scope}</Text>
                    </View>
                    <View style={{ marginTop: 16 }}>
                        <Text>Project price</Text>
                        <Text>{pricing}</Text>
                    </View>
                    <View style={{ marginTop: 16 }}>
                        <Text>Terms and conditions</Text>
                        <Text>{termsConditions}</Text>
                    </View>
                </View>
            </Page>
        </Document>
    );
}

// Preview Component
function Preview(props) {
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
        <div style={previewStyles.container}>
            <div style={previewStyles.page}>
                <div style={{ ...previewStyles.flex, ...previewStyles.text2XL }}>
                    <span>{dayjs().format("DD-MM-YYYY")}</span>
                    <span>Logo</span>
                </div>

                <h1 style={previewStyles.heading}>
                    Proposal to {clientName} for {projectTitle}
                </h1>

                <div style={previewStyles.flex}>
                    <div>
                        <p>Completed by</p>
                        <p>John Doe</p>
                    </div>
                    <div>
                        <p>Contact</p>
                        <a href="mailto:abc@abc.com">abc@abc.com</a>
                    </div>
                </div>

                <div style={previewStyles.section}>
                    <h2>Project overview</h2>
                    <p>{projectDescription}</p>
                    <h2>Estimated time of delivery</h2>
                    <p>{timeline}</p>
                    <h2>Scope</h2>
                    <p>{scope}</p>
                </div>

                <div style={previewStyles.section}>
                    <h2>Project price</h2>
                    <p>{pricing}</p>
                </div>

                <div style={previewStyles.section}>
                    <h2>Terms and conditions</h2>
                    <p>{termsConditions}</p>
                </div>
            </div>
        </div>
    );
}

// Main Template Component
export default function Template(props) {
    return (
        <div>
            <Preview {...props} />
            <div style={{ marginTop: "16px" }}>
                <PDFDownloadLink
                    document={<MyPDFDoc {...props} />}
                    fileName="proposal.pdf"
                    style={{
                        padding: "8px 16px",
                        backgroundColor: "#3b82f6",
                        color: "#ffffff",
                        borderRadius: "4px",
                        textDecoration: "none",
                    }}
                >
                    {({ loading }) => (loading ? "Preparing..." : "Export as PDF")}
                </PDFDownloadLink>
            </div>
        </div>
    );
}
