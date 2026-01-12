import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<Omit<import("./entities/user.entity").User, "password">>;
    findAll(): Omit<import("./entities/user.entity").User, "password">[];
    findOne(id: number): Omit<import("./entities/user.entity").User, "password">;
    update(id: number, updateUserDto: UpdateUserDto): Promise<Omit<import("./entities/user.entity").User, "password">>;
    remove(id: number): {
        message: string;
    };
}
