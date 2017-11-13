import dotenv from 'dotenv';

dotenv.config();

const getEnv = (name) => {
  const env = process.env[`REACT_APP_${name}`] || '';

  return /\D/g.test(env) ? env : parseInt(env, 10);
};

const env = [
  'TODO_LIST_API',
];

export default env.reduce((envs, envVar) => ({ ...envs, [envVar]: getEnv(envVar) }), {});
