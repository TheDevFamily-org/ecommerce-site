import createError from "../utils/createError.js";

export const isAdmin = (req, res, next) => {
  console.log(req.userType);
  // Assuming user roles are stored in the user object (e.g., req.user.role)
  if (req.userType == "Admin") {
    next(); // User has admin role, proceed to the next middleware
  } else {
    next(createError(403, "Access forbidden. Requires admin privileges."))
  }
};
