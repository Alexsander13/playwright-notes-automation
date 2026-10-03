// fixtures/base-test.ts
import { test as base } from '@playwright/test';

// Расширяем базовый функционал Playwright
export const test = base.extend({
  page: async ({ page }, use) => {
    // Сохраняем оригинальный метод навигации
    const originalGoto = page.goto.bind(page);

    // Перезаписываем page.goto для всех тестов
    page.goto = async (url, options) => {
      // 1. Выполняем стандартный переход по адресу
      const response = await originalGoto(url, options);

      // 2. Встраиваем вашу проверку окна
      const consentButton = page.getByRole('button', { name: 'Consent' });
      try {
        // Ждем до 2 секунд. Если кнопка появилась — кликаем
        await consentButton.waitFor({ state: 'visible', timeout: 5000 });
        await consentButton.click();
      } catch (e) {
        // Окна нет — тихо идем дальше
      }

      // Возвращаем результат оригинального goto
      return response;
    };

    // Передаем "прокачанную" страницу дальше в тесты
    await use(page);
  },
});

// Экспортируем expect отсюда же для удобства
export { expect } from '@playwright/test';
