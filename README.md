# 🌍 Kubernetes 기반 Nodejs 게시판 배포 

이 프로젝트는 쿠버네티스(Kubernetes) 환경에서 Nodejs 기반 간단한 게시판 애플리케이션을 구축하는 실습입니다.
애플리케이션은 컨테이너화(Docker)되어 쿠버네티스 클러스터에 배포됩니다.

---

## 📌 주요 기능

✅ 쿠버네티스 환경 구성
nodeapp : Deployment + Service + NodePort
  
---

## 📁 파일 구성
```
dockerNk8s/
├── docker                       # docker 이미지 구축 관련 폴더
  ├── Dockerfile.myApp           # docker 이미지를 구축하기 위한 dockerfile
  ├── app.js                     # nodejs js 파일
  ├── package-lock.json          # 
  ├── package.json               # 필요한 nodejs 라이브러리
  ├── postListPage.html          # 게시판 HTML
├── k8s                       # 쿠버네티스 관련 폴더
  ├── nodeapp.yaml                  # docker 이미지를 서비스(Deploymeny, Service, NodePort 정의)
└── 
```

---

## 🖥️ 실행 방법

### 🛠️ 개발 환경 및 개발 도구
- 언어 및 프레임워크
  - Nodejs (22.14.0)
  - Ubuntu (24.04)
  - docker (28.1.1)
  - kubernetes (1.32.5)
- 개발 도구
  - Vscode
  - Oracle VirtualBox

### ▶️ 실행
#### 1. kubernetes 배포
```
1. 깃 import
git clone https://github.com/jeongsjun/dockerNk8s.git

2. working directory 이동
cd dockerNk8s/k8s/

3. yaml 파일 적용
k apply -f nodeapp.yaml
```

#### 2. docker 이미지 업로드(본인 dockerhub에 업로드하고 싶다면)
1-1. DockerFile 기반으로 이미지 생성
```
docker build -t nodeapp:1.1 -f Dockerfile.myApp .
```
1-2. dockerhub 업로드
```
1. dockerhub 로그인
docker login

2. 태그 붙이기
docker tag nodeapp:1.1 <dockerhub 사용자명>/nodeapp:1.1

3. 업로드
docker push <dockerhub 사용자명>/nodeapp:1.1
```
