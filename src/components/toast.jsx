import toast from "react-hot-toast";

export default function showToast(message) {
	return toast.success(message, {
		style: {
			border: "1px solid #FEAF6F",
			padding: "8px",
			color: "#FEAF6F",
			background: "#211D38",
			borderRadius: "5px",
		},
		iconTheme: {
			primary: "#FEAF6F",
			secondary: "#FFFAEE",
		},
	});
}
