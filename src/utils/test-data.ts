import { randomUUID } from "node:crypto";
import type { TestUser } from "../types/test-data";

export function generateTestUser(): TestUser {
  const id = randomUUID();
  return {
    name: "Тестовый пользователь",
    email: `user-${id}@example.test`,
    password: "safe-test-password",
  };
}

export function loginTestUser(): TestUser {
  
  return {
    name: "Alex",
    email: `shyrik_r@protonmail.com`,
    password: "123456",
  };
}


