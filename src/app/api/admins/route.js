import DbConnect from '@/Services/DbConnect';
import { NextResponse } from 'next/server';

export const POST = async (request) => {
	if (request.method === 'POST') {
		try {
			const body = await request.json();
			const db = await DbConnect();
			const adminCollection = db.collection('admins');
			const result = await adminCollection.insertOne(body);
			return NextResponse.json(result);
		} catch (error) {
			console.error('Error inserting new admin!', error);
			return NextResponse.json({ error: error.message || 'Failed to insert data' });
		}
	} else {
		return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
	}
};

export const GET = async (request) => {
	try {
		const email = request.nextUrl.searchParams.get('email');
		const db = await DbConnect();
		const adminCollection = db.collection('admins');
		if (email) {
			const query = { email: email };
			const result = await adminCollection.findOne(query);
			return NextResponse.json(result);
		}

		return NextResponse.json({ error: 'error for getting data' });
	} catch (error) {
		console.error('error for getting data', error);
		NextResponse.json({ error: 'error for getting data' });
	}
};
