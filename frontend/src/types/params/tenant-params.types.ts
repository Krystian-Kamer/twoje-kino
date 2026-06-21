export type TenantParams = {
  params: Promise<{ tenant: string }>;
};

export type TenantMovieParams = TenantParams & {
  params: Promise<{ tenant: string; movieId: string }>;
};
