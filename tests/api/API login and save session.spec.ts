import { request, test as setup } from '@playwright/test';
import { loginTestUser } from "../../src/utils/test-data";
import fs from 'node:fs';

setup('API login and save session', async () => {
  const apiContext = await request.newContext();
  const user = loginTestUser();
  
  const response = await apiContext.post('https://practice.expandtesting.com/notes/api/users/login', {
    data: {
      email: user.email,
      password: user.password,
    },
  });

  if (!response.ok()) {
    throw new Error('Не удалось авторизоваться через API');
  }

  // 1. Достаем токен из тела ответа
  const responseJson = await response.json();
  const token = responseJson.data.token;

  // 2. Получаем базовое состояние с куками
  const state = await apiContext.storageState();

  // 3. Дописываем token в localStorage для нужного origin
  state.origins = [
    {
      origin: 'https://practice.expandtesting.com',
      localStorage: [
        {
          name: 'token',
          value: token,
        },
      ],
    },
  ];

  // 4. Сохраняем итоговый файл
  fs.writeFileSync('src/utils/auth.json', JSON.stringify(state, null, 2));
});
