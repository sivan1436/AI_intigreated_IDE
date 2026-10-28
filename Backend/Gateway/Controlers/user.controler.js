


export async function getCurrentUser(req,res,) {
    try{
      res.status(200).json(req.user)
    }
    catch(err){
        return res.status(500).json({message: "Error fetching user details", error: err})
    }
}