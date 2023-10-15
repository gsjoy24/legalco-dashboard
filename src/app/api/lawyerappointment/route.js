import DbConnect from '@/Services/DbConnect';
import { NextResponse } from 'next/server';

export const GET = async () => {
	try {
		const db = await DbConnect();
		const appointmentsCollection = db.collection('lawyerappointments');
		const result = await appointmentsCollection.find().sort({timestamp : 1}).toArray();
		return NextResponse.json(result);
	} catch (error) {
		console.error('error for getting data', error);
		NextResponse.json({ error: 'error for getting data' });
	}
};