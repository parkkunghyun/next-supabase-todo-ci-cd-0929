# 빌드 단계
FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# 실행 단계
FROM node:18

WORKDIR /app

# 빌드 단계에서 빌드된 파일만 복사
COPY --from=builder /app ./

# 필요한 경우 production dependencies만 설치
RUN npm ci --only=production

CMD [ "npm", "start" ]

EXPOSE 3000
