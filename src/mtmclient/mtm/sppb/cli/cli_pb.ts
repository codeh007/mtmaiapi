// @generated by protoc-gen-es v2.2.3 with parameter "target=ts,import_extension=none"
// @generated from file mtm/sppb/cli/cli.proto (package mtfilter, syntax proto3)
/* eslint-disable */

import type {
  GenFile,
  GenMessage,
  GenService,
} from "@bufbuild/protobuf/codegenv1";
import {
  fileDesc,
  messageDesc,
  serviceDesc,
} from "@bufbuild/protobuf/codegenv1";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file mtm/sppb/cli/cli.proto.
 */
export const file_mtm_sppb_cli_cli: GenFile =
  /*@__PURE__*/
  fileDesc(
    "ChZtdG0vc3BwYi9jbGkvY2xpLnByb3RvEghtdGZpbHRlciI8Cg5DbGlDb21tYW5kSXRlbRIKCgJpZBgBIAEoCRIPCgdjbWRMaW5lGAIgASgJEg0KBWxhYmVsGAMgASgJIgwKCkxpc3RDbGlSZXEiRAoKTGlzdENsaVJlcxInCgVpdGVtcxgBIAMoCzIYLm10ZmlsdGVyLkNsaUNvbW1hbmRJdGVtEg0KBWNvdW50GAIgASgNMlMKDE10Q2xpU2VydmljZRJDChNDbGlDb21tYW5kVGVtcGxhdGVzEhQubXRmaWx0ZXIuTGlzdENsaVJlcRoULm10ZmlsdGVyLkxpc3RDbGlSZXMiAEKAAQoMY29tLm10ZmlsdGVyQghDbGlQcm90b1ABWiZnaXRodWIuY29tL2NvZGVoMDA3L2dvbXRtL210bS9zcHBiL2NsaaICA01YWKoCCE10ZmlsdGVyygIITXRmaWx0ZXLiAhRNdGZpbHRlclxHUEJNZXRhZGF0YeoCCE10ZmlsdGVyYgZwcm90bzM",
    [file_google_protobuf_timestamp],
  );

/**
 * @generated from message mtfilter.CliCommandItem
 */
export type CliCommandItem = Message<"mtfilter.CliCommandItem"> & {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string cmdLine = 2;
   */
  cmdLine: string;

  /**
   * @generated from field: string label = 3;
   */
  label: string;
};

/**
 * Describes the message mtfilter.CliCommandItem.
 * Use `create(CliCommandItemSchema)` to create a new message.
 */
export const CliCommandItemSchema: GenMessage<CliCommandItem> =
  /*@__PURE__*/
  messageDesc(file_mtm_sppb_cli_cli, 0);

/**
 * @generated from message mtfilter.ListCliReq
 */
export type ListCliReq = Message<"mtfilter.ListCliReq"> & {};

/**
 * Describes the message mtfilter.ListCliReq.
 * Use `create(ListCliReqSchema)` to create a new message.
 */
export const ListCliReqSchema: GenMessage<ListCliReq> =
  /*@__PURE__*/
  messageDesc(file_mtm_sppb_cli_cli, 1);

/**
 * @generated from message mtfilter.ListCliRes
 */
export type ListCliRes = Message<"mtfilter.ListCliRes"> & {
  /**
   * @generated from field: repeated mtfilter.CliCommandItem items = 1;
   */
  items: CliCommandItem[];

  /**
   * @generated from field: uint32 count = 2;
   */
  count: number;
};

/**
 * Describes the message mtfilter.ListCliRes.
 * Use `create(ListCliResSchema)` to create a new message.
 */
export const ListCliResSchema: GenMessage<ListCliRes> =
  /*@__PURE__*/
  messageDesc(file_mtm_sppb_cli_cli, 2);

/**
 * @generated from service mtfilter.MtCliService
 */
export const MtCliService: GenService<{
  /**
   * @generated from rpc mtfilter.MtCliService.CliCommandTemplates
   */
  cliCommandTemplates: {
    methodKind: "unary";
    input: typeof ListCliReqSchema;
    output: typeof ListCliResSchema;
  };
}> = /*@__PURE__*/ serviceDesc(file_mtm_sppb_cli_cli, 0);
