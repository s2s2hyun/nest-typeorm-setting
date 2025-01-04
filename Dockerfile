# 1. Node.js 23.5.0 (최신 23.x 사용)
FROM node:23.5.0

# 2. 컨테이너 내 작업 디렉토리 설정
WORKDIR /usr/src/app

# 3. package.json과 yarn.lock 복사
COPY package.json yarn.lock ./

# 4. 의존성 설치
RUN yarn install

# 5. 소스 코드 복사
COPY . .

# 6. NestJS 애플리케이션 빌드 (배포 환경에서 사용)
RUN yarn build

# 7. 컨테이너에서 사용할 포트 노출
EXPOSE 3000 8000

# 8. 기본 실행 명령어 (Docker Compose에서 오버라이드 가능)
CMD ["yarn", "start:dev"]
