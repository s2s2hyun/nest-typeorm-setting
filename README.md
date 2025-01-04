<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ yarn install
```

```bash

# Nest CLI 설치
yarn global add @nestjs/cli

#git clone After

## TypeORM 및 MySQL 패키지 설치
yarn add @nestjs/typeorm typeorm mysql2 dotenv

+@  타입 선언 파일 설치 (필요 시)
yarn add -D @types/dotenv

## Swagger 패키지 설치

yarn add @nestjs/swagger swagger-ui-express

## Nest CLI를 사용하여 modules 즉, api 폴더 구조 세팅시 nest Cli 명령어 ,

nest generate resource 폴더명

ex)
nest generate resource board

? What transport layer do you use? (Use arrow keys)
❯ REST API -> 선택
  GraphQL
  gRPC
  WebSockets
선택하면 끝,

Docker를 활용한 개발 환경 실행

개발 환경 실행: docker-compose up -d

개발 환경 중지: docker-compose down


Dockerfile이 있는 디렉토리에서 아래 명령어를 실행하세요: docker build -t nest-app .

docker build: Docker 이미지를 생성하는 명령어입니다.
-t nest-app: 생성될 이미지의 이름(nest-app)과 태그(latest 기본값)를 지정합니다.
.: 현재 디렉토리(Dockerfile이 위치한 경로)를 지정합니다.


이미지를 .tar 파일로 저장 : docker save -o nest-app.tar nest-app

## AWS

EC2에서 이미지 로드

실행 흐름
Step 1: Docker 이미지 로드
FileZilla로 전송한 이미지 파일(nest-app.tar)을 EC2에서 로드합니다: docker load -i nest-app.tar


Step 2: Docker Compose로 컨테이너 실행

docker-compose.prod.yml 파일을 사용하여 컨테이너를 실행합니다:


docker-compose -f docker-compose.prod.yml up -d

Step 3: 실행 확인

실행 중인 컨테이너를 확인합니다:

docker ps
5. 파일 구조 예시
배포를 위한 필요한 파일들이 EC2에 다음과 같이 준비되어 있어야 합니다:


코드 복사
/home/ec2-user/
├── docker-compose.prod.yml # Docker Compose 설정 파일
├── nest-app.tar            # Docker 이미지 파일


nest-typeorm-setting/
├── src/
│   ├── app.controller.ts    # 기본 컨트롤러
│   ├── app.module.ts        # 루트 모듈
│   ├── app.service.ts       # 주요 서비스
│   ├── main.ts              # 애플리케이션 엔트리 포인트
│   ├── modules/             # 기능 모듈 디렉토리
│   │   └── example/         # 예제 모듈
│   │       ├── example.controller.ts
│   │       ├── example.module.ts
│   │       ├── example.service.ts
├── dist/                    # 빌드 결과물 (Git에서 제외)
├── test/                    # 테스트 코드
├── Dockerfile               # Docker 이미지 설정 파일
├── docker-compose.yml       # 개발 환경 Docker 설정
├── docker-compose.prod.yml  # 배포 환경 Docker 설정
├── nodemon.json             # Nodemon 설정 파일
├── package.json             # 프로젝트 의존성 및 스크립트
├── yarn.lock                # Yarn 잠금 파일



```
