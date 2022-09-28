//DniTypes
{"name": "Cédula de ciudadanía"}
{"name": "NIT"}

//ConsecutiveTypes
{
	"name":"Año 2022",
	"preString": "122-",
	"current": 1
}

//EmployeeTypes
{"name": "Ingeniero"}
{"name": "Técnico"}
{"name": "Vendedor"}
{"name": "Contador"}

//ClientTypes
{"name": "Grandes superficies"}

//RequestTypes
{"name": "Venta"}
{"name": "Servicio"}
{"name": "Mantenimiento"}

//QuotationTypes
{"name": "Común"}

//ServiceTypes
{"name": "Montaje"}
{"name": "Mantenimiento"}
{"name": "Visita técnica"}
{"name": "Fabricación"}

//ProjectType
{"name": "Refrigeración industrial"}
{"name": "Ahorro energético"}

//InvoiceTypes
{"name": "Común"}

//---------------------------------------

//Consecutive
{"consecutiveTypeId": 1}

//Employee
{
	"employeeTypeId": 1,
	"firstName": "Pedro",
	"lastName": "Pérez",
	"dni": "1234567891011",
	"dniTypeId": 1,
	"email": "pperez@tmvingenieria.com",
	"phoneNumber": "3002541015"
}
{
	"employeeTypeId": 2,
	"firstName": "Armando",
	"lastName": "Casas",
	"dni": "121314151617",
	"dniTypeId": 1,
	"email": "acasas@tmvingenieria.com",
	"phoneNumber": "3005542015"
}
{
	"employeeTypeId": 3,
	"firstName": "Julia",
	"lastName": "Ruiz",
	"dni": "181920212223",
	"dniTypeId": 1,
	"email": "jruiz@tmvingenieria.com",
	"phoneNumber": "3105542315"
}
{
	"employeeTypeId": 2,
	"firstName": "Camilo",
	"lastName": "González",
	"dni": "2425262728",
	"dniTypeId": 1,
	"email": "cgonzalez@tmvingenieria.com",
	"phoneNumber": "3185522315"
}
{
	"employeeTypeId": 4,
	"firstName": "María",
	"lastName": "Martinez",
	"dni": "293031323334",
	"dniTypeId": 1,
	"email": "mmartinez@tmvingenieria.com",
	"phoneNumber": "3145511315"
}
{
	"employeeTypeId": 2,
	"firstName": "Hector",
	"lastName": "Velazco",
	"dni": "353637383940",
	"dniTypeId": 1,
	"email": "hvelazco@tmvingenieria.com",
	"phoneNumber": "3125453315"
}


//Roles
{"name":"Administración"}
{"name":"Ingeniería"}
{"name":"Comercial"}
{"name":"Contabilidad"}
{"name":"Compras"}



//Users
{
	"alias": "pperez",
	"password": "pedro123",
	"roleId": 3,
	"employeeId": 1,
	"createdById": 1
}
{
	"alias": "acasas",
	"password": "armando123",
	"roleId": 3,
	"employeeId": 2,
	"createdById": 1
}
{
	"alias": "jruiz",
	"password": "julia123",
	"roleId": 4,
	"employeeId": 3,
	"createdById": 1
}
{
	"alias": "cgonzalez",
	"password": "camilo123",
	"roleId": 3,
	"employeeId": 4,
	"createdById": 1
}
{
	"alias": "mmartinez",
	"password": "maria123",
	"roleId": 5,
	"employeeId": 5,
	"createdById": 1
}
{
	"alias": "hvelazco",
	"password": "harold123",
	"roleId": 6,
	"employeeId": 6,
	"createdById": 1
}

//Client
{
	"clientTypeId": 1,
	"name": "Tiendas ABC",
	"dni": "9876543212355",
	"dniTypeId": 2,
	"idSiigo": "SIIGO_987654321235-5",
	"notes":"Almacen de cadena"
}

//ClientContact
{
	"clientId": 1,
	"firstName": "Juan",
	"lastName": "Rodríguez",
	"profession": "Gerente",
	"email": "juan.rodriguez@tiendasabd.com",
	"phoneNumber": "3127441026"
}

//Request
{
	"requestTypeId": 1,
	"consecutiveId": 1,
	"createdById": 3,
	"clientContactId": 1,
	"place": "Tienda ABC Sucursal Yumbo",
	"detail": "El gerente de TiendasABC está interesado en reconstruir la sección de neveras de carnes."
}
//Email
{
    "remitterName":"Admin | TMV Ingeniería",
	"logoURL":"http://tmvingenieria.com/wp-content/uploads/2018/04/tmv-logo-nuevo.png",
	"recieverEmails":["sebastianafanador95@gmail.com","lafanador@tmvingenieria.com"],
	"title":"Nueva solicitud 🔔",
	"subTitle":"Julia Ruiz registro una nueva solicitud",
	"subject":"Nueva solicitud para 'Tiendas ABC'",
	"body":"El gerente de TiendasABC está interesado en reconstruir la sección de neveras de carnes.",
    "footer":"Admin | TMV Ingeniería - Modulo de Ingeniería",
	"legal":"©2022 Derechos reservados | TMV Ingeniería S.A."
}

//Project
{
	"projectTypeId": 1,
	"notes": "Montaje de neveras sección de carnes.",
	"responsableId": 1,
	"createdById": 1,
	"consecutiveId": 1
}

//ProjectAuthorization id:1
{
	"authorizedById": 1,
	"authorizedAt": "2022-09-16T13:00:00.000Z"
}

//Service
{
	"serviceTypeId": 3,
	"requestId": 1,
	"notes": "Visita técnica para Tiendas ABC",
	"responsableId": 2,
	"createdById": 1,
	"consecutiveId": 1,
	"projectId": 1
}
//ServiceAuthorization id:1
{
	"authorizedById": 1,
	"authorizedAt": "2022-09-17T08:00:00.000Z"
}
//ServiceEnd id:1
{
	"finishedAt": "2022-09-17T10:00:00.000Z"
}

//Request
{
	"requestTypeId": 2,
	"consecutiveId": 1,
	"createdById": 1,
	"clientContactId": 1,
	"place": "Tienda ABC Sucursal Yumbo",
	"detail": "La tienda ABC necesita 3 neveras nuevas para su nueva sección de carnes."
}
//Email
{
    "remitterName":"Admin | TMV Ingeniería",
	"logoURL":"http://tmvingenieria.com/wp-content/uploads/2018/04/tmv-logo-nuevo.png",
	"recieverEmails":["sebastianafanador95@gmail.com","lafanador@tmvingenieria.com"],
	"title":"Nueva solicitud 🔔",
	"subTitle":"Pedro Pérez registró una nueva solicitud",
	"subject":"Nueva solicitud para 'Tiendas ABC'",
	"body":"La tienda ABC necesita 3 neveras nuevas para su nueva sección de carnes.",
    "footer":"Admin | TMV Ingeniería - Modulo de Ingeniería",
	"legal":"©2022 Derechos reservados | TMV Ingeniería S.A."
}

//Quotation
{
	"quotationTypeId": 1,
	"consecutiveId": 1,
	"createdById": 6,
	"responsableId": 6,
	"costValue": 400000000,
	"saleValue": 600000000,
	"notes": "La tienda ABC necesita 3 neveras nuevas para su nueva sección de carnes."
}
//Quotation Authorization id:1
{
	"authorizedById": 1,
	"authorizedAt": "2022-09-17T14:00:00.000Z"
}
//QuotationFile

//Service
{
	"serviceTypeId": 4,
	"quotationId": 1,
	"notes": "Fabricación de rack para Tiendas ABC",
	"responsableId": 1,
	"createdById": 1,
	"consecutiveId": 1,
	"projectId": 1
}
{
	"serviceTypeId": 1,
	"quotationId": 1,
	"notes": "Montaje de tuberías y cometida eléctrica",
	"responsableId": 2,
	"createdById": 1,
	"consecutiveId": 1,
	"projectId": 1
}
{
	"serviceTypeId": 1,
	"quotationId": 1,
	"notes": "Montaje de neveras",
	"responsableId": 4,
	"createdById": 1,
	"consecutiveId": 1,
	"projectId": 1
}
//ServiceAuthorization id:[2,3,4]
{
	"authorizedById": 1,
	"authorizedAt": "2022-09-17T16:00:00.000Z"
}
//ServiceEnd id:[2,3,4]
{
	"finishedAt": "2022-09-18T11:00:00.000Z"
}

//ProjectEnd id:1
{
	"finishedAt": "2022-09-18T12:30:00.000Z"
}

//ProjectFile

//Invoice
{
	"invoiceTypeId": 1,
	"notes": "Facturación de montaje de neveras para carnicos Tiendas ABC",
	"responsableId": 5,
	"createdById": 5,
	"consecutiveId": 1,
	"projectId": 1
}
//InvoiceAuthorization id:1
{
	"authorizedById": 1,
	"authorizedAt": "2022-09-18T13:00:00.000Z"
}
//InvoceFile

//InvoiceEnd id:1
{
	"finishedAt": "2022-09-18T17:00:00.000Z"
}

//Request
{
	"requestTypeId": 3,
	"consecutiveId": 1,
	"createdById": 3,
	"clientContactId": 1,
	"place": "Tienda ABC Sucursal Yumbo",
	"detail": "Se requiere reajuste de temperatura de la 3ra nevera del area de cárnicos."
}
//Email
{
    "remitterName":"Admin | TMV Ingeniería",
	"logoURL":"http://tmvingenieria.com/wp-content/uploads/2018/04/tmv-logo-nuevo.png",
	"recieverEmails":["sebastianafanador95@gmail.com","lafanador@tmvingenieria.com"],
	"title":"Nueva solicitud 🔔",
	"subTitle":"El cliente manifiesta que la carne no está refrigerandose bien",
	"subject":"Nueva solicitud para 'Tiendas ABC'",
	"body":"Se requiere reajuste de temperatura de la 3ra nevera del area de cárnicos.",
    "footer":"Admin | TMV Ingeniería - Modulo de Ingeniería",
	"legal":"©2022 Derechos reservados | TMV Ingeniería S.A."
}
{
	"serviceTypeId": 2,
	"requestId": 3,
	"notes": "Ajuste de temperatura para la nevera nº 3 Tiendas ABC Yumbo",
	"responsableId": 2,
	"createdById": 1,
	"consecutiveId": 1,
	"projectId": 1
}
//ServiceAuthorization id:5
{
	"authorizedById": 1,
	"authorizedAt": "2022-09-19T12:00:00.000Z"
}

//ServiceEnd id:5
{
	"finishedAt": "2022-09-20T10:00:00.000Z"
}
