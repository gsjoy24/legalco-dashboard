'use client';
import BlogRow from '@/components/BlogRow';
import Loading from '@/components/Loading';
import UseBlogs from '@/hooks/UseBlogs';

const Blogs = () => {
	const [allBlogs, refetch, setRefetch] = UseBlogs();

	return allBlogs && Array.isArray(allBlogs) ? (
		<>
			<h1 className="md:text-2xl mb-5 text-xl font-bold">All Blogs</h1>
			<div className="mx-auto overflow-x-auto max-w-[330px] sm:max-w-[620px] md:max-w-[740px] lg:max-w-[830px]">
				<table className="table min-w-full border">
					{/* head */}
					<thead>
						<tr>
							<th>
								<label>#</label>
							</th>
							<th>Title</th>
							<th>Subtitle</th>
							<th>Posted Date</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{/* rows */}
						{allBlogs &&
							allBlogs.map((blog, i) => (
								<BlogRow blog={blog} i={i} key={blog._id} setRefetch={setRefetch} refetch={refetch} />
							))}
					</tbody>
					{/* foot */}
					<tfoot>
						<tr>
							<th>
								<label>#</label>
							</th>
							<th>Title</th>
							<th>Subtitle</th>
							<th>Posted Date</th>
							<th>Action</th>
						</tr>
					</tfoot>
				</table>
			</div>
		</>
	) : (
		<Loading />
	);
};

export default Blogs;
