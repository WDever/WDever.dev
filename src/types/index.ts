export * from './graphqlTypes';

export type ErrorType = { message: string } | undefined;
export interface QueryType<TQuery> {
  data: TQuery;
  error: ErrorType;
}
