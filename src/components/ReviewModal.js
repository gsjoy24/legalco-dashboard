const ReviewModal = ({ review, i }) => {
	return (
		<dialog id={`review${i}`} className="modal">
			<div className="modal-box">
				<form method="dialog">
					{/* if there is a button in form, it will close the modal */}
					<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
				</form>
				<h3 className="font-bold text-lg">Review by {review?.name}!</h3>
				<p className="py-4">{review?.reviewText}</p>
			</div>
		</dialog>
	);
};

export default ReviewModal;
