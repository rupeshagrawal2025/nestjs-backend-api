import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  private users: User[] = [];
  private idCounter = 1;
  private readonly SALT_ROUNDS = 10;

  async create(createUserDto: CreateUserDto): Promise<Omit<User, 'password'>> {
    // Check for duplicate email
    const existingUser = this.users.find(
      (user) => user.email.toLowerCase() === createUserDto.email.toLowerCase(),
    );
    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(
      createUserDto.password,
      this.SALT_ROUNDS,
    );

    const newUser: User = {
      id: this.idCounter++,
      ...createUserDto,
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.users.push(newUser);

    // Return user without password
    const { password: _password, ...userWithoutPassword } = newUser;
    return userWithoutPassword;
  }

  findAll(): Omit<User, 'password'>[] {
    return this.users.map(({ password: _password, ...user }) => user);
  }

  findOne(id: number): Omit<User, 'password'> {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    const { password: _password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  // Internal method to get user with password (for auth)
  findByEmail(email: string): User | undefined {
    return this.users.find(
      (user) => user.email.toLowerCase() === email.toLowerCase(),
    );
  }

  async update(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<Omit<User, 'password'>> {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    // Check for duplicate email if email is being updated
    if (updateUserDto.email) {
      const emailToCheck = updateUserDto.email;
      const existingUser = this.users.find(
        (user) =>
          user.email.toLowerCase() === emailToCheck.toLowerCase() &&
          user.id !== id,
      );
      if (existingUser) {
        throw new ConflictException('Email already exists');
      }
    }

    // Hash password if being updated
    const updateData = { ...updateUserDto };
    if (updateUserDto.password) {
      updateData.password = await bcrypt.hash(
        updateUserDto.password,
        this.SALT_ROUNDS,
      );
    }

    const updatedUser = {
      ...this.users[userIndex],
      ...updateData,
      updatedAt: new Date(),
    };
    this.users[userIndex] = updatedUser;

    const { password: _password, ...userWithoutPassword } = updatedUser;
    return userWithoutPassword;
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
