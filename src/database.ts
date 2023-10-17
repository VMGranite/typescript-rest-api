import { App } from './app';

export async function getCustomerById(id: number): Promise<{ id: string; company: string, country: string } | null> {
    try {
        const data = await App.pool.query('SELECT id, name FROM customer WHERE id = $1;', [id]);

        const customer = {
            id: data.rows[0].id,
            company: data.rows[0].company || null,
            country: data.rows[0].country || null
        };

        return customer
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
