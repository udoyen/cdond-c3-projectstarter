import { ICommand } from '../../../common/commands';

export class UpdateEmployeeEffectiveDate implements ICommand {
  employeeId: number;
  effectiveDate: Date;

  constructor(employeeId: number, effectiveDate: string) {
    this.employeeId = employeeId;
    this.effectiveDate = new Date(effectiveDate);
  }
}
