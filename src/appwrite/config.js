import conf from '../conf/conf.js';
import { Client, Databases,ID, } from "appwrite";
import authService from "./auth.js"
export class AppwriteService {
    client = new Client();
    databases;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
    }
    
    async submitContact({ name, email, message,}) {
        let userId = authService.getCurrentUser() ? authService.getCurrentUser().id : ID.unique();
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,   
                conf.appwriteCollectionId, 
                userId,                    
                { 
                    "Full-Name":name,
                    "Email":email,
                    "contact-message":message,
                    "UserId":userId
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
