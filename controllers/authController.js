const User = require("../models/User");
const bcrypt = require("bcrypt");

//Register User
const registerUser = async (req, res) => {
   try {
      const {name, email, password} = req.body;

      //check if the user exists
      const userExists = await User.findOne({email});

      if (userExists) {
         return res.status(400).json({ message: "User already exists"});
      }
         //Hash password
         const salt = await bcrypt.genSalt(10);
         const hashedPassword = await bcrypt.hash(password, salt);

         //Create user
         const user = await User.create({ name, email, password: hashedPassword,});

         //Response (DO NOT send password)
         res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
         });
      
   } catch (error) {
      res.status(500).json({ message: "Server Error" });
   }
};

const loginUser = async(req, res) => {
   try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if(!user) {
         return res.status(400).json({message: "Invalid credentials"});
      } 

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
         return res.status(400).json({ message: "Invalid credentials" });
      }

         return res.status(200).json({
            message: "Login successful", 
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
         });
      
   } catch (error) {
      res.status(500).json({message: "Server Error"});
   }
}

module.exports = { registerUser, loginUser };