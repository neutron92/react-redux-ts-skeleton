import { IMetaAction } from '..';

export interface IPostState {
    readonly data: IPostRaw;
    readonly loading: boolean;
    readonly errors: [];
}
export type ApiResponse = Record<string, any>;
export interface IPostRaw extends ApiResponse {
    id: number;
    title: string;
    body: string;
    userId: number;
}
export const PostActionTypes = {
    GET_POST: '@@post/GET_POST',
    GET_POST_SUCCESS: '@@post/GET_POST_SUCCESS',
    GET_POST_ERROR: '@@post/GET_POST_ERROR',
};

export interface IDispatchToPropsPost {
    getPost: (id: any) => IMetaAction;
}
