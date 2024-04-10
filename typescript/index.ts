//High level modules should not depend on low level modules. Both should depend on abstractions
//Abstractions should not depende on details. Details should depend on abstractions
interface IDatabase {
  save(data: string): void;
}
class MySqlDatabase implements IDatabase {
  save(data: string): void {
    console.log(`${data} is being saved my SQL`);
  }
}

class MongoDBDatabase implements IDatabase {
  save(data: string): void {
    console.log(`${data} is being saved mongo`);
  }
}

class HighLevelModule {
  constructor(private database: IDatabase) {}
  execute(data: string): void {
    this.database.save(data);
  }
}

const mysql = new MySqlDatabase();
const mongo = new MongoDBDatabase();

let user = new HighLevelModule(mysql);
user.execute("Man");

let post = new HighLevelModule(mongo);
user.execute("New Post");
