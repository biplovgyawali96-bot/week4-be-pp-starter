const auth = (req, res, next) => {
  // Allow only GET /api/users and GET /api/tours
  if (
    req.method === "GET" &&
    (req.baseUrl === "/api/users" || req.baseUrl === "/api/tours") &&
    (req.path === "/" || req.path === "")
  ) {
    return next();
  }

  // Require admin=true for all other requests
  if (req.query.admin === "true") {
    return next();
  }

  return res.status(401).json({
    message: "Unauthorized. Admin access required."
  });
};

module.exports = auth;