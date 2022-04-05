import axios from "axios";

export class AppService {

    //
    // Projects
    //

    // Get all projects
    // url: /projects
    static async getProjects() {
        const response = await axios.get('/projects');
        return response.data;
    }

    // To do:
    // Get a single project
    // url: /projects/:id
    static async getOneProjects(id: any): Promise<any> {
        const response = await axios.get(`/projects/${id}`);
        return response.data;
    }

    // To do:
    // Create a new project
    // url: /projects
    static async makeProjects(data: any) {
        await axios.post('/projects', data).then((res) => {
            console.log(res);
        })
    }

    // To do:
    // edit an existing project
    // url: /projects/:id
    static async editProject(data: any, id: any): Promise<any> {
        await axios.patch(`/projects/${id}`,{data});
    }

    // To do:
    // Delete a single project
    // url: /projects/:id
    static async deleteProject( id: any): Promise<any> {
        await axios.delete(`/projects/${id}`); 
    }

    //
    // Tasks
    //

    // To do:
    // Get a single tasks
    // url: /tasks
    // static async getAllTask(): Promise<any> {

    // }

    // Get all tasks for a project
    // url: /projects/:projectId/tasks
    // static async getTasksForProject(): Promise<any> {

    //}

    // To do:
    // Get a single tasks
    // url: /tasks/:taskid
    // static async getOneTask(): Promise<any> {

    // }

    // To do:
    // Create a new task
    // url: /projects/:projectId/tasks
    // static async makeTask(): Promise<any> {

    // }

    // To do:
    // edit an existing task
    // url: /projects/:projectId/tasks/:id
    // static async editTask(): Promise<any> {

    // }

    // To do:
    // Delete a single task
    // url: /projects/:projectId/tasks/:id
    // static async deleteTask(): Promise<any> {

    // }

    //
    // Members
    //

    // Get all members
    // url: /members
    static async getMembers() {
        const response = await axios.get('/members');
        return response.data;
    }

    // To do:
    // Get a single member
    // url: /members/:id
    // static async getOneMember(): Promise<any> {

    // }

    // To do:
    // Create a new member
    // url: /members
    // static async makeMember(): Promise<any> {

    // }

    // To do:
    // edit an existing member
    // url: /members/:id
    // static async editMember(): Promise<any> {

    // }

    // To do:
    // Delete a single member
    // url: /members/:id
    // static async deleteMember(): Promise<any> {

    // }

    // To do:
    // Get all members with a relavent skill (and level)
    // url: /skilledMembers
    static async getSkilledMembers(): Promise<any> {
        const response = await axios.get('/skilledMembers', {
            params: {
                name: "Node.js",
                level: "3"
            }
        });
        return response.data;
    }

    // To do:
    // get a members hours allocated
    // url: /members/:id/hours
    // static async getMembersHours(): Promise<any> {

    // }

    // To do:
    // Get members on a project
    // url: /members/:projectId
    // static async getMembersOnProject(): Promise<any> {

    // }

}