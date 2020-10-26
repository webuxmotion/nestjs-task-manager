import { IsIn, IsNotEmpty, IsOptional } from "class-validator";
import { TaskStatus } from "../task.model";
import TASK_STATUSES from '../../constants/statuses';

export class GetTasksFilterDto {
  @IsOptional()
  @IsIn(TASK_STATUSES)
  status: TaskStatus;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}