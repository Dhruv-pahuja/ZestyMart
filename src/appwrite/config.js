import conf from '../conf/conf.js';
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class AppwriteService {
    client = new Client();
    Databases;

    constructor(){
        his.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
    }

    async submitContact({name,email,message,userId}){
        try {
            return await this.databases.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, userId,{ 
                name,
                email,
                message,

            });
        } catch (error) {
            console.log("Appwrite service :: submitContact :: error", error);
        }
    }
}

const appwriteService = new AppwriteService();
export default appwriteService;