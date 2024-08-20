import type { Handle } from '@sveltejs/kit';

// 후크를 사용하여 로컬을 초기화
export const handle: Handle = async ({ event, resolve }) => {
    // const session = event.cookies.get('session');

    // if (session) {
    //     const user = getUserBySession(session);
    // }

    // if (session) {
    //     const user = await getUserBySession(session);
    //     if (user) {
    //         event.locals.user = {
    //             id: user.id,
    //             email: user.email,
    //             role: user.role
    //         };
    //     } else {
    //         event.locals.user = null;
    //     }
    // } else {
    //     event.locals.user = null;
    // }

    event.locals.user = {
        email: 'null',
        password: '',
        social: '',
        social_id: ''
    }

    return resolve(event);
}