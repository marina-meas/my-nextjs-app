// import { db } from "@vercel/postgres";

// const client = await db.connect();

// async function listInvoices() {
// 	const data = await client.sql`
//     SELECT invoices.amount, customers.name
//     FROM invoices
//     JOIN customers ON invoices.customer_id = customers.id
//     WHERE invoices.amount = 666;
//   `;

// 	return data.rows;
// }

<<<<<<< HEAD
// export async function GET() {
//   // return Response.json({
//   //   message:
//   //     'Uncomment this file and remove this line. You can delete this file when you are finished.',
//   // });
//   try {
//   	return Response.json(await listInvoices());
//   } catch (error) {
//   	return Response.json({ error }, { status: 500 });
//   }
// }
=======
export async function GET() {
  return Response.json({
    message:
      'Uncomment this file and remove this line. You can delete this file when you are finished.',
  });
  // try {
  // 	return Response.json(await listInvoices());
  // } catch (error) {
  // 	return Response.json({ error }, { status: 500 });
  // }
}
>>>>>>> 42449fa6a9d05c57e7cd8f273b1e6269dc91e9b8
