export {}

export type Roles = "admin" | "moderator"

declare global {
  interface CustomJwtSesionClaims{
    metadata: {
      roles?: Roles;
    }
  }
}