export type TLogger = {
  success: boolean;
  elapsed: number;
  result: {
    totalPages: number;
    number: number;
    recordsTotal: number;
    recordsFiltered: number;
    auditLog: {
      logId: number;
      applicationId: number | null;
      applicationType: string | null;
      companyId: number | null;
      actionType: string;
      ip: string;
      userAgent: string;
      userId: number;
      source: string | null;
      ownerId: number | null;
      logInfo: string | null;
      creationTimestamp: string;
    }[];
  };
};

export interface ILogger {
  success: boolean;
  elapsed: number;
  result: {
    totalPages: number;
    number: number;
    recordsTotal: number;
    recordsFiltered: number;
    auditLog: {
      logId: number;
      applicationId: number | null | any;
      applicationType: string | null | any;
      companyId: number | null;
      actionType: string | any;
      ip: string;
      userAgent: string;
      userId: number;
      source: string | null;
      ownerId: number | null;
      logInfo: string | null;
      creationTimestamp: string | Date | any;
    }[];
  };
}
