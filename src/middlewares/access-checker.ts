import { config } from '../config';

const { origins, token } = config.access;

const isAllowOrigin = origin => origin && origins.some(o => origin.includes(o));

export const accessChecker = (req, res, next) => {
  const origin = req.get('origin');
  const { token: reqToken } = req.query;

  if (isAllowOrigin(origin) || reqToken === token) {
    res.set('Access-Control-Allow-Origin', '*');
    return next();
  }

  res.status(403);
  res.send('Access denied!');
};
