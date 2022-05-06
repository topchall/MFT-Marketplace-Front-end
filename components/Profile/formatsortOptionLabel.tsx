import React from "react";

const formatsortOptionLabel = ({ value, label, customAbbreviation }) => (
	<div style={{ display: "flex", alignItems: "center", background: "transparent", height: "40px" }}>
		<div style={{color: "black", fontWeight: "bold", paddingLeft: "10px"}}>{label}</div>
	</div>
);

export default formatsortOptionLabel;
