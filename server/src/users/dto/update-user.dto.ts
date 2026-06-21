import { IsEmail, IsIn, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsIn(['Overdue', 'Active', 'Inactive'])
  accountStatus?: 'Overdue' | 'Active' | 'Inactive';
}
