import conf from '../conf/conf.js';
import { Client, Account, ID, OAuthProvider } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password,name);
            if (userAccount) {
                // call another method
                await this.account.updateName(name);
                return this.login({email, password});
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            const session  = await this.account.createEmailPasswordSession(email, password);
            localStorage.setItem("appwrite-user-session", JSON.stringify(session));
            return session;
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }
        return null;
    }

    // async restoreSession() {
    //     const sessionInfo = localStorage.getItem('userSession');
    //     if (sessionInfo) {
    //         const session = JSON.parse(sessionInfo);
    //         // Optionally validate the session with the backend here
    //         // If the session is valid, set it as the current session
    //         // This step depends on how your authentication system is designed
    //         return session;
    //     }
    //     return null;
    // }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
        }
    }

    async SigninWithGoogle() {
        try {
            await this.account.createOAuth2Session(
                OAuthProvider.Google,
                `${window.location.origin}/auth/callback`,
                `${window.location.origin}/signup`
            );
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService();
export default authService;
