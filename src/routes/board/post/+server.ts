import { type RequestHandler } from '@sveltejs/kit';

// Get
export const GET: RequestHandler = async (event) => {
    const option: ResponseInit = {
        status: 418,        // Status Code
        headers: {
            x: 'Gon give it to ya' // Response Headers
        }
    }

    return new Response('Hello', option);
}

// Post
export const POST: RequestHandler = async (event) => {
    const data = await event.request.formData();

    const email = data.get('email') as string;

    console.log(email);

    return new Response(
        JSON.stringify({ success: true }), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}