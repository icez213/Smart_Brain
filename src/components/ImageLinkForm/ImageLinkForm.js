import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({
	onInputChange,
	onButtonSubmit,
}) => {
	return (
		<div>
			<p className="f3 b">
				{
					"This Magic Brain will detect faces in your pictures. Git it a try"
				}
			</p>
			<div className="form center pa4 br3 shadow-5 w-80">
				<input
					className="f4 pa2 w-70 center"
					type="text"
					onChange={onInputChange}
				/>
				<button
					className="w-30 grow f4 link ph3 pv2 white bg-light-purple"
					onClick={onButtonSubmit}>
					Detect
				</button>
			</div>
		</div>
	);
};

export default ImageLinkForm;
