import { IsIn, IsOptional, IsString } from 'class-validator';

export class UpdateSubscriptionDto {
  @IsOptional()
  @IsString()
  licensePlate?: string;

  @IsOptional()
  @IsIn(['Pro', 'Standard', 'Deluxe'])
  type?: 'Pro' | 'Standard' | 'Deluxe';

  @IsOptional()
  @IsIn(['Active', 'Cancelled'])
  status?: 'Active' | 'Cancelled';
}
