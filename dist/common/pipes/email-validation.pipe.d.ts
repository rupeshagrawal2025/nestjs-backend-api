import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
export declare class EmailValidationPipe implements PipeTransform<string, string> {
    transform(value: string, metadata: ArgumentMetadata): string;
}
