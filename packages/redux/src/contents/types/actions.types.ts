import type * as actionTypes from '../actionTypes';
import type { Action } from 'redux';
import type {
  ContentTypesEntries,
  QueryContents,
  QuerySEO,
} from '@farfetch/blackout-client/contents/types';
import type { Error } from '@farfetch/blackout-client/types';
import type { Hash, Pathname, SearchResultsReducer } from '../types';
import type { MetadataReducer } from './reducers.types';

export interface ActionFetchContentRequest extends Action {
  type: typeof actionTypes.FETCH_CONTENT_REQUEST;
  meta: { query: QueryContents };
  payload: { hash: Hash };
}

export interface ActionFetchContentRequestSucesss extends Action {
  type: typeof actionTypes.FETCH_CONTENT_SUCCESS;
  meta: { query: QueryContents };
  payload: {
    result: SearchResultsReducer['result'];
    hash: Hash;
  };
}

export interface ActionFetchContentRequestFailure extends Action {
  type: typeof actionTypes.FETCH_CONTENT_FAILURE;
  meta: { query: QueryContents };
  payload: {
    error: Error;
    hash: Hash;
  };
}

export interface ActionFetchSEORequest extends Action {
  meta: { query: QuerySEO };
  payload: { pathname: Pathname };
  type: typeof actionTypes.FETCH_SEO_REQUEST;
}

export interface ActionFetchSEOSuccess extends Action {
  meta: { query: QuerySEO };
  payload: {
    pathname: Pathname;
    result: MetadataReducer['result'];
  };
  type: typeof actionTypes.FETCH_SEO_SUCCESS;
}

export interface ActionFetchSEOFailure extends Action {
  meta: { query: QuerySEO };
  payload: {
    error: Error;
    pathname: Pathname;
  };
  type: typeof actionTypes.FETCH_SEO_FAILURE;
}

export interface ActionFetchContentTypesRequest extends Action {
  type: typeof actionTypes.FETCH_CONTENT_TYPES_REQUEST;
}

export interface ActionFetchContentTypesSuccess extends Action {
  payload: Array<ContentTypesEntries['code']>;
  type: typeof actionTypes.FETCH_CONTENT_TYPES_SUCCESS;
}

export interface ActionFetchContentTypesFailure extends Action {
  payload: { error: Error };
  type: typeof actionTypes.FETCH_CONTENT_TYPES_FAILURE;
}

export type ActionFetchContent =
  | ActionFetchContentRequest
  | ActionFetchContentRequestSucesss
  | ActionFetchContentRequestFailure;
export type ActionFetchSEO =
  | ActionFetchSEORequest
  | ActionFetchSEOSuccess
  | ActionFetchSEOFailure;
export type ActionFetchContentTypes =
  | ActionFetchContentTypesRequest
  | ActionFetchContentTypesSuccess
  | ActionFetchContentTypesFailure;