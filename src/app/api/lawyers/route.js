import DbConnect from '@/Services/DbConnect';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';

export const GET = async () => {
	try {
		const db = await DbConnect();
		const lawyerCollection = db.collection('lawyer');
		const result = await lawyerCollection.find().toArray();
		return NextResponse.json(result);
	} catch (error) {
		console.error('error for getting data', error);
		NextResponse.json({ error: 'error for getting data' });
	}
};

export const POST = async (request) => {
	try {
		const body = await request.json();
		const db = await DbConnect();
		const lawyerCollection = db.collection('lawyer');
		const result = await lawyerCollection.insertOne({...body});
		return NextResponse.json(result);
	} catch (error) {
		console.error('error for getting data', error);
		NextResponse.json({ error: 'error for getting data' });
	}
};

export const DELETE = async (request) => {
	if (request.method === 'DELETE') {
		try {
			const body = await request.json();
			const query = { _id: new ObjectId(body.id) };
			const db = await DbConnect();
			const appointmentsCollection = db.collection('lawyer');
			const result = await appointmentsCollection.deleteOne(query);
			return NextResponse.json(result);
		} catch (error) {
			console.error('Error deleting a review!', error);
			return NextResponse.json({ error: error.message || 'Failed to insert data' });
		}
	} else {
		return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
	}
};
