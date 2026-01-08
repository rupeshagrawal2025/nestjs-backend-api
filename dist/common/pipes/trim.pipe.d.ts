import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
interface TrimOptions {
    fields?: string[];
}
export declare class TrimPipe implements PipeTransform {
    private readonly options?;
    constructor(options?: TrimOptions | undefined);
    transform(value: any, metadata: ArgumentMetadata): any;
}
export {};
