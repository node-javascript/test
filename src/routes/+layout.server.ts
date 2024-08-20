// import { redirect } from '@sveltejs/kit';
// import type { LayoutServerLoad } from './$types';

/*
    [ locals ] src/app.d.ts
    본질적으로 단일 요청에 대한 구체적인 데이터를 보관하는 객체

    이 데이터는 요청의 수명 주기 전체에 걸쳐 액세스할 수 있으므로 상태,
    사용자 세션 및 기타 관련 정보를 간소화된 방식으로 관리할 수 있습니다.
*/

// export const load: LayoutServerLoad = async ({ locals }) => {
//     if (!locals.user) {
//         console.log('Access Denied');
//         throw redirect(303, '/');
//     }

//     return {
//         // +page.svelte로 데이터 날라감
//         user: locals.user
//     };
// };