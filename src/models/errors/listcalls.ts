/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

/**
 * Internal Server Error
 */
export type ListCallsResponse500ResponseBodyData = {
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
  errorMessage?: string | undefined;
};

/**
 * Internal Server Error
 */
export class ListCallsResponse500ResponseBody extends Error {
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
  errorMessage?: string | undefined;

  /** The original data that was passed to this error instance. */
  data$: ListCallsResponse500ResponseBodyData;

  constructor(
    err: ListCallsResponse500ResponseBodyData,
    options?: ErrorOptions,
  ) {
    super("", options);
    this.data$ = err;

    if (err.rawResponse != null) {
      this.rawResponse = err.rawResponse;
    }
    if (err.errorMessage != null) {
      this.errorMessage = err.errorMessage;
    }

    const msg =
      "message" in err && typeof err.message === "string" ? err.message : "";
    const { rawResponse, ...data } = err;
    const content = JSON.stringify(data);
    this.message = [msg, content].filter(Boolean).join("\n");

    this.name = "ListCallsResponse500ResponseBody";
  }
}

/**
 * Unauthorized
 */
export type ListCallsResponseResponseBodyData = {
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
  errorMessage?: string | undefined;
};

/**
 * Unauthorized
 */
export class ListCallsResponseResponseBody extends Error {
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
  errorMessage?: string | undefined;

  /** The original data that was passed to this error instance. */
  data$: ListCallsResponseResponseBodyData;

  constructor(err: ListCallsResponseResponseBodyData, options?: ErrorOptions) {
    super("", options);
    this.data$ = err;

    if (err.rawResponse != null) {
      this.rawResponse = err.rawResponse;
    }
    if (err.errorMessage != null) {
      this.errorMessage = err.errorMessage;
    }

    const msg =
      "message" in err && typeof err.message === "string" ? err.message : "";
    const { rawResponse, ...data } = err;
    const content = JSON.stringify(data);
    this.message = [msg, content].filter(Boolean).join("\n");

    this.name = "ListCallsResponseResponseBody";
  }
}

/**
 * Bad Request
 */
export type ListCallsResponseBodyData = {
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
  errorMessage?: string | undefined;
};

/**
 * Bad Request
 */
export class ListCallsResponseBody extends Error {
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
  errorMessage?: string | undefined;

  /** The original data that was passed to this error instance. */
  data$: ListCallsResponseBodyData;

  constructor(err: ListCallsResponseBodyData, options?: ErrorOptions) {
    super("", options);
    this.data$ = err;

    if (err.rawResponse != null) {
      this.rawResponse = err.rawResponse;
    }
    if (err.errorMessage != null) {
      this.errorMessage = err.errorMessage;
    }

    const msg =
      "message" in err && typeof err.message === "string" ? err.message : "";
    const { rawResponse, ...data } = err;
    const content = JSON.stringify(data);
    this.message = [msg, content].filter(Boolean).join("\n");

    this.name = "ListCallsResponseBody";
  }
}

/** @internal */
export namespace ListCallsResponse500ResponseBody$ {
  export type Inbound = {
    RawResponse?: Response | undefined;
    error_message?: string | undefined;
  };

  export const inboundSchema: z.ZodType<
    ListCallsResponse500ResponseBody,
    z.ZodTypeDef,
    Inbound
  > = z
    .object({
      RawResponse: z.instanceof(Response).optional(),
      error_message: z.string().optional(),
    })
    .transform((v) => {
      return new ListCallsResponse500ResponseBody({
        ...(v.RawResponse === undefined
          ? null
          : { rawResponse: v.RawResponse }),
        ...(v.error_message === undefined
          ? null
          : { errorMessage: v.error_message }),
      });
    });
  export type Outbound = {
    RawResponse?: never | undefined;
    error_message?: string | undefined;
  };

  export const outboundSchema: z.ZodType<
    Outbound,
    z.ZodTypeDef,
    ListCallsResponse500ResponseBody
  > = z
    .instanceof(ListCallsResponse500ResponseBody)
    .transform((v) => v.data$)
    .pipe(
      z
        .object({
          rawResponse: z
            .instanceof(Response)
            .transform(() => {
              throw new Error("Response cannot be serialized");
            })
            .optional(),
          errorMessage: z.string().optional(),
        })
        .transform((v) => {
          return {
            ...(v.rawResponse === undefined
              ? null
              : { RawResponse: v.rawResponse }),
            ...(v.errorMessage === undefined
              ? null
              : { error_message: v.errorMessage }),
          };
        }),
    );
}

/** @internal */
export namespace ListCallsResponseResponseBody$ {
  export type Inbound = {
    RawResponse?: Response | undefined;
    error_message?: string | undefined;
  };

  export const inboundSchema: z.ZodType<
    ListCallsResponseResponseBody,
    z.ZodTypeDef,
    Inbound
  > = z
    .object({
      RawResponse: z.instanceof(Response).optional(),
      error_message: z.string().optional(),
    })
    .transform((v) => {
      return new ListCallsResponseResponseBody({
        ...(v.RawResponse === undefined
          ? null
          : { rawResponse: v.RawResponse }),
        ...(v.error_message === undefined
          ? null
          : { errorMessage: v.error_message }),
      });
    });
  export type Outbound = {
    RawResponse?: never | undefined;
    error_message?: string | undefined;
  };

  export const outboundSchema: z.ZodType<
    Outbound,
    z.ZodTypeDef,
    ListCallsResponseResponseBody
  > = z
    .instanceof(ListCallsResponseResponseBody)
    .transform((v) => v.data$)
    .pipe(
      z
        .object({
          rawResponse: z
            .instanceof(Response)
            .transform(() => {
              throw new Error("Response cannot be serialized");
            })
            .optional(),
          errorMessage: z.string().optional(),
        })
        .transform((v) => {
          return {
            ...(v.rawResponse === undefined
              ? null
              : { RawResponse: v.rawResponse }),
            ...(v.errorMessage === undefined
              ? null
              : { error_message: v.errorMessage }),
          };
        }),
    );
}

/** @internal */
export namespace ListCallsResponseBody$ {
  export type Inbound = {
    RawResponse?: Response | undefined;
    error_message?: string | undefined;
  };

  export const inboundSchema: z.ZodType<
    ListCallsResponseBody,
    z.ZodTypeDef,
    Inbound
  > = z
    .object({
      RawResponse: z.instanceof(Response).optional(),
      error_message: z.string().optional(),
    })
    .transform((v) => {
      return new ListCallsResponseBody({
        ...(v.RawResponse === undefined
          ? null
          : { rawResponse: v.RawResponse }),
        ...(v.error_message === undefined
          ? null
          : { errorMessage: v.error_message }),
      });
    });
  export type Outbound = {
    RawResponse?: never | undefined;
    error_message?: string | undefined;
  };

  export const outboundSchema: z.ZodType<
    Outbound,
    z.ZodTypeDef,
    ListCallsResponseBody
  > = z
    .instanceof(ListCallsResponseBody)
    .transform((v) => v.data$)
    .pipe(
      z
        .object({
          rawResponse: z
            .instanceof(Response)
            .transform(() => {
              throw new Error("Response cannot be serialized");
            })
            .optional(),
          errorMessage: z.string().optional(),
        })
        .transform((v) => {
          return {
            ...(v.rawResponse === undefined
              ? null
              : { RawResponse: v.rawResponse }),
            ...(v.errorMessage === undefined
              ? null
              : { error_message: v.errorMessage }),
          };
        }),
    );
}
