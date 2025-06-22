import * as admin from 'firebase-admin';
import { getApps } from 'firebase-admin/app';
import * as serviceAccount from './serviceAccountKey.json';

if (!getApps().length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  });
}

export const firestore = admin.firestore();
