import { BiSolidPhoneCall, BiSolidUser } from 'react-icons/bi';
import { BsArrowDown, BsFillBookmarkCheckFill, BsFillClipboard2DataFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const AppointmentModal = ({ appointment, idx }) => {
	return (
		<dialog id={`appointment${idx}`} className="modal">
			<div className="modal-box text-lg space-y-2">
				<form method="dialog">
					{/* if there is a button in form, it will close the modal */}
					<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
				</form>
				<h2 className="text-2xl font-bold pb-4">Appointment Details</h2>
				<h3 className="flex items-center gap-2">
					<BiSolidUser size={20} />
					<span>Name: {appointment?.name}</span>
				</h3>
				<p className="flex items-center gap-2">
					<MdEmail size={20} />
					<span>Email: {appointment?.email}</span>
				</p>
				<p className="flex items-center gap-2">
					<BiSolidPhoneCall size={20} />
					<span>Phone: {appointment?.phone}</span>
				</p>
				<p className="flex items-center gap-2">
					<BsFillBookmarkCheckFill size={20} />
					<span>Service: {appointment?.servicetype}</span>
				</p>
				<p>
					<span className="flex items-center gap-2 mb-2">
						<BsFillClipboard2DataFill size={20} />
						Info: <BsArrowDown className="ml-3" />
					</span>
					{appointment?.serviceInfo}
				</p>
			</div>
		</dialog>
	);
};

export default AppointmentModal;
