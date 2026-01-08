import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
export declare class PositiveIntPipe implements PipeTransform<string, number> {
    transform(value: string, metadata: ArgumentMetadata): number;
}
