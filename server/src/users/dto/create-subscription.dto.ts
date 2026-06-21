import { IsIn, IsString } from 'class-validator';

export class CreateSubscriptionDto {
  @IsString()
  licensePlate!: string;

  @IsIn(['Pro', 'Standard', 'Deluxe'])
  type!: 'Pro' | 'Standard' | 'Deluxe';
}
