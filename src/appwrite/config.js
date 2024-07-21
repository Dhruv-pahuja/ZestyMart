import conf from '../conf/conf.js';
import { Client, Databases, ID } from "appwrite";
import authService from "./auth.js";
export class AppwriteService {
    client = new Client();
    databases;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
    }

    async submitContact({ name, email, message }) {
        const uniqueID = ID.unique();
        let userId = uniqueID;
        try {
            const currentUser = await authService.getCurrentUser();
            if (currentUser) {
                userId = currentUser.$id;
            }
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,   
                conf.appwriteCollectionId, 
                uniqueID,                    
                { 
                    "Full-Name": name,
                    "Email": email,
                    "contact-message": message,
                    "UserId": userId
                }
            );
        } catch (error) {
            console.error("Appwrite service :: submitContact :: error", error);
            throw error;
        }
    }
}

const appwriteService = new AppwriteService();

export default appwriteService;
