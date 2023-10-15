import DbConnect from '@/Services/DbConnect';
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
