// @generated by protoc-gen-es v2.2.3 with parameter "target=ts,import_extension=none"
// @generated from file api-contracts/dispatcher/dispatcher.proto (syntax proto3)
/* eslint-disable */

import type {
  GenEnum,
  GenFile,
  GenMessage,
  GenService,
} from "@bufbuild/protobuf/codegenv1";
import {
  enumDesc,
  fileDesc,
  messageDesc,
  serviceDesc,
} from "@bufbuild/protobuf/codegenv1";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file api-contracts/dispatcher/dispatcher.proto.
 */
export const file_api_contracts_dispatcher_dispatcher: GenFile =
  /*@__PURE__*/
  fileDesc(
    "CilhcGktY29udHJhY3RzL2Rpc3BhdGNoZXIvZGlzcGF0Y2hlci5wcm90byJWCgxXb3JrZXJMYWJlbHMSFQoIc3RyVmFsdWUYASABKAlIAIgBARIVCghpbnRWYWx1ZRgCIAEoBUgBiAEBQgsKCV9zdHJWYWx1ZUILCglfaW50VmFsdWUiyAEKC1J1bnRpbWVJbmZvEhcKCnNka1ZlcnNpb24YASABKAlIAIgBARIcCghsYW5ndWFnZRgCIAEoDjIFLlNES1NIAYgBARIcCg9sYW5ndWFnZVZlcnNpb24YAyABKAlIAogBARIPCgJvcxgEIAEoCUgDiAEBEhIKBWV4dHJhGAUgASgJSASIAQFCDQoLX3Nka1ZlcnNpb25CCwoJX2xhbmd1YWdlQhIKEF9sYW5ndWFnZVZlcnNpb25CBQoDX29zQggKBl9leHRyYSLAAgoVV29ya2VyUmVnaXN0ZXJSZXF1ZXN0EhIKCndvcmtlck5hbWUYASABKAkSDwoHYWN0aW9ucxgCIAMoCRIQCghzZXJ2aWNlcxgDIAMoCRIUCgdtYXhSdW5zGAQgASgFSACIAQESMgoGbGFiZWxzGAUgAygLMiIuV29ya2VyUmVnaXN0ZXJSZXF1ZXN0LkxhYmVsc0VudHJ5EhYKCXdlYmhvb2tJZBgGIAEoCUgBiAEBEiYKC3J1bnRpbWVJbmZvGAcgASgLMgwuUnVudGltZUluZm9IAogBARo8CgtMYWJlbHNFbnRyeRILCgNrZXkYASABKAkSHAoFdmFsdWUYAiABKAsyDS5Xb3JrZXJMYWJlbHM6AjgBQgoKCF9tYXhSdW5zQgwKCl93ZWJob29rSWRCDgoMX3J1bnRpbWVJbmZvIlAKFldvcmtlclJlZ2lzdGVyUmVzcG9uc2USEAoIdGVuYW50SWQYASABKAkSEAoId29ya2VySWQYAiABKAkSEgoKd29ya2VyTmFtZRgDIAEoCSKjAQoZVXBzZXJ0V29ya2VyTGFiZWxzUmVxdWVzdBIQCgh3b3JrZXJJZBgBIAEoCRI2CgZsYWJlbHMYAiADKAsyJi5VcHNlcnRXb3JrZXJMYWJlbHNSZXF1ZXN0LkxhYmVsc0VudHJ5GjwKC0xhYmVsc0VudHJ5EgsKA2tleRgBIAEoCRIcCgV2YWx1ZRgCIAEoCzINLldvcmtlckxhYmVsczoCOAEiQAoaVXBzZXJ0V29ya2VyTGFiZWxzUmVzcG9uc2USEAoIdGVuYW50SWQYASABKAkSEAoId29ya2VySWQYAiABKAkihgQKDkFzc2lnbmVkQWN0aW9uEhAKCHRlbmFudElkGAEgASgJEhUKDXdvcmtmbG93UnVuSWQYAiABKAkSGAoQZ2V0R3JvdXBLZXlSdW5JZBgDIAEoCRINCgVqb2JJZBgEIAEoCRIPCgdqb2JOYW1lGAUgASgJEhAKCGpvYlJ1bklkGAYgASgJEg4KBnN0ZXBJZBgHIAEoCRIRCglzdGVwUnVuSWQYCCABKAkSEAoIYWN0aW9uSWQYCSABKAkSHwoKYWN0aW9uVHlwZRgKIAEoDjILLkFjdGlvblR5cGUSFQoNYWN0aW9uUGF5bG9hZBgLIAEoCRIQCghzdGVwTmFtZRgMIAEoCRISCgpyZXRyeUNvdW50GA0gASgFEiAKE2FkZGl0aW9uYWxfbWV0YWRhdGEYDiABKAlIAIgBARIhChRjaGlsZF93b3JrZmxvd19pbmRleBgPIAEoBUgBiAEBEh8KEmNoaWxkX3dvcmtmbG93X2tleRgQIAEoCUgCiAEBEiMKFnBhcmVudF93b3JrZmxvd19ydW5faWQYESABKAlIA4gBAUIWChRfYWRkaXRpb25hbF9tZXRhZGF0YUIXChVfY2hpbGRfd29ya2Zsb3dfaW5kZXhCFQoTX2NoaWxkX3dvcmtmbG93X2tleUIZChdfcGFyZW50X3dvcmtmbG93X3J1bl9pZCInChNXb3JrZXJMaXN0ZW5SZXF1ZXN0EhAKCHdvcmtlcklkGAEgASgJIiwKGFdvcmtlclVuc3Vic2NyaWJlUmVxdWVzdBIQCgh3b3JrZXJJZBgBIAEoCSI/ChlXb3JrZXJVbnN1YnNjcmliZVJlc3BvbnNlEhAKCHRlbmFudElkGAEgASgJEhAKCHdvcmtlcklkGAIgASgJIuEBChNHcm91cEtleUFjdGlvbkV2ZW50EhAKCHdvcmtlcklkGAEgASgJEhUKDXdvcmtmbG93UnVuSWQYAiABKAkSGAoQZ2V0R3JvdXBLZXlSdW5JZBgDIAEoCRIQCghhY3Rpb25JZBgEIAEoCRIyCg5ldmVudFRpbWVzdGFtcBgFIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXASKwoJZXZlbnRUeXBlGAYgASgOMhguR3JvdXBLZXlBY3Rpb25FdmVudFR5cGUSFAoMZXZlbnRQYXlsb2FkGAcgASgJIuwBCg9TdGVwQWN0aW9uRXZlbnQSEAoId29ya2VySWQYASABKAkSDQoFam9iSWQYAiABKAkSEAoIam9iUnVuSWQYAyABKAkSDgoGc3RlcElkGAQgASgJEhEKCXN0ZXBSdW5JZBgFIAEoCRIQCghhY3Rpb25JZBgGIAEoCRIyCg5ldmVudFRpbWVzdGFtcBgHIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXASJwoJZXZlbnRUeXBlGAggASgOMhQuU3RlcEFjdGlvbkV2ZW50VHlwZRIUCgxldmVudFBheWxvYWQYCSABKAkiOQoTQWN0aW9uRXZlbnRSZXNwb25zZRIQCgh0ZW5hbnRJZBgBIAEoCRIQCgh3b3JrZXJJZBgCIAEoCSLAAQogU3Vic2NyaWJlVG9Xb3JrZmxvd0V2ZW50c1JlcXVlc3QSGgoNd29ya2Zsb3dSdW5JZBgBIAEoCUgAiAEBEh4KEWFkZGl0aW9uYWxNZXRhS2V5GAIgASgJSAGIAQESIAoTYWRkaXRpb25hbE1ldGFWYWx1ZRgDIAEoCUgCiAEBQhAKDl93b3JrZmxvd1J1bklkQhQKEl9hZGRpdGlvbmFsTWV0YUtleUIWChRfYWRkaXRpb25hbE1ldGFWYWx1ZSI3Ch5TdWJzY3JpYmVUb1dvcmtmbG93UnVuc1JlcXVlc3QSFQoNd29ya2Zsb3dSdW5JZBgBIAEoCSKyAgoNV29ya2Zsb3dFdmVudBIVCg13b3JrZmxvd1J1bklkGAEgASgJEiMKDHJlc291cmNlVHlwZRgCIAEoDjINLlJlc291cmNlVHlwZRIlCglldmVudFR5cGUYAyABKA4yEi5SZXNvdXJjZUV2ZW50VHlwZRISCgpyZXNvdXJjZUlkGAQgASgJEjIKDmV2ZW50VGltZXN0YW1wGAUgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBIUCgxldmVudFBheWxvYWQYBiABKAkSDgoGaGFuZ3VwGAcgASgIEhgKC3N0ZXBSZXRyaWVzGAggASgFSACIAQESFwoKcmV0cnlDb3VudBgJIAEoBUgBiAEBQg4KDF9zdGVwUmV0cmllc0INCgtfcmV0cnlDb3VudCKoAQoQV29ya2Zsb3dSdW5FdmVudBIVCg13b3JrZmxvd1J1bklkGAEgASgJEigKCWV2ZW50VHlwZRgCIAEoDjIVLldvcmtmbG93UnVuRXZlbnRUeXBlEjIKDmV2ZW50VGltZXN0YW1wGAMgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBIfCgdyZXN1bHRzGAQgAygLMg4uU3RlcFJ1blJlc3VsdCKKAQoNU3RlcFJ1blJlc3VsdBIRCglzdGVwUnVuSWQYASABKAkSFgoOc3RlcFJlYWRhYmxlSWQYAiABKAkSEAoIam9iUnVuSWQYAyABKAkSEgoFZXJyb3IYBCABKAlIAIgBARITCgZvdXRwdXQYBSABKAlIAYgBAUIICgZfZXJyb3JCCQoHX291dHB1dCJXCg1PdmVycmlkZXNEYXRhEhEKCXN0ZXBSdW5JZBgBIAEoCRIMCgRwYXRoGAIgASgJEg0KBXZhbHVlGAMgASgJEhYKDmNhbGxlckZpbGVuYW1lGAQgASgJIhcKFU92ZXJyaWRlc0RhdGFSZXNwb25zZSJVChBIZWFydGJlYXRSZXF1ZXN0EhAKCHdvcmtlcklkGAEgASgJEi8KC2hlYXJ0YmVhdEF0GAIgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcCITChFIZWFydGJlYXRSZXNwb25zZSJGChVSZWZyZXNoVGltZW91dFJlcXVlc3QSEQoJc3RlcFJ1bklkGAEgASgJEhoKEmluY3JlbWVudFRpbWVvdXRCeRgCIAEoCSJHChZSZWZyZXNoVGltZW91dFJlc3BvbnNlEi0KCXRpbWVvdXRBdBgBIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXAiJwoSUmVsZWFzZVNsb3RSZXF1ZXN0EhEKCXN0ZXBSdW5JZBgBIAEoCSIVChNSZWxlYXNlU2xvdFJlc3BvbnNlKjcKBFNES1MSCwoHVU5LTk9XThAAEgYKAkdPEAESCgoGUFlUSE9OEAISDgoKVFlQRVNDUklQVBADKk4KCkFjdGlvblR5cGUSEgoOU1RBUlRfU1RFUF9SVU4QABITCg9DQU5DRUxfU1RFUF9SVU4QARIXChNTVEFSVF9HRVRfR1JPVVBfS0VZEAIqogEKF0dyb3VwS2V5QWN0aW9uRXZlbnRUeXBlEiAKHEdST1VQX0tFWV9FVkVOVF9UWVBFX1VOS05PV04QABIgChxHUk9VUF9LRVlfRVZFTlRfVFlQRV9TVEFSVEVEEAESIgoeR1JPVVBfS0VZX0VWRU5UX1RZUEVfQ09NUExFVEVEEAISHwobR1JPVVBfS0VZX0VWRU5UX1RZUEVfRkFJTEVEEAMqrAEKE1N0ZXBBY3Rpb25FdmVudFR5cGUSGwoXU1RFUF9FVkVOVF9UWVBFX1VOS05PV04QABIbChdTVEVQX0VWRU5UX1RZUEVfU1RBUlRFRBABEh0KGVNURVBfRVZFTlRfVFlQRV9DT01QTEVURUQQAhIaChZTVEVQX0VWRU5UX1RZUEVfRkFJTEVEEAMSIAocU1RFUF9FVkVOVF9UWVBFX0FDS05PV0xFREdFRBAEKmUKDFJlc291cmNlVHlwZRIZChVSRVNPVVJDRV9UWVBFX1VOS05PV04QABIaChZSRVNPVVJDRV9UWVBFX1NURVBfUlVOEAESHgoaUkVTT1VSQ0VfVFlQRV9XT1JLRkxPV19SVU4QAir+AQoRUmVzb3VyY2VFdmVudFR5cGUSHwobUkVTT1VSQ0VfRVZFTlRfVFlQRV9VTktOT1dOEAASHwobUkVTT1VSQ0VfRVZFTlRfVFlQRV9TVEFSVEVEEAESIQodUkVTT1VSQ0VfRVZFTlRfVFlQRV9DT01QTEVURUQQAhIeChpSRVNPVVJDRV9FVkVOVF9UWVBFX0ZBSUxFRBADEiEKHVJFU09VUkNFX0VWRU5UX1RZUEVfQ0FOQ0VMTEVEEAQSIQodUkVTT1VSQ0VfRVZFTlRfVFlQRV9USU1FRF9PVVQQBRIeChpSRVNPVVJDRV9FVkVOVF9UWVBFX1NUUkVBTRAGKjwKFFdvcmtmbG93UnVuRXZlbnRUeXBlEiQKIFdPUktGTE9XX1JVTl9FVkVOVF9UWVBFX0ZJTklTSEVEEAAy+AYKCkRpc3BhdGNoZXISPQoIUmVnaXN0ZXISFi5Xb3JrZXJSZWdpc3RlclJlcXVlc3QaFy5Xb3JrZXJSZWdpc3RlclJlc3BvbnNlIgASMwoGTGlzdGVuEhQuV29ya2VyTGlzdGVuUmVxdWVzdBoPLkFzc2lnbmVkQWN0aW9uIgAwARI1CghMaXN0ZW5WMhIULldvcmtlckxpc3RlblJlcXVlc3QaDy5Bc3NpZ25lZEFjdGlvbiIAMAESNAoJSGVhcnRiZWF0EhEuSGVhcnRiZWF0UmVxdWVzdBoSLkhlYXJ0YmVhdFJlc3BvbnNlIgASUgoZU3Vic2NyaWJlVG9Xb3JrZmxvd0V2ZW50cxIhLlN1YnNjcmliZVRvV29ya2Zsb3dFdmVudHNSZXF1ZXN0Gg4uV29ya2Zsb3dFdmVudCIAMAESUwoXU3Vic2NyaWJlVG9Xb3JrZmxvd1J1bnMSHy5TdWJzY3JpYmVUb1dvcmtmbG93UnVuc1JlcXVlc3QaES5Xb3JrZmxvd1J1bkV2ZW50IgAoATABEj8KE1NlbmRTdGVwQWN0aW9uRXZlbnQSEC5TdGVwQWN0aW9uRXZlbnQaFC5BY3Rpb25FdmVudFJlc3BvbnNlIgASRwoXU2VuZEdyb3VwS2V5QWN0aW9uRXZlbnQSFC5Hcm91cEtleUFjdGlvbkV2ZW50GhQuQWN0aW9uRXZlbnRSZXNwb25zZSIAEjwKEFB1dE92ZXJyaWRlc0RhdGESDi5PdmVycmlkZXNEYXRhGhYuT3ZlcnJpZGVzRGF0YVJlc3BvbnNlIgASRgoLVW5zdWJzY3JpYmUSGS5Xb3JrZXJVbnN1YnNjcmliZVJlcXVlc3QaGi5Xb3JrZXJVbnN1YnNjcmliZVJlc3BvbnNlIgASQwoOUmVmcmVzaFRpbWVvdXQSFi5SZWZyZXNoVGltZW91dFJlcXVlc3QaFy5SZWZyZXNoVGltZW91dFJlc3BvbnNlIgASOgoLUmVsZWFzZVNsb3QSEy5SZWxlYXNlU2xvdFJlcXVlc3QaFC5SZWxlYXNlU2xvdFJlc3BvbnNlIgASTwoSVXBzZXJ0V29ya2VyTGFiZWxzEhouVXBzZXJ0V29ya2VyTGFiZWxzUmVxdWVzdBobLlVwc2VydFdvcmtlckxhYmVsc1Jlc3BvbnNlIgBCR0IPRGlzcGF0Y2hlclByb3RvUAFaMmdpdGh1Yi5jb20vY29kZWgwMDcvZ29tdG0vYXBpLWNvbnRyYWN0cy9kaXNwYXRjaGVyYgZwcm90bzM",
    [file_google_protobuf_timestamp],
  );

/**
 * @generated from message WorkerLabels
 */
export type WorkerLabels = Message<"WorkerLabels"> & {
  /**
   * value of the label
   *
   * @generated from field: optional string strValue = 1;
   */
  strValue?: string;

  /**
   * @generated from field: optional int32 intValue = 2;
   */
  intValue?: number;
};

/**
 * Describes the message WorkerLabels.
 * Use `create(WorkerLabelsSchema)` to create a new message.
 */
export const WorkerLabelsSchema: GenMessage<WorkerLabels> =
  /*@__PURE__*/
  messageDesc(file_api_contracts_dispatcher_dispatcher, 0);

/**
 * @generated from message RuntimeInfo
 */
export type RuntimeInfo = Message<"RuntimeInfo"> & {
  /**
   * @generated from field: optional string sdkVersion = 1;
   */
  sdkVersion?: string;

  /**
   * @generated from field: optional SDKS language = 2;
   */
  language?: SDKS;

  /**
   * @generated from field: optional string languageVersion = 3;
   */
  languageVersion?: string;

  /**
   * @generated from field: optional string os = 4;
   */
  os?: string;

  /**
   * @generated from field: optional string extra = 5;
   */
  extra?: string;
};

/**
 * Describes the message RuntimeInfo.
 * Use `create(RuntimeInfoSchema)` to create a new message.
 */
export const RuntimeInfoSchema: GenMessage<RuntimeInfo> =
  /*@__PURE__*/
  messageDesc(file_api_contracts_dispatcher_dispatcher, 1);

/**
 * @generated from message WorkerRegisterRequest
 */
export type WorkerRegisterRequest = Message<"WorkerRegisterRequest"> & {
  /**
   * the name of the worker
   *
   * @generated from field: string workerName = 1;
   */
  workerName: string;

  /**
   * a list of actions that this worker can run
   *
   * @generated from field: repeated string actions = 2;
   */
  actions: string[];

  /**
   * (optional) the services for this worker
   *
   * @generated from field: repeated string services = 3;
   */
  services: string[];

  /**
   * (optional) the max number of runs this worker can handle
   *
   * @generated from field: optional int32 maxRuns = 4;
   */
  maxRuns?: number;

  /**
   * (optional) worker labels (i.e. state or other metadata)
   *
   * @generated from field: map<string, WorkerLabels> labels = 5;
   */
  labels: { [key: string]: WorkerLabels };

  /**
   * (optional) webhookId is the id of the webhook that the worker is associated with (if any)
   *
   * @generated from field: optional string webhookId = 6;
   */
  webhookId?: string;

  /**
   * (optional) information regarding the runtime environment of the worker
   *
   * @generated from field: optional RuntimeInfo runtimeInfo = 7;
   */
  runtimeInfo?: RuntimeInfo;
};

/**
 * Describes the message WorkerRegisterRequest.
 * Use `create(WorkerRegisterRequestSchema)` to create a new message.
 */
export const WorkerRegisterRequestSchema: GenMessage<WorkerRegisterRequest> =
  /*@__PURE__*/
  messageDesc(file_api_contracts_dispatcher_dispatcher, 2);

/**
 * @generated from message WorkerRegisterResponse
 */
export type WorkerRegisterResponse = Message<"WorkerRegisterResponse"> & {
  /**
   * the tenant id
   *
   * @generated from field: string tenantId = 1;
   */
  tenantId: string;

  /**
   * the id of the worker
   *
   * @generated from field: string workerId = 2;
   */
  workerId: string;

  /**
   * the name of the worker
   *
   * @generated from field: string workerName = 3;
   */
  workerName: string;
};

/**
 * Describes the message WorkerRegisterResponse.
 * Use `create(WorkerRegisterResponseSchema)` to create a new message.
 */
export const WorkerRegisterResponseSchema: GenMessage<WorkerRegisterResponse> =
  /*@__PURE__*/
  messageDesc(file_api_contracts_dispatcher_dispatcher, 3);

/**
 * @generated from message UpsertWorkerLabelsRequest
 */
export type UpsertWorkerLabelsRequest = Message<"UpsertWorkerLabelsRequest"> & {
  /**
   * the name of the worker
   *
   * @generated from field: string workerId = 1;
   */
  workerId: string;

  /**
   * (optional) the worker labels
   *
   * @generated from field: map<string, WorkerLabels> labels = 2;
   */
  labels: { [key: string]: WorkerLabels };
};

/**
 * Describes the message UpsertWorkerLabelsRequest.
 * Use `create(UpsertWorkerLabelsRequestSchema)` to create a new message.
 */
export const UpsertWorkerLabelsRequestSchema: GenMessage<UpsertWorkerLabelsRequest> =
  /*@__PURE__*/
  messageDesc(file_api_contracts_dispatcher_dispatcher, 4);

/**
 * @generated from message UpsertWorkerLabelsResponse
 */
export type UpsertWorkerLabelsResponse =
  Message<"UpsertWorkerLabelsResponse"> & {
    /**
     * the tenant id
     *
     * @generated from field: string tenantId = 1;
     */
    tenantId: string;

    /**
     * the id of the worker
     *
     * @generated from field: string workerId = 2;
     */
    workerId: string;
  };

/**
 * Describes the message UpsertWorkerLabelsResponse.
 * Use `create(UpsertWorkerLabelsResponseSchema)` to create a new message.
 */
export const UpsertWorkerLabelsResponseSchema: GenMessage<UpsertWorkerLabelsResponse> =
  /*@__PURE__*/
  messageDesc(file_api_contracts_dispatcher_dispatcher, 5);

/**
 * @generated from message AssignedAction
 */
export type AssignedAction = Message<"AssignedAction"> & {
  /**
   * the tenant id
   *
   * @generated from field: string tenantId = 1;
   */
  tenantId: string;

  /**
   * the workflow run id (optional)
   *
   * @generated from field: string workflowRunId = 2;
   */
  workflowRunId: string;

  /**
   * the get group key run id (optional)
   *
   * @generated from field: string getGroupKeyRunId = 3;
   */
  getGroupKeyRunId: string;

  /**
   * the job id
   *
   * @generated from field: string jobId = 4;
   */
  jobId: string;

  /**
   * the job name
   *
   * @generated from field: string jobName = 5;
   */
  jobName: string;

  /**
   * the job run id
   *
   * @generated from field: string jobRunId = 6;
   */
  jobRunId: string;

  /**
   * the step id
   *
   * @generated from field: string stepId = 7;
   */
  stepId: string;

  /**
   * the step run id
   *
   * @generated from field: string stepRunId = 8;
   */
  stepRunId: string;

  /**
   * the action id
   *
   * @generated from field: string actionId = 9;
   */
  actionId: string;

  /**
   * the action type
   *
   * @generated from field: ActionType actionType = 10;
   */
  actionType: ActionType;

  /**
   * the action payload
   *
   * @generated from field: string actionPayload = 11;
   */
  actionPayload: string;

  /**
   * the step name
   *
   * @generated from field: string stepName = 12;
   */
  stepName: string;

  /**
   * the count number of the retry attempt
   *
   * @generated from field: int32 retryCount = 13;
   */
  retryCount: number;

  /**
   * (optional) additional metadata set on the workflow
   *
   * @generated from field: optional string additional_metadata = 14;
   */
  additionalMetadata?: string;

  /**
   * (optional) the child workflow index (if this is a child workflow)
   *
   * @generated from field: optional int32 child_workflow_index = 15;
   */
  childWorkflowIndex?: number;

  /**
   * (optional) the child workflow key (if this is a child workflow)
   *
   * @generated from field: optional string child_workflow_key = 16;
   */
  childWorkflowKey?: string;

  /**
   * (optional) the parent workflow run id (if this is a child workflow)
   *
   * @generated from field: optional string parent_workflow_run_id = 17;
   */
  parentWorkflowRunId?: string;
};

/**
 * Describes the message AssignedAction.
 * Use `create(AssignedActionSchema)` to create a new message.
 */
export const AssignedActionSchema: GenMessage<AssignedAction> =
  /*@__PURE__*/
  messageDesc(file_api_contracts_dispatcher_dispatcher, 6);

/**
 * @generated from message WorkerListenRequest
 */
export type WorkerListenRequest = Message<"WorkerListenRequest"> & {
  /**
   * the id of the worker
   *
   * @generated from field: string workerId = 1;
   */
  workerId: string;
};

/**
 * Describes the message WorkerListenRequest.
 * Use `create(WorkerListenRequestSchema)` to create a new message.
 */
export const WorkerListenRequestSchema: GenMessage<WorkerListenRequest> =
  /*@__PURE__*/
  messageDesc(file_api_contracts_dispatcher_dispatcher, 7);

/**
 * @generated from message WorkerUnsubscribeRequest
 */
export type WorkerUnsubscribeRequest = Message<"WorkerUnsubscribeRequest"> & {
  /**
   * the id of the worker
   *
   * @generated from field: string workerId = 1;
   */
  workerId: string;
};

/**
 * Describes the message WorkerUnsubscribeRequest.
 * Use `create(WorkerUnsubscribeRequestSchema)` to create a new message.
 */
export const WorkerUnsubscribeRequestSchema: GenMessage<WorkerUnsubscribeRequest> =
  /*@__PURE__*/
  messageDesc(file_api_contracts_dispatcher_dispatcher, 8);

/**
 * @generated from message WorkerUnsubscribeResponse
 */
export type WorkerUnsubscribeResponse = Message<"WorkerUnsubscribeResponse"> & {
  /**
   * the tenant id to unsubscribe from
   *
   * @generated from field: string tenantId = 1;
   */
  tenantId: string;

  /**
   * the id of the worker
   *
   * @generated from field: string workerId = 2;
   */
  workerId: string;
};

/**
 * Describes the message WorkerUnsubscribeResponse.
 * Use `create(WorkerUnsubscribeResponseSchema)` to create a new message.
 */
export const WorkerUnsubscribeResponseSchema: GenMessage<WorkerUnsubscribeResponse> =
  /*@__PURE__*/
  messageDesc(file_api_contracts_dispatcher_dispatcher, 9);

/**
 * @generated from message GroupKeyActionEvent
 */
export type GroupKeyActionEvent = Message<"GroupKeyActionEvent"> & {
  /**
   * the id of the worker
   *
   * @generated from field: string workerId = 1;
   */
  workerId: string;

  /**
   * the id of the job
   *
   * @generated from field: string workflowRunId = 2;
   */
  workflowRunId: string;

  /**
   * @generated from field: string getGroupKeyRunId = 3;
   */
  getGroupKeyRunId: string;

  /**
   * the action id
   *
   * @generated from field: string actionId = 4;
   */
  actionId: string;

  /**
   * @generated from field: google.protobuf.Timestamp eventTimestamp = 5;
   */
  eventTimestamp?: Timestamp;

  /**
   * the step event type
   *
   * @generated from field: GroupKeyActionEventType eventType = 6;
   */
  eventType: GroupKeyActionEventType;

  /**
   * the event payload
   *
   * @generated from field: string eventPayload = 7;
   */
  eventPayload: string;
};

/**
 * Describes the message GroupKeyActionEvent.
 * Use `create(GroupKeyActionEventSchema)` to create a new message.
 */
export const GroupKeyActionEventSchema: GenMessage<GroupKeyActionEvent> =
  /*@__PURE__*/
  messageDesc(file_api_contracts_dispatcher_dispatcher, 10);

/**
 * @generated from message StepActionEvent
 */
export type StepActionEvent = Message<"StepActionEvent"> & {
  /**
   * the id of the worker
   *
   * @generated from field: string workerId = 1;
   */
  workerId: string;

  /**
   * the id of the job
   *
   * @generated from field: string jobId = 2;
   */
  jobId: string;

  /**
   * the job run id
   *
   * @generated from field: string jobRunId = 3;
   */
  jobRunId: string;

  /**
   * the id of the step
   *
   * @generated from field: string stepId = 4;
   */
  stepId: string;

  /**
   * the step run id
   *
   * @generated from field: string stepRunId = 5;
   */
  stepRunId: string;

  /**
   * the action id
   *
   * @generated from field: string actionId = 6;
   */
  actionId: string;

  /**
   * @generated from field: google.protobuf.Timestamp eventTimestamp = 7;
   */
  eventTimestamp?: Timestamp;

  /**
   * the step event type
   *
   * @generated from field: StepActionEventType eventType = 8;
   */
  eventType: StepActionEventType;

  /**
   * the event payload
   *
   * @generated from field: string eventPayload = 9;
   */
  eventPayload: string;
};

/**
 * Describes the message StepActionEvent.
 * Use `create(StepActionEventSchema)` to create a new message.
 */
export const StepActionEventSchema: GenMessage<StepActionEvent> =
  /*@__PURE__*/
  messageDesc(file_api_contracts_dispatcher_dispatcher, 11);

/**
 * @generated from message ActionEventResponse
 */
export type ActionEventResponse = Message<"ActionEventResponse"> & {
  /**
   * the tenant id
   *
   * @generated from field: string tenantId = 1;
   */
  tenantId: string;

  /**
   * the id of the worker
   *
   * @generated from field: string workerId = 2;
   */
  workerId: string;
};

/**
 * Describes the message ActionEventResponse.
 * Use `create(ActionEventResponseSchema)` to create a new message.
 */
export const ActionEventResponseSchema: GenMessage<ActionEventResponse> =
  /*@__PURE__*/
  messageDesc(file_api_contracts_dispatcher_dispatcher, 12);

/**
 * @generated from message SubscribeToWorkflowEventsRequest
 */
export type SubscribeToWorkflowEventsRequest =
  Message<"SubscribeToWorkflowEventsRequest"> & {
    /**
     * the id of the workflow run
     *
     * @generated from field: optional string workflowRunId = 1;
     */
    workflowRunId?: string;

    /**
     * the key of the additional meta field to subscribe to
     *
     * @generated from field: optional string additionalMetaKey = 2;
     */
    additionalMetaKey?: string;

    /**
     * the value of the additional meta field to subscribe to
     *
     * @generated from field: optional string additionalMetaValue = 3;
     */
    additionalMetaValue?: string;
  };

/**
 * Describes the message SubscribeToWorkflowEventsRequest.
 * Use `create(SubscribeToWorkflowEventsRequestSchema)` to create a new message.
 */
export const SubscribeToWorkflowEventsRequestSchema: GenMessage<SubscribeToWorkflowEventsRequest> =
  /*@__PURE__*/
  messageDesc(file_api_contracts_dispatcher_dispatcher, 13);

/**
 * @generated from message SubscribeToWorkflowRunsRequest
 */
export type SubscribeToWorkflowRunsRequest =
  Message<"SubscribeToWorkflowRunsRequest"> & {
    /**
     * the id of the workflow run
     *
     * @generated from field: string workflowRunId = 1;
     */
    workflowRunId: string;
  };

/**
 * Describes the message SubscribeToWorkflowRunsRequest.
 * Use `create(SubscribeToWorkflowRunsRequestSchema)` to create a new message.
 */
export const SubscribeToWorkflowRunsRequestSchema: GenMessage<SubscribeToWorkflowRunsRequest> =
  /*@__PURE__*/
  messageDesc(file_api_contracts_dispatcher_dispatcher, 14);

/**
 * @generated from message WorkflowEvent
 */
export type WorkflowEvent = Message<"WorkflowEvent"> & {
  /**
   * the id of the workflow run
   *
   * @generated from field: string workflowRunId = 1;
   */
  workflowRunId: string;

  /**
   * @generated from field: ResourceType resourceType = 2;
   */
  resourceType: ResourceType;

  /**
   * @generated from field: ResourceEventType eventType = 3;
   */
  eventType: ResourceEventType;

  /**
   * @generated from field: string resourceId = 4;
   */
  resourceId: string;

  /**
   * @generated from field: google.protobuf.Timestamp eventTimestamp = 5;
   */
  eventTimestamp?: Timestamp;

  /**
   * the event payload
   *
   * @generated from field: string eventPayload = 6;
   */
  eventPayload: string;

  /**
   * whether this is the last event for the workflow run - server
   * will hang up the connection but clients might want to case
   *
   * @generated from field: bool hangup = 7;
   */
  hangup: boolean;

  /**
   * (optional) the max number of retries this step can handle
   *
   * @generated from field: optional int32 stepRetries = 8;
   */
  stepRetries?: number;

  /**
   * (optional) the retry count of this step
   *
   * @generated from field: optional int32 retryCount = 9;
   */
  retryCount?: number;
};

/**
 * Describes the message WorkflowEvent.
 * Use `create(WorkflowEventSchema)` to create a new message.
 */
export const WorkflowEventSchema: GenMessage<WorkflowEvent> =
  /*@__PURE__*/
  messageDesc(file_api_contracts_dispatcher_dispatcher, 15);

/**
 * @generated from message WorkflowRunEvent
 */
export type WorkflowRunEvent = Message<"WorkflowRunEvent"> & {
  /**
   * the id of the workflow run
   *
   * @generated from field: string workflowRunId = 1;
   */
  workflowRunId: string;

  /**
   * @generated from field: WorkflowRunEventType eventType = 2;
   */
  eventType: WorkflowRunEventType;

  /**
   * @generated from field: google.protobuf.Timestamp eventTimestamp = 3;
   */
  eventTimestamp?: Timestamp;

  /**
   * @generated from field: repeated StepRunResult results = 4;
   */
  results: StepRunResult[];
};

/**
 * Describes the message WorkflowRunEvent.
 * Use `create(WorkflowRunEventSchema)` to create a new message.
 */
export const WorkflowRunEventSchema: GenMessage<WorkflowRunEvent> =
  /*@__PURE__*/
  messageDesc(file_api_contracts_dispatcher_dispatcher, 16);

/**
 * @generated from message StepRunResult
 */
export type StepRunResult = Message<"StepRunResult"> & {
  /**
   * @generated from field: string stepRunId = 1;
   */
  stepRunId: string;

  /**
   * @generated from field: string stepReadableId = 2;
   */
  stepReadableId: string;

  /**
   * @generated from field: string jobRunId = 3;
   */
  jobRunId: string;

  /**
   * @generated from field: optional string error = 4;
   */
  error?: string;

  /**
   * @generated from field: optional string output = 5;
   */
  output?: string;
};

/**
 * Describes the message StepRunResult.
 * Use `create(StepRunResultSchema)` to create a new message.
 */
export const StepRunResultSchema: GenMessage<StepRunResult> =
  /*@__PURE__*/
  messageDesc(file_api_contracts_dispatcher_dispatcher, 17);

/**
 * @generated from message OverridesData
 */
export type OverridesData = Message<"OverridesData"> & {
  /**
   * the step run id
   *
   * @generated from field: string stepRunId = 1;
   */
  stepRunId: string;

  /**
   * the path of the data to set
   *
   * @generated from field: string path = 2;
   */
  path: string;

  /**
   * the value to set
   *
   * @generated from field: string value = 3;
   */
  value: string;

  /**
   * the filename of the caller
   *
   * @generated from field: string callerFilename = 4;
   */
  callerFilename: string;
};

/**
 * Describes the message OverridesData.
 * Use `create(OverridesDataSchema)` to create a new message.
 */
export const OverridesDataSchema: GenMessage<OverridesData> =
  /*@__PURE__*/
  messageDesc(file_api_contracts_dispatcher_dispatcher, 18);

/**
 * @generated from message OverridesDataResponse
 */
export type OverridesDataResponse = Message<"OverridesDataResponse"> & {};

/**
 * Describes the message OverridesDataResponse.
 * Use `create(OverridesDataResponseSchema)` to create a new message.
 */
export const OverridesDataResponseSchema: GenMessage<OverridesDataResponse> =
  /*@__PURE__*/
  messageDesc(file_api_contracts_dispatcher_dispatcher, 19);

/**
 * @generated from message HeartbeatRequest
 */
export type HeartbeatRequest = Message<"HeartbeatRequest"> & {
  /**
   * the id of the worker
   *
   * @generated from field: string workerId = 1;
   */
  workerId: string;

  /**
   * heartbeatAt is the time the worker sent the heartbeat
   *
   * @generated from field: google.protobuf.Timestamp heartbeatAt = 2;
   */
  heartbeatAt?: Timestamp;
};

/**
 * Describes the message HeartbeatRequest.
 * Use `create(HeartbeatRequestSchema)` to create a new message.
 */
export const HeartbeatRequestSchema: GenMessage<HeartbeatRequest> =
  /*@__PURE__*/
  messageDesc(file_api_contracts_dispatcher_dispatcher, 20);

/**
 * @generated from message HeartbeatResponse
 */
export type HeartbeatResponse = Message<"HeartbeatResponse"> & {};

/**
 * Describes the message HeartbeatResponse.
 * Use `create(HeartbeatResponseSchema)` to create a new message.
 */
export const HeartbeatResponseSchema: GenMessage<HeartbeatResponse> =
  /*@__PURE__*/
  messageDesc(file_api_contracts_dispatcher_dispatcher, 21);

/**
 * @generated from message RefreshTimeoutRequest
 */
export type RefreshTimeoutRequest = Message<"RefreshTimeoutRequest"> & {
  /**
   * the id of the step run to release
   *
   * @generated from field: string stepRunId = 1;
   */
  stepRunId: string;

  /**
   * @generated from field: string incrementTimeoutBy = 2;
   */
  incrementTimeoutBy: string;
};

/**
 * Describes the message RefreshTimeoutRequest.
 * Use `create(RefreshTimeoutRequestSchema)` to create a new message.
 */
export const RefreshTimeoutRequestSchema: GenMessage<RefreshTimeoutRequest> =
  /*@__PURE__*/
  messageDesc(file_api_contracts_dispatcher_dispatcher, 22);

/**
 * @generated from message RefreshTimeoutResponse
 */
export type RefreshTimeoutResponse = Message<"RefreshTimeoutResponse"> & {
  /**
   * @generated from field: google.protobuf.Timestamp timeoutAt = 1;
   */
  timeoutAt?: Timestamp;
};

/**
 * Describes the message RefreshTimeoutResponse.
 * Use `create(RefreshTimeoutResponseSchema)` to create a new message.
 */
export const RefreshTimeoutResponseSchema: GenMessage<RefreshTimeoutResponse> =
  /*@__PURE__*/
  messageDesc(file_api_contracts_dispatcher_dispatcher, 23);

/**
 * @generated from message ReleaseSlotRequest
 */
export type ReleaseSlotRequest = Message<"ReleaseSlotRequest"> & {
  /**
   * the id of the step run to release
   *
   * @generated from field: string stepRunId = 1;
   */
  stepRunId: string;
};

/**
 * Describes the message ReleaseSlotRequest.
 * Use `create(ReleaseSlotRequestSchema)` to create a new message.
 */
export const ReleaseSlotRequestSchema: GenMessage<ReleaseSlotRequest> =
  /*@__PURE__*/
  messageDesc(file_api_contracts_dispatcher_dispatcher, 24);

/**
 * @generated from message ReleaseSlotResponse
 */
export type ReleaseSlotResponse = Message<"ReleaseSlotResponse"> & {};

/**
 * Describes the message ReleaseSlotResponse.
 * Use `create(ReleaseSlotResponseSchema)` to create a new message.
 */
export const ReleaseSlotResponseSchema: GenMessage<ReleaseSlotResponse> =
  /*@__PURE__*/
  messageDesc(file_api_contracts_dispatcher_dispatcher, 25);

/**
 * @generated from enum SDKS
 */
export enum SDKS {
  /**
   * @generated from enum value: UNKNOWN = 0;
   */
  UNKNOWN = 0,

  /**
   * @generated from enum value: GO = 1;
   */
  GO = 1,

  /**
   * @generated from enum value: PYTHON = 2;
   */
  PYTHON = 2,

  /**
   * @generated from enum value: TYPESCRIPT = 3;
   */
  TYPESCRIPT = 3,
}

/**
 * Describes the enum SDKS.
 */
export const SDKSSchema: GenEnum<SDKS> =
  /*@__PURE__*/
  enumDesc(file_api_contracts_dispatcher_dispatcher, 0);

/**
 * @generated from enum ActionType
 */
export enum ActionType {
  /**
   * @generated from enum value: START_STEP_RUN = 0;
   */
  START_STEP_RUN = 0,

  /**
   * @generated from enum value: CANCEL_STEP_RUN = 1;
   */
  CANCEL_STEP_RUN = 1,

  /**
   * @generated from enum value: START_GET_GROUP_KEY = 2;
   */
  START_GET_GROUP_KEY = 2,
}

/**
 * Describes the enum ActionType.
 */
export const ActionTypeSchema: GenEnum<ActionType> =
  /*@__PURE__*/
  enumDesc(file_api_contracts_dispatcher_dispatcher, 1);

/**
 * @generated from enum GroupKeyActionEventType
 */
export enum GroupKeyActionEventType {
  /**
   * @generated from enum value: GROUP_KEY_EVENT_TYPE_UNKNOWN = 0;
   */
  GROUP_KEY_EVENT_TYPE_UNKNOWN = 0,

  /**
   * @generated from enum value: GROUP_KEY_EVENT_TYPE_STARTED = 1;
   */
  GROUP_KEY_EVENT_TYPE_STARTED = 1,

  /**
   * @generated from enum value: GROUP_KEY_EVENT_TYPE_COMPLETED = 2;
   */
  GROUP_KEY_EVENT_TYPE_COMPLETED = 2,

  /**
   * @generated from enum value: GROUP_KEY_EVENT_TYPE_FAILED = 3;
   */
  GROUP_KEY_EVENT_TYPE_FAILED = 3,
}

/**
 * Describes the enum GroupKeyActionEventType.
 */
export const GroupKeyActionEventTypeSchema: GenEnum<GroupKeyActionEventType> =
  /*@__PURE__*/
  enumDesc(file_api_contracts_dispatcher_dispatcher, 2);

/**
 * @generated from enum StepActionEventType
 */
export enum StepActionEventType {
  /**
   * @generated from enum value: STEP_EVENT_TYPE_UNKNOWN = 0;
   */
  STEP_EVENT_TYPE_UNKNOWN = 0,

  /**
   * @generated from enum value: STEP_EVENT_TYPE_STARTED = 1;
   */
  STEP_EVENT_TYPE_STARTED = 1,

  /**
   * @generated from enum value: STEP_EVENT_TYPE_COMPLETED = 2;
   */
  STEP_EVENT_TYPE_COMPLETED = 2,

  /**
   * @generated from enum value: STEP_EVENT_TYPE_FAILED = 3;
   */
  STEP_EVENT_TYPE_FAILED = 3,

  /**
   * @generated from enum value: STEP_EVENT_TYPE_ACKNOWLEDGED = 4;
   */
  STEP_EVENT_TYPE_ACKNOWLEDGED = 4,
}

/**
 * Describes the enum StepActionEventType.
 */
export const StepActionEventTypeSchema: GenEnum<StepActionEventType> =
  /*@__PURE__*/
  enumDesc(file_api_contracts_dispatcher_dispatcher, 3);

/**
 * @generated from enum ResourceType
 */
export enum ResourceType {
  /**
   * @generated from enum value: RESOURCE_TYPE_UNKNOWN = 0;
   */
  UNKNOWN = 0,

  /**
   * @generated from enum value: RESOURCE_TYPE_STEP_RUN = 1;
   */
  STEP_RUN = 1,

  /**
   * @generated from enum value: RESOURCE_TYPE_WORKFLOW_RUN = 2;
   */
  WORKFLOW_RUN = 2,
}

/**
 * Describes the enum ResourceType.
 */
export const ResourceTypeSchema: GenEnum<ResourceType> =
  /*@__PURE__*/
  enumDesc(file_api_contracts_dispatcher_dispatcher, 4);

/**
 * @generated from enum ResourceEventType
 */
export enum ResourceEventType {
  /**
   * @generated from enum value: RESOURCE_EVENT_TYPE_UNKNOWN = 0;
   */
  UNKNOWN = 0,

  /**
   * @generated from enum value: RESOURCE_EVENT_TYPE_STARTED = 1;
   */
  STARTED = 1,

  /**
   * @generated from enum value: RESOURCE_EVENT_TYPE_COMPLETED = 2;
   */
  COMPLETED = 2,

  /**
   * @generated from enum value: RESOURCE_EVENT_TYPE_FAILED = 3;
   */
  FAILED = 3,

  /**
   * @generated from enum value: RESOURCE_EVENT_TYPE_CANCELLED = 4;
   */
  CANCELLED = 4,

  /**
   * @generated from enum value: RESOURCE_EVENT_TYPE_TIMED_OUT = 5;
   */
  TIMED_OUT = 5,

  /**
   * @generated from enum value: RESOURCE_EVENT_TYPE_STREAM = 6;
   */
  STREAM = 6,
}

/**
 * Describes the enum ResourceEventType.
 */
export const ResourceEventTypeSchema: GenEnum<ResourceEventType> =
  /*@__PURE__*/
  enumDesc(file_api_contracts_dispatcher_dispatcher, 5);

/**
 * @generated from enum WorkflowRunEventType
 */
export enum WorkflowRunEventType {
  /**
   * @generated from enum value: WORKFLOW_RUN_EVENT_TYPE_FINISHED = 0;
   */
  FINISHED = 0,
}

/**
 * Describes the enum WorkflowRunEventType.
 */
export const WorkflowRunEventTypeSchema: GenEnum<WorkflowRunEventType> =
  /*@__PURE__*/
  enumDesc(file_api_contracts_dispatcher_dispatcher, 6);

/**
 * @generated from service Dispatcher
 */
export const Dispatcher: GenService<{
  /**
   * @generated from rpc Dispatcher.Register
   */
  register: {
    methodKind: "unary";
    input: typeof WorkerRegisterRequestSchema;
    output: typeof WorkerRegisterResponseSchema;
  };
  /**
   * @generated from rpc Dispatcher.Listen
   */
  listen: {
    methodKind: "server_streaming";
    input: typeof WorkerListenRequestSchema;
    output: typeof AssignedActionSchema;
  };
  /**
   * ListenV2 is like listen, but implementation does not include heartbeats. This should only used by SDKs
   * against engine version v0.18.1+
   *
   * @generated from rpc Dispatcher.ListenV2
   */
  listenV2: {
    methodKind: "server_streaming";
    input: typeof WorkerListenRequestSchema;
    output: typeof AssignedActionSchema;
  };
  /**
   * Heartbeat is a method for workers to send heartbeats to the dispatcher
   *
   * @generated from rpc Dispatcher.Heartbeat
   */
  heartbeat: {
    methodKind: "unary";
    input: typeof HeartbeatRequestSchema;
    output: typeof HeartbeatResponseSchema;
  };
  /**
   * @generated from rpc Dispatcher.SubscribeToWorkflowEvents
   */
  subscribeToWorkflowEvents: {
    methodKind: "server_streaming";
    input: typeof SubscribeToWorkflowEventsRequestSchema;
    output: typeof WorkflowEventSchema;
  };
  /**
   * @generated from rpc Dispatcher.SubscribeToWorkflowRuns
   */
  subscribeToWorkflowRuns: {
    methodKind: "bidi_streaming";
    input: typeof SubscribeToWorkflowRunsRequestSchema;
    output: typeof WorkflowRunEventSchema;
  };
  /**
   * @generated from rpc Dispatcher.SendStepActionEvent
   */
  sendStepActionEvent: {
    methodKind: "unary";
    input: typeof StepActionEventSchema;
    output: typeof ActionEventResponseSchema;
  };
  /**
   * @generated from rpc Dispatcher.SendGroupKeyActionEvent
   */
  sendGroupKeyActionEvent: {
    methodKind: "unary";
    input: typeof GroupKeyActionEventSchema;
    output: typeof ActionEventResponseSchema;
  };
  /**
   * @generated from rpc Dispatcher.PutOverridesData
   */
  putOverridesData: {
    methodKind: "unary";
    input: typeof OverridesDataSchema;
    output: typeof OverridesDataResponseSchema;
  };
  /**
   * @generated from rpc Dispatcher.Unsubscribe
   */
  unsubscribe: {
    methodKind: "unary";
    input: typeof WorkerUnsubscribeRequestSchema;
    output: typeof WorkerUnsubscribeResponseSchema;
  };
  /**
   * @generated from rpc Dispatcher.RefreshTimeout
   */
  refreshTimeout: {
    methodKind: "unary";
    input: typeof RefreshTimeoutRequestSchema;
    output: typeof RefreshTimeoutResponseSchema;
  };
  /**
   * @generated from rpc Dispatcher.ReleaseSlot
   */
  releaseSlot: {
    methodKind: "unary";
    input: typeof ReleaseSlotRequestSchema;
    output: typeof ReleaseSlotResponseSchema;
  };
  /**
   * @generated from rpc Dispatcher.UpsertWorkerLabels
   */
  upsertWorkerLabels: {
    methodKind: "unary";
    input: typeof UpsertWorkerLabelsRequestSchema;
    output: typeof UpsertWorkerLabelsResponseSchema;
  };
}> = /*@__PURE__*/ serviceDesc(file_api_contracts_dispatcher_dispatcher, 0);
