// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from './core';
import * as Errors from './error';
import { type Agent } from './_shims/index';
import * as Uploads from './uploads';
import * as qs from 'qs';
import * as API from 'toddlzt/resources/index';

export interface ClientOptions {
  /**
   * Defaults to process.env['TODDLZT_API_KEY'].
   */
  apiKey?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['RETELL_AI_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/** API Client for interfacing with the Retell AI API. */
export class RetellAI extends Core.APIClient {
  apiKey: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Retell AI API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['TODDLZT_API_KEY'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['RETELL_AI_BASE_URL'] ?? https://api.retellai.com] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('RETELL_AI_BASE_URL'),
    apiKey = Core.readEnv('TODDLZT_API_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.RetellAIError(
        "The TODDLZT_API_KEY environment variable is missing or empty; either provide it, or instantiate the RetellAI client with an apiKey option, like new RetellAI({ apiKey: 'My API Key' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      ...opts,
      baseURL: baseURL || `https://api.retellai.com`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });
    this._options = options;

    this.apiKey = apiKey;
  }

  calls: API.Calls = new API.Calls(this);
  agents: API.Agents = new API.Agents(this);
  llms: API.Llms = new API.Llms(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { Authorization: `Bearer ${this.apiKey}` };
  }

  protected override stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'comma' });
  }

  static RetellAI = this;

  static RetellAIError = Errors.RetellAIError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;
}

export const {
  RetellAIError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} = Errors;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export namespace RetellAI {
  // Helper functions
  export import toFile = Uploads.toFile;
  export import fileFromPath = Uploads.fileFromPath;

  export import RequestOptions = Core.RequestOptions;

  export import Calls = API.Calls;
  export import CallBase = API.CallBase;
  export import CallListResponse = API.CallListResponse;
  export import CallListParams = API.CallListParams;
  export import CallRegisterParams = API.CallRegisterParams;

  export import Agents = API.Agents;
  export import AgentCreateResponse = API.AgentCreateResponse;
  export import AgentRetrieveResponse = API.AgentRetrieveResponse;
  export import AgentUpdateResponse = API.AgentUpdateResponse;
  export import AgentListResponse = API.AgentListResponse;
  export import AgentCreateParams = API.AgentCreateParams;
  export import AgentUpdateParams = API.AgentUpdateParams;

  export import Llms = API.Llms;
  export import LlmCreateResponse = API.LlmCreateResponse;
  export import LlmRetrieveResponse = API.LlmRetrieveResponse;
  export import LlmUpdateResponse = API.LlmUpdateResponse;
  export import LlmListResponse = API.LlmListResponse;
  export import LlmCreateParams = API.LlmCreateParams;
  export import LlmUpdateParams = API.LlmUpdateParams;
}

export default RetellAI;
