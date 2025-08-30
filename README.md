# Role-Based Access Control (RBAC) via Clerk
This is a Documentation to implement Role-Based Access Control (RBAC) to a custom website like react.js, next.js etc via Clerk

Firstly we need to configure clerk to make user roles available in session token

### Configure the session token
Clerk gives us something called user metadata, which is like a storage space for extra user information

We will use it to store user-roles

PublicMetadata because it's read-only in the browser, making it super secure for storing sensitive information like user roles

To build a basic RBAC system, we need to make sure this publicMetadata is readily available in the session token we can quickly check user roles without having to make extra network requests every time we need this information

### Creating Typescript definition for Roles
create a 'types' folder and under it create `global.d.ts` file
