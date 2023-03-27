import admin from 'firebase-admin';
const fireConfig = {
  project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  private_key: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY.replace(
    /\\n/g,
    '\n'
  ),
  client_email: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
};

let app;

try {
  app = admin.initializeApp({
    credential: admin.credential.cert(fireConfig),
  });
  console.log('Initialized.');
} catch (error) {
  /*
   * We skip the "already exists" message which is
   * not an actual error when we're hot-reloading.
   */
  if (!/already exists/u.test(error.message)) {
    console.error('Firebase admin initialization error', error.stack);
  }
}

export const firestore = admin.firestore();
// export const storage = admin
//   .storage()
//   .bucket(process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET);

export default app;
