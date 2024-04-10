//High level modules should not depend on low level modules. Both should depend on abstractions
//Abstractions should not depende on details. Details should depend on abstractions

//wrong implementation
class MySqlDatabase {
  save(data: string): void {}
}

class HighLevelModule {
  constructor(private database: MySqlDatabase) {}
  execute(data: string) {
    this.database.save(data);
  }
}
