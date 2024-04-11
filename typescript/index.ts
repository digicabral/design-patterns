//Singleton logger class
//log method
//can have multiple methods

class Logger {
  private static instance: Logger;
  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public log(message: string) {
    const timestamp = new Date();
    console.info(`[${timestamp.toLocaleString()} - ${message}]`);
  }
}

const instance = Logger.getInstance();
instance.log("Test");

instance.log("Test 2");
