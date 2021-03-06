import {ObjectType} from "./ObjectType";

/**
 * Service options passed to the @Service() decorator.
 * Allows to specify service id and/or factory used to create this service.
 */
export interface ServiceOptions<T, K extends keyof T> {

    /**
     * Unique service id.
     */
    id?: string;

    /**
     * Factory used to produce this service.
     */
    factory?: [ObjectType<T>, K]|((...params: any[]) => any);

}