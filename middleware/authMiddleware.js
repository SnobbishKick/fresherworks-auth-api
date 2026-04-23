const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
   try {
      const authHeader = req.headers.authorization;

      //Check if tokens exists
      if (!authHeader || !authHeader.startsWith("Bearer ")) {
         return res.status(401).json({ message: "Not authorized"});
      }

      //Extract token
      const token = authHeader.split(" ")[1];

      //Verify token
      const decoded = jwt.verify(token, "secretkey");

      //Attach user data to request
      req.user = decoded;
      next()//Move to next(controller)

   } catch (error) {
      return res.status(401).json({message: "Token invalid"});
   }
};

module.exports = protect;