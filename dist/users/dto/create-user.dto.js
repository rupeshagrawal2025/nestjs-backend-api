"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
class CreateUserDto {
    name;
    email;
    password;
    age;
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The name of the user',
        example: 'John Doe',
        minLength: 2,
        maxLength: 50,
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Name is required' }),
    (0, class_validator_1.IsString)({ message: 'Name must be a string' }),
    (0, class_validator_1.MinLength)(2, { message: 'Name must be at least 2 characters' }),
    (0, class_validator_1.MaxLength)(50, { message: 'Name cannot exceed 50 characters' }),
    (0, class_transformer_1.Transform)(({ value }) => value?.trim()),
    __metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The email address of the user',
        example: 'john.doe@example.com',
        format: 'email',
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Email is required' }),
    (0, class_validator_1.IsEmail)({}, { message: 'Please provide a valid email address' }),
    (0, class_transformer_1.Transform)(({ value }) => value?.toLowerCase().trim()),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The password for the user account',
        example: 'SecurePass123',
        minLength: 6,
        maxLength: 20,
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Password is required' }),
    (0, class_validator_1.IsString)({ message: 'Password must be a string' }),
    (0, class_validator_1.MinLength)(6, { message: 'Password must be at least 6 characters' }),
    (0, class_validator_1.MaxLength)(20, { message: 'Password cannot exceed 20 characters' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'The age of the user',
        example: 25,
        minimum: 1,
        maximum: 120,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)({ message: 'Age must be an integer' }),
    (0, class_validator_1.Min)(1, { message: 'Age must be at least 1' }),
    (0, class_validator_1.Max)(120, { message: 'Age cannot exceed 120' }),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "age", void 0);
//# sourceMappingURL=create-user.dto.js.map