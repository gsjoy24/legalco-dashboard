import DbConnect from '@/Services/DbConnect';
import { ObjectId } from 'mongodb';
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

export const PUT = async (request) => {
	if (request.method === 'PUT') {
		try {
			const body = await request.json();
			const db = await DbConnect();
			const adminCollection = db.collection('admins');
			const filter = { _id: new ObjectId(body.id) };
			const option = { upsert: true };

			// Toggle the "role" field between "admin" and "none"
			const update = {
				$set: { role: body.role === 'admin' ? 'none' : 'admin' }
			};

			// Perform the update
			const result = await adminCollection.updateOne(filter, update, option);
			return NextResponse.json(result);
		} catch (error) {
			return NextResponse.json({ error: 'Failed to update role' });
		}
	} else {
		return NextResponse.json({ message: 'Method not allowed' });
	}
};

export const GET = async (request) => {
	try {
		const db = await DbConnect();
		const adminCollection = db.collection('admins');
		const result = await adminCollection.find().toArray();
		return NextResponse.json(result);
	} catch (error) {
		console.error('error for getting data', error);
		NextResponse.json({ error: 'error for getting data' });
	}
};
