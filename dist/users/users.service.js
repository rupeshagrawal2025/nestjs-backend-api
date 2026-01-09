"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = __importStar(require("bcrypt"));
let UsersService = class UsersService {
    users = [];
    idCounter = 1;
    SALT_ROUNDS = 10;
    async create(createUserDto) {
        const existingUser = this.users.find((user) => user.email.toLowerCase() === createUserDto.email.toLowerCase());
        if (existingUser) {
            throw new common_1.ConflictException('Email already exists');
        }
        const hashedPassword = await bcrypt.hash(createUserDto.password, this.SALT_ROUNDS);
        const newUser = {
            id: this.idCounter++,
            ...createUserDto,
            password: hashedPassword,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        this.users.push(newUser);
        const { password: _password, ...userWithoutPassword } = newUser;
        return userWithoutPassword;
    }
    findAll() {
        return this.users.map(({ password: _password, ...user }) => user);
    }
    findOne(id) {
        const user = this.users.find((user) => user.id === id);
        if (!user) {
            throw new common_1.NotFoundException(`User with ID ${id} not found`);
        }
        const { password: _password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
    findByEmail(email) {
        return this.users.find((user) => user.email.toLowerCase() === email.toLowerCase());
    }
    async update(id, updateUserDto) {
        const userIndex = this.users.findIndex((user) => user.id === id);
        if (userIndex === -1) {
            throw new common_1.NotFoundException(`User with ID ${id} not found`);
        }
        if (updateUserDto.email) {
            const emailToCheck = updateUserDto.email;
            const existingUser = this.users.find((user) => user.email.toLowerCase() === emailToCheck.toLowerCase() &&
                user.id !== id);
            if (existingUser) {
                throw new common_1.ConflictException('Email already exists');
            }
        }
        const updateData = { ...updateUserDto };
        if (updateUserDto.password) {
            updateData.password = await bcrypt.hash(updateUserDto.password, this.SALT_ROUNDS);
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
    remove(id) {
        const userIndex = this.users.findIndex((user) => user.id === id);
        if (userIndex === -1) {
            throw new common_1.NotFoundException(`User with ID ${id} not found`);
        }
        this.users.splice(userIndex, 1);
        return { message: `User with ID ${id} has been deleted` };
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map