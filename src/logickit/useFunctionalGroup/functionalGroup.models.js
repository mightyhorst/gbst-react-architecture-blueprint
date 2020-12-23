export const Roles = {
    PUBLIC: "PUBLIC",
    OWNER: 'OWNER', // ---> Billing and close account 
    ADMIN: 'ADMIN', // ---> read /write and CRUD users
    WRITER: 'WRITER', // ---> read/write 
    READER: 'READER', // ---> read and fork 
}

export const CascadingRoles = {
    OWNER : [
        Roles.OWNER,
        Roles.ADMIN,
        Roles.WRITER,
        Roles.READER,
        Roles.PUBLIC
    ],
    ADMIN : [
        Roles.ADMIN,
        Roles.WRITER,
        Roles.READER,
        Roles.PUBLIC
    ],
    WRITER : [
        Roles.WRITER,
        Roles.READER,
        Roles.PUBLIC
    ],
    READER : [
        Roles.READER,
        Roles.PUBLIC
    ]
}