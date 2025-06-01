import toast from "react-hot-toast";

export default function showToast(message) {
	return toast.success(message, {
		style: {
			border: "1px solid #42bfb3",
			padding: "8px",
			color: "#42bfb3",
			background: "#1a3641",
			borderRadius: "0.5rem",
		},
		iconTheme: {
			primary: "#42bfb3",
			secondary: "#FFFAEE",
		},
	});
}
