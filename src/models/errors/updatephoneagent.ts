/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

/**
 * Internal Server Error
 */
export type UpdatePhoneAgentResponse500ResponseBodyData = {
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
  errorMessage?: string | undefined;
};

/**
 * Internal Server Error
 */
export class UpdatePhoneAgentResponse500ResponseBody extends Error {
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
  errorMessage?: string | undefined;

  /** The original data that was passed to this error instance. */
  data$: UpdatePhoneAgentResponse500ResponseBodyData;

  constructor(
    err: UpdatePhoneAgentResponse500ResponseBodyData,
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

    this.name = "UpdatePhoneAgentResponse500ResponseBody";
  }
}

/**
 * Unprocessable Content
 */
export type UpdatePhoneAgentResponse422ResponseBodyData = {
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
  errorMessage?: string | undefined;
};

/**
 * Unprocessable Content
 */
export class UpdatePhoneAgentResponse422ResponseBody extends Error {
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
  errorMessage?: string | undefined;

  /** The original data that was passed to this error instance. */
  data$: UpdatePhoneAgentResponse422ResponseBodyData;

  constructor(
    err: UpdatePhoneAgentResponse422ResponseBodyData,
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

    this.name = "UpdatePhoneAgentResponse422ResponseBody";
  }
}

/**
 * Unauthorized
 */
export type UpdatePhoneAgentResponseResponseBodyData = {
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
  errorMessage?: string | undefined;
};

/**
 * Unauthorized
 */
export class UpdatePhoneAgentResponseResponseBody extends Error {
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
  errorMessage?: string | undefined;

  /** The original data that was passed to this error instance. */
  data$: UpdatePhoneAgentResponseResponseBodyData;

  constructor(
    err: UpdatePhoneAgentResponseResponseBodyData,
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

    this.name = "UpdatePhoneAgentResponseResponseBody";
  }
}

/**
 * Bad Request
 */
export type UpdatePhoneAgentResponseBodyData = {
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
  errorMessage?: string | undefined;
};

/**
 * Bad Request
 */
export class UpdatePhoneAgentResponseBody extends Error {
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
  errorMessage?: string | undefined;

  /** The original data that was passed to this error instance. */
  data$: UpdatePhoneAgentResponseBodyData;

  constructor(err: UpdatePhoneAgentResponseBodyData, options?: ErrorOptions) {
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

    this.name = "UpdatePhoneAgentResponseBody";
  }
}

/** @internal */
export namespace UpdatePhoneAgentResponse500ResponseBody$ {
  export type Inbound = {
    RawResponse?: Response | undefined;
    error_message?: string | undefined;
  };

  export const inboundSchema: z.ZodType<
    UpdatePhoneAgentResponse500ResponseBody,
    z.ZodTypeDef,
    Inbound
  > = z
    .object({
      RawResponse: z.instanceof(Response).optional(),
      error_message: z.string().optional(),
    })
    .transform((v) => {
      return new UpdatePhoneAgentResponse500ResponseBody({
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
    UpdatePhoneAgentResponse500ResponseBody
  > = z
    .instanceof(UpdatePhoneAgentResponse500ResponseBody)
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
export namespace UpdatePhoneAgentResponse422ResponseBody$ {
  export type Inbound = {
    RawResponse?: Response | undefined;
    error_message?: string | undefined;
  };

  export const inboundSchema: z.ZodType<
    UpdatePhoneAgentResponse422ResponseBody,
    z.ZodTypeDef,
    Inbound
  > = z
    .object({
      RawResponse: z.instanceof(Response).optional(),
      error_message: z.string().optional(),
    })
    .transform((v) => {
      return new UpdatePhoneAgentResponse422ResponseBody({
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
    UpdatePhoneAgentResponse422ResponseBody
  > = z
    .instanceof(UpdatePhoneAgentResponse422ResponseBody)
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
export namespace UpdatePhoneAgentResponseResponseBody$ {
  export type Inbound = {
    RawResponse?: Response | undefined;
    error_message?: string | undefined;
  };

  export const inboundSchema: z.ZodType<
    UpdatePhoneAgentResponseResponseBody,
    z.ZodTypeDef,
    Inbound
  > = z
    .object({
      RawResponse: z.instanceof(Response).optional(),
      error_message: z.string().optional(),
    })
    .transform((v) => {
      return new UpdatePhoneAgentResponseResponseBody({
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
    UpdatePhoneAgentResponseResponseBody
  > = z
    .instanceof(UpdatePhoneAgentResponseResponseBody)
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
export namespace UpdatePhoneAgentResponseBody$ {
  export type Inbound = {
    RawResponse?: Response | undefined;
    error_message?: string | undefined;
  };

  export const inboundSchema: z.ZodType<
    UpdatePhoneAgentResponseBody,
    z.ZodTypeDef,
    Inbound
  > = z
    .object({
      RawResponse: z.instanceof(Response).optional(),
      error_message: z.string().optional(),
    })
    .transform((v) => {
      return new UpdatePhoneAgentResponseBody({
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
    UpdatePhoneAgentResponseBody
  > = z
    .instanceof(UpdatePhoneAgentResponseBody)
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
