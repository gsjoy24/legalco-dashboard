import DbConnect from '@/Services/DbConnect';
import { NextResponse } from 'next/server';

export const POST = async (request) => {
	if (request.method === 'POST') {
		try {
			const body = await request.json();
			const db = await DbConnect();
			const adminCollection = db.collection('admin');
			const result = await adminCollection.insertOne({
				...body,
				timestamp: new Date(),
				role: 'none'
			});
			return NextResponse.json(result);
		} catch (error) {
			console.error('Error inserting new user!', error);
			return NextResponse.json({ error: error.message || 'Failed to insert data' });
		}
	} else {
		return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
	}
};

// export const GET = async (request) => {
// 	try {
// 		const email = request.nextUrl.searchParams.get('email');
// 		const db = await DbConnect();
// 		const userCollection = db.collection('users');
// 		if (email) {
// 			const query = { email: email };
// 			const result = await userCollection.findOne(query);
// 			return NextResponse.json(result);
// 		}
// 		const result = await userCollection.find().toArray();
// 		return NextResponse.json(result);
// 	} catch (error) {
// 		console.error('error for getting data', error);
// 		NextResponse.json({ error: 'error for getting data' });
// 	}
// };
