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

export async function getProjectById(req, res) {
    try{
      const userId = req.headers['x-user-id'];
      if(!userId) {
        return res.status(401).json({ message: "User ID not Required" });
      }
      const { id } = req.params;
     const project = await Project.findById(id);

      return res.status(201).json(project);
    }
    catch(error){
     return res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function StarredProjects(req, res) {
    try{
      const userId = req.headers['x-user-id'];
      if(!userId) {
        return res.status(401).json({ message: "User ID not Required" });
      }
     const projects = await Project.find({ owner : userId ,
        starred : true
     }).sort({updatedAt:-1});

      return res.status(201).json(projects);
    }
    catch(error){
     return res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function ToggleStar(req, res) {
    try {
        const userId = req.headers['x-user-id'];
        if(!userId) {
          return res.status(401).json({ message: "User ID not Required" });
        }
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "Project ID not provided" });
        }
        const project = await Project.findById({ _id: id, owner: userId });
        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }
        project.starred = !project.starred;
        await project.save();
        return res.status(200).json({ message: "Project starred status updated" });

    }
    catch(error){
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function DeleteProject(req, res) {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "Project ID not provided" });
        }
        const project = await Project.findByIdAndDelete(id);
        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }
        return res.status(200).json({ message: "Project deleted successfully" });
    }
    catch(error){
        return res.status(500).json({ message: "Internal Server Error" });
    }
}
