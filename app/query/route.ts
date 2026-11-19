//  postgres library: talking to database
import postgres from 'postgres';

// ceating connection using  POSTGRES_URL fr .env
// ssl: 'require' = encrypt the connection need neon
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

// Query: gewt the value of invoice and customer
// JOIN = connect invoice, customer with using of customer id
// WHERE = one invoice  (yung amount na 666)
async function listInvoices() {
  const data = await sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `;

  return data;
}

// GET handler: running when we open  localhost:3000/query
export async function GET() {
  try {
    // return the value of query as  JSON
    return Response.json(await listInvoices());
  } catch (error) {
    
    return Response.json({ error }, { status: 500 });
  }
}