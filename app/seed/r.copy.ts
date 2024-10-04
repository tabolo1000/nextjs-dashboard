import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import { invoices, customers, revenue, users } from '../lib/placeholder-data';

const client = await db.connect();
// асинхронное подключение к базе данных,
// в данном случае — к PostgreSQL через библиотеку для работы
// с базой данных.

// Асинхронная функция для создания таблицы "users" и её заполнения тестовыми данными
async function seedUsers() {
  // 1. Создаём расширение "uuid-ossp", если оно ещё не существует.
  // Это расширение нужно для генерации UUID (уникальных идентификаторов) в PostgreSQL.
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  // 2. Создаём таблицу 'users', если она ещё не существует.
  // В таблице будут следующие поля:
  // - id: уникальный идентификатор пользователя (UUID), который генерируется автоматически.
  // - name: строка длиной до 255 символов, обязательное поле.
  // - email: текстовое поле, обязательное и уникальное.
  // - password: текстовое поле, обязательное, в котором будет храниться хеш пароля.
  await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,   -- Генерация UUID по умолчанию
      name VARCHAR(255) NOT NULL,                       -- Имя пользователя (обязательное поле)
      email TEXT NOT NULL UNIQUE,                       -- Email пользователя (обязательное и уникальное поле)
      password TEXT NOT NULL                            -- Хеш пароля (обязательное поле)
    );
  `;

  // 3. Вставляем пользователей в таблицу.
  // Мы используем Promise.all, чтобы параллельно выполнить операции для каждого пользователя.
  // Функция bcrypt.hash используется для хеширования пароля перед его вставкой в базу данных.
  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      // Хешируем пароль пользователя с использованием bcrypt, задаём сложность уровня 10
      const hashedPassword = await bcrypt.hash(user.password, 10);

      // Вставляем пользователя в таблицу 'users'
      // Если пользователь с таким id уже существует (ON CONFLICT), то ничего не делаем (DO NOTHING)
      return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;  // Обрабатываем конфликт по полю id: если id уже существует, не вставляем данные
      `;
    }),
  );

  // Возвращаем массив с результатами вставки пользователей
  return insertedUsers;
}

// Асинхронная функция для создания таблицы 'invoices' и заполнения её данными
async function seedInvoices() {
  // 1. Создаём расширение "uuid-ossp", если оно ещё не установлено.
  // Это расширение нужно для генерации уникальных идентификаторов (UUID) в PostgreSQL.
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  // 2. Создаём таблицу 'invoices', если её ещё не существует.
  // В таблице будут следующие поля:
  // - id: уникальный идентификатор счёта (UUID), который генерируется автоматически.
  // - customer_id: UUID клиента, к которому относится счет (ссылка на таблицу клиентов).
  // - amount: сумма счёта (целое число, обязательное поле).
  // - status: статус счёта (строка, обязательное поле).
  // - date: дата создания счёта (обязательное поле).
  await client.sql`
    CREATE TABLE IF NOT EXISTS invoices (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,   -- Генерация UUID по умолчанию для каждого счёта
      customer_id UUID NOT NULL,                        -- Идентификатор клиента (обязательное поле)
      amount INT NOT NULL,                              -- Сумма счёта (обязательное поле)
      status VARCHAR(255) NOT NULL,                     -- Статус счёта (обязательное поле)
      date DATE NOT NULL                                -- Дата создания счёта (обязательное поле)
    );
  `;

  // 3. Вставляем данные о счетах в таблицу 'invoices'.
  // Используем Promise.all для параллельной обработки всех счетов.
  const insertedInvoices = await Promise.all(
    invoices.map(
      (invoice) => client.sql`
        INSERT INTO invoices (customer_id, amount, status, date)
        VALUES (${invoice.customer_id}, ${invoice.amount}, ${invoice.status}, ${invoice.date})
        ON CONFLICT (id) DO NOTHING;  // Если счёт с таким id уже существует, не вставляем данные
      `,
    ),
  );

  // 4. Возвращаем массив с результатами вставки счетов
  return insertedInvoices;
}

// Асинхронная функция для создания таблицы 'customers' и заполнения её данными
async function seedCustomers() {
  // 1. Создаём расширение "uuid-ossp", если оно ещё не установлено.
  // Это расширение нужно для генерации уникальных идентификаторов (UUID) в PostgreSQL.
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  // 2. Создаём таблицу 'customers', если она ещё не существует.
  // В таблице будут следующие поля:
  // - id: уникальный идентификатор клиента (UUID), который генерируется автоматически.
  // - name: строка длиной до 255 символов, обязательное поле для имени клиента.
  // - email: строка длиной до 255 символов, обязательное поле для email клиента.
  // - image_url: строка длиной до 255 символов, обязательное поле для ссылки на изображение клиента.
  await client.sql`
    CREATE TABLE IF NOT EXISTS customers (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,   -- Уникальный идентификатор клиента (генерация UUID по умолчанию)
      name VARCHAR(255) NOT NULL,                       -- Имя клиента (обязательное поле)
      email VARCHAR(255) NOT NULL,                      -- Email клиента (обязательное поле)
      image_url VARCHAR(255) NOT NULL                   -- Ссылка на изображение клиента (обязательное поле)
    );
  `;

  // 3. Вставляем данные о клиентах в таблицу 'customers'.
  // Используем Promise.all для параллельной обработки всех клиентов.
  const insertedCustomers = await Promise.all(
    customers.map(
      (customer) => client.sql`
        INSERT INTO customers (id, name, email, image_url)
        VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.image_url})
        ON CONFLICT (id) DO NOTHING;  // Если клиент с таким id уже существует, вставка данных не выполняется
      `,
    ),
  );

  // 4. Возвращаем массив с результатами вставки клиентов
  return insertedCustomers;
}

// Асинхронная функция для создания таблицы 'revenue' и заполнения её данными
async function seedRevenue() {
  // 1. Создаём таблицу 'revenue', если она ещё не существует.
  // В таблице будут следующие поля:
  // - month: строка длиной до 4 символов, представляющая месяц (например, "Jan", "Feb").
  //   Это поле должно быть уникальным, чтобы не было повторяющихся записей за один и тот же месяц.
  // - revenue: целое число, представляющее доход за месяц. Это обязательное поле.
  await client.sql`
    CREATE TABLE IF NOT EXISTS revenue (
      month VARCHAR(4) NOT NULL UNIQUE,  -- Название месяца (уникальное и обязательное поле)
      revenue INT NOT NULL               -- Доход за месяц (обязательное поле)
    );
  `;

  // 2. Вставляем данные о доходах в таблицу 'revenue'.
  // Используем Promise.all для параллельной обработки всех записей о доходах.
  const insertedRevenue = await Promise.all(
    revenue.map(
      (rev) => client.sql`
        INSERT INTO revenue (month, revenue)
        VALUES (${rev.month}, ${rev.revenue})
        ON CONFLICT (month) DO NOTHING;  // Если запись с таким месяцем уже существует, вставка не выполняется
      `,
    ),
  );

  // 3. Возвращаем массив с результатами вставки данных о доходах
  return insertedRevenue;
}

// Экспортируем асинхронную функцию GET, которая, вероятно, будет вызываться при HTTP-запросе GET
export async function GET() {
  // 1. Возвращаем JSON-ответ с сообщением. Это место, которое, скорее всего, нужно закомментировать или удалить
  // после инициализации базы данных.

  // 2. Начинаем блок try/catch для обработки операций с базой данных.
  try {
    // 3. Начинаем SQL-транзакцию.
    await client.sql`BEGIN`;

    // 4. Вызываем функции для инициализации таблиц и заполнения их данными:
    // - seedUsers: для заполнения таблицы пользователей
    // - seedCustomers: для заполнения таблицы клиентов
    // - seedInvoices: для заполнения таблицы счетов
    // - seedRevenue: для заполнения таблицы доходов
    await seedUsers();
    await seedCustomers();
    await seedInvoices();
    await seedRevenue();

    // 5. Коммитим транзакцию, если все операции прошли успешно.
    await client.sql`COMMIT`;

    // 6. Возвращаем успешный JSON-ответ после выполнения всех операций.
    return Response.json({ message: 'Database seeded successfully' });

  } catch (error) {
    // 7. Если произошла ошибка, откатываем транзакцию (ROLLBACK).
    await client.sql`ROLLBACK`;

    // 8. Возвращаем ошибку в формате JSON с HTTP-статусом 500.
    return Response.json({ error }, { status: 500 });
  }
}
