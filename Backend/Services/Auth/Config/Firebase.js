import { cert, initializeApp } from "firebase-admin/app";
import ServiceAccount from "../../../../ServiceAccount.json" with { type: "json" };

export const app = initializeApp({
    credential: cert(ServiceAccount),
});