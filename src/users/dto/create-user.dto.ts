import {
  IsString,
  IsEmail,
  MinLength,
  MaxLength,
  IsOptional,
  IsInt,
  Min,
  Max,
  IsNotEmpty,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'The name of the user',
    example: 'John Doe',
    minLength: 2,
    maxLength: 50,
  })
  @IsNotEmpty({ message: 'Name is required' })
  @IsString({ message: 'Name must be a string' })
  @MinLength(2, { message: 'Name must be at least 2 characters' })
  @MaxLength(50, { message: 'Name cannot exceed 50 characters' })
  @Transform(({ value }: { value: string }) => value?.trim())
  name: string;

  @ApiProperty({
    description: 'The email address of the user',
    example: 'john.doe@example.com',
    format: 'email',
  })
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Please provide a valid email address' })
  @Transform(({ value }: { value: string }) => value?.toLowerCase().trim())
  email: string;

  @ApiProperty({
    description: 'The password for the user account',
    example: 'SecurePass123',
    minLength: 6,
    maxLength: 20,
  })
  @IsNotEmpty({ message: 'Password is required' })
  @IsString({ message: 'Password must be a string' })
  @MinLength(6, { message: 'Password must be at least 6 characters' })
  @MaxLength(20, { message: 'Password cannot exceed 20 characters' })
  password: string;

  @ApiPropertyOptional({
    description: 'The age of the user',
    example: 25,
    minimum: 1,
    maximum: 120,
  })
  @IsOptional()
  @IsInt({ message: 'Age must be an integer' })
  @Min(1, { message: 'Age must be at least 1' })
  @Max(120, { message: 'Age cannot exceed 120' })
  age?: number;
}
