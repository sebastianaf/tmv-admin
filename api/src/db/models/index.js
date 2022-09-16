import { User, UserSchema } from "./user.model";
import { Role, RoleSchema } from "./role.model";
import {
  ConsecutiveType,
  ConsecutiveTypeSchema,
} from "./consecutiveType.model";
import { Consecutive, ConsecutiveSchema } from "./consecutive.model";
import { DniType, DniTypeSchema } from "./dniType.model";
import { ClientType, ClientTypeSchema } from "./clientType.model";
import { ClientContact, ClientContactSchema } from "./clientContact.model";
import { Client, ClientSchema } from "./client.model";
import { EmployeeType, EmployeeTypeSchema } from "./employeeType.model";
import { Employee, EmployeeSchema } from "./employee.model";
import { RequestType, RequestTypeSchema } from "./requestType.model";
import { RequestFile, RequestFileSchema } from "./requestFile.model";
import { Request, RequestSchema } from "./request.model";
import { QuotationType, QuotationTypeSchema } from "./quotationType.model";
import { QuotationFile, QuotationFileSchema } from "./quotationFile.model";
import { Quotation, QuotationSchema } from "./quotation.model";
import { ServiceType, ServiceTypeSchema } from "./serviceType.model";
import { ServiceFile, ServiceFileSchema } from "./serviceFile.model";
import { Service, ServiceSchema } from "./service.model";
import { Project, ProjectSchema } from "./project.model";
import { ProjectType, ProjectTypeSchema } from "./projectType.model";
import { ProjectFile, ProjectFileSchema } from "./projectFile.model";
import { Invoice, InvoiceSchema } from "./invoice.model";
import { InvoiceType, InvoiceTypeSchema } from "./invoiceType.model";
import { InvoiceFile, InvoiceFileSchema } from "./invoiceFile.model";

const setupModels = (sequelize) => {
  /**
   * Models
   */
  Role.init(RoleSchema, Role.config(sequelize));
  User.init(UserSchema, User.config(sequelize));
  ConsecutiveType.init(
    ConsecutiveTypeSchema,
    ConsecutiveType.config(sequelize)
  );
  Consecutive.init(ConsecutiveSchema, Consecutive.config(sequelize));
  DniType.init(DniTypeSchema, DniType.config(sequelize));
  EmployeeType.init(EmployeeTypeSchema, EmployeeType.config(sequelize));
  Employee.init(EmployeeSchema, Employee.config(sequelize));
  ClientType.init(ClientTypeSchema, ClientType.config(sequelize));
  ClientContact.init(ClientContactSchema, ClientContact.config(sequelize));
  Client.init(ClientSchema, Client.config(sequelize));
  RequestType.init(RequestTypeSchema, RequestType.config(sequelize));
  RequestFile.init(RequestFileSchema, RequestFile.config(sequelize));
  Request.init(RequestSchema, Request.config(sequelize));
  QuotationType.init(QuotationTypeSchema, QuotationType.config(sequelize));
  QuotationFile.init(QuotationFileSchema, QuotationFile.config(sequelize));
  Quotation.init(QuotationSchema, Quotation.config(sequelize));
  ServiceType.init(ServiceTypeSchema, ServiceType.config(sequelize));
  ServiceFile.init(ServiceFileSchema, ServiceFile.config(sequelize));
  Service.init(ServiceSchema, Service.config(sequelize));
  Project.init(ProjectSchema, Project.config(sequelize));
  ProjectType.init(ProjectTypeSchema, ProjectType.config(sequelize));
  ProjectFile.init(ProjectFileSchema, ProjectFile.config(sequelize));
  Invoice.init(InvoiceSchema, Invoice.config(sequelize));
  InvoiceType.init(InvoiceTypeSchema, InvoiceType.config(sequelize));
  InvoiceFile.init(InvoiceFileSchema, InvoiceFile.config(sequelize));

  /**
   * Associations
   */
  Role.associate(sequelize.models);
  User.associate(sequelize.models);
  ConsecutiveType.associate(sequelize.models);
  Consecutive.associate(sequelize.models);
  DniType.associate(sequelize.models);
  EmployeeType.associate(sequelize.models);
  Employee.associate(sequelize.models);
  ClientType.associate(sequelize.models);
  ClientContact.associate(sequelize.models);
  Client.associate(sequelize.models);
  RequestType.associate(sequelize.models);
  RequestFile.associate(sequelize.models);
  Request.associate(sequelize.models);
  QuotationType.associate(sequelize.models);
  QuotationFile.associate(sequelize.models);
  Quotation.associate(sequelize.models);
  ServiceType.associate(sequelize.models);
  ServiceFile.associate(sequelize.models);
  Service.associate(sequelize.models);
  Project.associate(sequelize.models);
  ProjectType.associate(sequelize.models);
  ProjectFile.associate(sequelize.models);
  Invoice.associate(sequelize.models);
  InvoiceType.associate(sequelize.models);
  InvoiceFile.associate(sequelize.models);
};

export { setupModels };
