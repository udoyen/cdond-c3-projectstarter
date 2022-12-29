import { ICommand } from '../../../common/commands';

export class UpdateEmployeeBirthdate implements ICommand {
  employeeId: number;
  birthdate: Date;

  constructor(employeeId: number, birthdate: string) {
    this.employeeId = employeeId;
    this.birthdate = new Date(birthdate);
  }
}
