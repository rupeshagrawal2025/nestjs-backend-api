import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
export declare class UsersService {
    private users;
    private idCounter;
    private readonly SALT_ROUNDS;
    create(createUserDto: CreateUserDto): Promise<Omit<User, 'password'>>;
    findAll(): Omit<User, 'password'>[];
    findOne(id: number): Omit<User, 'password'>;
    findByEmail(email: string): User | undefined;
    update(id: number, updateUserDto: UpdateUserDto): Promise<Omit<User, 'password'>>;
    remove(id: number): {
        message: string;
    };
}
