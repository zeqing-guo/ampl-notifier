import * as r from 'ioredis';

export class Redis {
  private redisInstance: r.Redis;

  constructor(host: string, passwd: string, port: number, db: number) {
    this.redisInstance = new r({
      host: host,
      password: passwd,
      port: port,
      db: db,
    });
  }

  public sendMessage(message:string) {
      this.redisInstance.publish('trading.notify', message);
  }
}
