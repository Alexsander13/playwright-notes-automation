export interface TestUser {
    name: string;
    email: string;
    password: string;
}

export interface Note {
  id: string;
  title: string;
  description: string;
  category: string;
  completed: boolean;
}

const exampleUser: TestUser = {
  name: "Анна",
  email: "anna@example.test",
  password: "safe-test-password",
};

const exampleNote: Note = {
  id: "note-1",
  title: "Первая заметка",
  description: "Проверяю типы данных",
  category: "Учёба",
  completed: false,
};

void exampleUser;
void exampleNote;
