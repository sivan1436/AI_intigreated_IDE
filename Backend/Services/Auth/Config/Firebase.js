import {initializeApp} from "firebase-admin";
import ServiceAccount from "C:\Users\kiran kumar\OneDrive\Apps\Ai-intigrated-IDE\ServiceAccount.json" with {type: "json"}; 

export const app = initializeApp({
    credential: cert(ServiceAccount)
})