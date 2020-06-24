import { EntityRepository, Repository } from "typeorm";

import User from "../models/User";
import AppError from "../errors/AppError";

@EntityRepository(User)
class UserRepository extends Repository<User> {
  public async verifyUser(id: string): Promise<User> {
    const user = await this.findOne(id);

    if (!user) {
      throw new AppError("Id informado incorretamente.");
    }

    return user;
  }
}

export default UserRepository;
