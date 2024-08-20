import type { ParamMatcher } from '@sveltejs/kit';

export const match: ParamMatcher = (param) => {

    // 문자와 숫자만 허용, %20 허용안함
    return /^[a-zA-Z0-9-]+$/.test(param)
}