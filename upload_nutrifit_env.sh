for env in production; do
  echo "AIzaSyCwt1uhz0Je4SjvPS9C8grFcNivNzvKLfc" | npx vercel env add VITE_FIREBASE_API_KEY $env
  echo "nutrifit-b9bc6.firebaseapp.com" | npx vercel env add VITE_FIREBASE_AUTH_DOMAIN $env
  echo "nutrifit-b9bc6" | npx vercel env add VITE_FIREBASE_PROJECT_ID $env
  echo "nutrifit-b9bc6.firebasestorage.app" | npx vercel env add VITE_FIREBASE_STORAGE_BUCKET $env
  echo "90113509608" | npx vercel env add VITE_FIREBASE_MESSAGING_SENDER_ID $env
  echo "1:90113509608:web:e219f370bcfef2fcc8a15d" | npx vercel env add VITE_FIREBASE_APP_ID $env
done
npx vercel --prod --yes
