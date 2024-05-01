export async function getData() {
    try {
        let response = await fetch('https://dummyjson.com/products?limit=50', {
            method: "GET",
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        let data = await response.json();
        return data.products;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Re-throw the error to handle it further up the call stack
    }
}