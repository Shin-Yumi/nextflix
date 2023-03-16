import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyB7DhSo1zMivirNMpGcU2OeX73sPxZNekI',
	authDomain: 'react2023-9df28.firebaseapp.com',
	projectId: 'react2023-9df28',
	storageBucket: 'react2023-9df28.appspot.com',
	messagingSenderId: '353235598540',
	appId: '1:353235598540:web:ce2c8c507a71984b629669',
};

//firebase로 구동한 app이 없으면 아직 인증처리가 되지 않은 상태에서만 초기화
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth();

export default app;
export { auth };
