/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $BaseVoListFileEntity = {
    description: `基础响应数据`,
    properties: {
        code: {
            type: 'number',
            description: `响应码`,
            format: 'int32',
        },
        message: {
            type: 'string',
            description: `响应消息`,
        },
        data: {
            type: 'array',
            contains: {
                type: 'FileEntity',
            },
        },
        time: {
            type: 'string',
            description: `响应时间`,
            format: 'date-time',
        },
        type: {
            type: 'Enum',
        },
    },
} as const;
