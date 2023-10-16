import Image from 'next/image';
import { BiSolidPhoneCall, BiSolidUser } from 'react-icons/bi';
import { BsArrowDown, BsFillBookmarkCheckFill, BsFillClipboard2DataFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const LawyerAppointmentModal = ({ appointment, idx }) => {
	return (
		<dialog id={`LawyerAppointment${idx}`} className="modal">
			<div className="modal-box max-w-2xl text-lg space-y-2 p-10">
				<form method="dialog">
					{/* if there is a button in form, it will close the modal */}
					<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
				</form>
				<h2 className="text-2xl font-bold pb-4">Appointment Details</h2>

				{/* Lawyer Info */}
				<div className="mb-6">
					<h3 className="text-xl font-bold pb-4">Lawyer Info</h3>
					<div className="flex items-center gap-3 flex-wrap">
						<Image src={appointment?.lawyerImage} alt={appointment?.lawyerName} width={200} height={200} />
						<div className="space-y-2 min-w-[300px]">
							<p className="flex items-center gap-2">
								<BiSolidUser size={20} />
								<span>Name: {appointment?.lawyerName}</span>
							</p>
							<p className="flex items-center gap-2">
								<MdEmail size={20} />
								<span>Email: {appointment?.lawyerContactInfo?.email}</span>
							</p>
							<p className="flex items-center gap-2">
								<BiSolidPhoneCall size={20} />
								<span>Phone: {appointment?.lawyerContactInfo?.phone}</span>
							</p>
						</div>
					</div>
				</div>

				{/* lawyer info */}
				<div className="pt-6 space-y-2">
					<h3 className="text-xl font-bold pb-4">Customer Info</h3>
					<p className="flex items-center gap-2">
						<BiSolidUser size={20} />
						<span>Name: {appointment?.name}</span>
					</p>
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
						<span>Service: {appointment?.name}</span>
					</p>
					<p>
						<span className="flex items-center gap-2 mb-2">
							<BsFillClipboard2DataFill size={20} />
							Info: <BsArrowDown className="ml-3" />
						</span>
						{appointment?.serviceInfo}
					</p>
				</div>
			</div>
		</dialog>
	);
};

export default LawyerAppointmentModal;
