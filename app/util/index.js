export default class Util {
  /**
   * return: unique identifier
   */
  static uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  /**
   * return: unique identifier - MongoDB
   */
  static uuidMongoDB() {
    return crypto
      .createHash('md5')
      .update(Math.random().toString())
      .digest('hex')
      .substring(0, 24);
  }
}
