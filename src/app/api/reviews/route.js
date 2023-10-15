import DbConnect from '@/Services/DbConnect';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';

export const DELETE = async (request) => {
	if (request.method === 'DELETE') {
		try {
			const body = await request.json();
			const query = { _id: new ObjectId(body.id) };
			const db = await DbConnect();
			const reviewsCollection = db.collection('reviews');
			const result = await reviewsCollection.deleteOne(query);
			return NextResponse.json(result);
		} catch (error) {
			console.error('Error deleting a review!', error);
			return NextResponse.json({ error: error.message || 'Failed to insert data' });
		}
	} else {
		return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
	}
};

export const GET = async (request) => {
	try {
		const db = await DbConnect();
		const reviewsCollection = db.collection('reviews');
		const result = await reviewsCollection.find().sort({ timestamp: -1 }).toArray();
		return NextResponse.json(result);
	} catch (error) {
		console.error('error for getting data', error);
		NextResponse.json({ error: 'error for getting data' });
	}
};
