'use client';
import Loading from '@/components/Loading';
import ReviewRow from '@/components/ReviewRow';
import UseReviews from '@/hooks/UseReviews';

const Reviews = () => {
	const [reviews, refetch, setRefetch] = UseReviews();

	return reviews && Array.isArray(reviews) ? (
		<>
			<h1 className="md:text-2xl mb-5 text-xl font-bold">All Reviews</h1>
			<div className="mx-auto overflow-x-auto max-w-[330px] sm:max-w-[620px] md:max-w-[740px] lg:max-w-[830px]">
				<table className="table min-w-full border">
					{/* head */}
					<thead>
						<tr>
							<th>
								<label>#</label>
							</th>
							<th>Name</th>
							<th>Rating</th>
							<th>Posted Date</th>
							<th>Review</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						{/* rows */}
						{reviews &&
							reviews.map((review, i) => (
								<ReviewRow review={review} i={i} key={reviews._id} setRefetch={setRefetch} refetch={refetch} />
							))}
					</tbody>
					{/* foot */}
					<tfoot>
						<tr>
							<th>
								<label>#</label>
							</th>
							<th>Name</th>
							<th>Rating</th>
							<th>Posted Date</th>
							<th>Review</th>
							<th>Delete</th>
						</tr>
					</tfoot>
				</table>
			</div>
		</>
	) : (
		<Loading />
	);
};

export default Reviews;
