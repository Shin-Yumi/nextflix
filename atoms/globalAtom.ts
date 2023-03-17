import { atom } from 'recoil';
import { Movie, TV } from '@/typings';

export const modalState = atom({
	key: 'modalState',
	default: false,
});
export const movieState = atom< TV | Movie | null>({
	key: 'movieState',
	default: null,
});
