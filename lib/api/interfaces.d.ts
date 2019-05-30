import { QuerySyntaxEnum, IQueryResult, Table, Limit, SortingData, FunctionData, Property, IQuery, ExpressionOrExpressionScope } from '@chego/chego-api';
import { Join, QueryPipelinesMap } from './types';
export interface IConditionsBuilder {
    add(type: QuerySyntaxEnum, ...values: any[]): void;
    build(): ExpressionOrExpressionScope[];
}
export interface IJoinBuilder {
    withOn(propertyA: Property, propertyB: Property): IJoinBuilder;
    using(property: Property): IJoinBuilder;
    build(): Join;
}
export interface IQueriesExecutor {
    withPipelines(pipelines: QueryPipelinesMap): IQueriesExecutor;
    withDBRef(client: any): IQueriesExecutor;
    execute(queries: IQuery[]): Promise<any>;
}
export interface IQueryContextBuilder {
    with(type: QuerySyntaxEnum, params: any[]): void;
    build(): IQueryContext;
}
export interface IQueryContext {
    type: QuerySyntaxEnum;
    result: IQueryResult;
    data: any[];
    tables: Table[];
    joins: Join[];
    unions: any[];
    limit: Limit;
    orderBy: SortingData[];
    groupBy: SortingData[];
    functions: FunctionData[];
    conditions: ExpressionOrExpressionScope[];
}