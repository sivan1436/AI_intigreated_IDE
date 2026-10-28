import express from "express";
import { CreateProject,
          getProjects,
          getProjectById, 
          StarredProjects,
          DeleteProject,
            ToggleStar
 } from "../Controlers/ProjectControler.js";



const router = express.Router();



router.post('/',CreateProject)
router.get("/",getProjects);
router.get("/starred",StarredProjects);
router.patch("/:id",ToggleStar);
router.get("/:id",getProjectById);
router.delete("/:id",DeleteProject);

export default router;