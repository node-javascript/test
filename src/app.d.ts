import { TloginUser } from './lib/types';

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: TloginUser
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export { };
