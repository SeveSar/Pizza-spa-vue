export interface DataResponseUser {
  data?: {
    idToken?: string;
    email?: string;
    refreshToken?: string;
    localId?: string;
    expiresIn?: number;
  };
  status: number;
}
