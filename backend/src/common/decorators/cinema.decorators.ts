import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CinemaId = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext): number => {
    const request = ctx.switchToHttp().getRequest();
    return request.cinemaId;
  },
);
