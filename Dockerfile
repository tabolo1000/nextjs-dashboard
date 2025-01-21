# Используем официальный образ Node.js
FROM node

# Устанавливаем рабочую директорию
WORKDIR /app

# Устанавливаем pnpm
RUN npm install -g pnpm

# Копируем только package.json и устанавливаем зависимости
COPY package*.json ./
RUN pnpm install

# Копируем весь проект в контейнер
COPY . .

RUN pnpm build
COPY .next ./.next

# Открываем порт, который будет использоваться Next.js
EXPOSE 3000

# Устанавливаем переменную для polling и запускаем проект
ENV CHOKIDAR_USEPOLLING=true
CMD ["pnpm", "run", "dev"]

# CMD ["nodemon", "--watch", "/app", "--ext", "js,jsx,ts,tsx,json", "--exec", "pnpm dev"]