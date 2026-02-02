import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Role } from './enums/role.enum';

@Injectable()
export class UsersService {
  private users: User[] = [];
  private idCounter = 1;
  private readonly saltRounds = 10;

  async create(createUserDto: CreateUserDto): Promise<Omit<User, 'password'>> {
    const existingUser = this.users.find(
      (user) => user.email === createUserDto.email,
    );
    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(
      createUserDto.password,
      this.saltRounds,
    );

    const newUser: User = {
      id: this.idCounter++,
      ...createUserDto,
      password: hashedPassword,
      roles: [Role.USER],
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.users.push(newUser);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = newUser;
    return result;
  }

  findAll(): Omit<User, 'password'>[] {
    return this.users.map((user) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    });
  }

  findOne(id: number): Omit<User, 'password'> {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = user;
    return result;
  }

  async update(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<Omit<User, 'password'>> {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    if (updateUserDto.email) {
      const existingUser = this.users.find(
        (user) => user.email === updateUserDto.email && user.id !== id,
      );
      if (existingUser) {
        throw new ConflictException('Email already exists');
      }
    }

    const updatedUser = {
      ...this.users[userIndex],
      ...updateUserDto,
      updatedAt: new Date(),
    };

    if (updateUserDto.password) {
      updatedUser.password = await bcrypt.hash(
        updateUserDto.password,
        this.saltRounds,
      );
    }

    this.users[userIndex] = updatedUser;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = updatedUser;
    return result;
  }

  remove(id: number): { message: string } {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    this.users.splice(userIndex, 1);
    return { message: `User with ID ${id} has been deleted` };
  }
}
