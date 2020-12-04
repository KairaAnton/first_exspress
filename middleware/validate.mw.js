const yup = require('yup');
const { date, string } = require('yup/lib/locale');

module.exports.validationSchema = async (req, res, next) => {
  const { body } = req;

  const validationSchema = yup.object({
    email: yup.string().email().required(),
    text: yup.string().min(16).max(2048).required(),
    date: yup.string().require()
  });

  try {
    req.body = await validateSchema.validate(body);
    next();
  } catch (error) {
    next(error);
  }
};
