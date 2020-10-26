import { BadRequestException, PipeTransform } from '@nestjs/common';
import TASK_STATUSES from '../../constants/statuses';

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses = TASK_STATUSES;

  transform(value: any) {
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`"${value}" is an invalid status`);
    }

    return value;
  }

  private isStatusValid(status: any) {
    const idx = this.allowedStatuses.indexOf(status);
    
    return idx !== -1;
  }
}