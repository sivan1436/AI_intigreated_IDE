import Project from "../Models/projectModel.js";


export async function CreateProject(req, res) {
    try{
      const userId = req.headers['x-user-id'];
      if(!userId) {
        return res.status(401).json({ message: "User ID not Required" });
      }
      const {name , description} = req.body;
      const project = await Project.create({
        owner : userId,
        name,
        description
      })
      return res.status(201).json(project);
    }
    catch(error){
     return res.status(500).json({ message: "Internal Server Error" });
    }
}


export async function getProjects(req, res) {
    try{
      const userId = req.headers['x-user-id'];
      if(!userId) {
        return res.status(401).json({ message: "User ID not Required" });
      }
     const projects = await Project.find({ owner : userId }).sort({updatedAt:-1});

      return res.status(201).json(projects);
    }
    catch(error){
     return res.status(500).json({ message: "Internal Server Error" });
    }
}

