const errorHandler = (err, req, res, next) => {
  console.log(err);
  const statusCode = res.statusCode ? res.statusCode : 500;
  if (err.name === "ValidationError") {
    // let errors = {};

    // Object.keys(err.errors).forEach((key) => {
    //   errors[key] = err.errors[key].message;
    // });

    return res.status(400).send({
      message: err.message,
      stack: process.env.NODE_ENV === "production" ? null : err.stack,
    });
  }
  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = { errorHandler };
