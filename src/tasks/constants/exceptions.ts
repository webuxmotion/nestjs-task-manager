import { NotFoundException } from "@nestjs/common";

export const taskNotFound = (id) => {
  throw new NotFoundException(`Task with ID "${id}" not found`);
}