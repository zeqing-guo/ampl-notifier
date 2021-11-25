import * as dotenv from 'dotenv';
import { Redis } from './store/redis';
import Web3 from 'web3';

console.log('Try npm run lint/fix!');

const longString =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut aliquet diam.';

const trailing = 'Semicolon';

const why = 'am I tabbed?';

export function doSomeStuff(
  withThis: string,
  andThat: string,
  andThose: string[]
) {
  //function on one line
  if (!andThose.length) {
    return false;
  }
  console.log(withThis);
  console.log(andThat);
  console.dir(andThose);
  return;
}
// TODO: more examples

dotenv.config();

const redis = new Redis(
  process.env.REDIS_HOST as string,
  process.env.REDIS_PASSWORD as string,
  Number(process.env.REDIS_PORT as string),
  Number(process.env.REDIS_DB as string)
);

const web3 = new Web3('ws://localhost:8546');
