import axios from "axios";

export class AppService {
    static async getProjects(): Promise<any> {
        const response = await axios.get('/projects');
        return response.data;
    }
}