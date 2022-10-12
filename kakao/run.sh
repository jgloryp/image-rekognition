#!/bin/bash

curl -s -X POST "https://dapi.kakao.com/v2/vision/adult/detect" \
-H "Content-Type: multipart/form-data" \
-H "Authorization: KakaoAK 960807f886ad28fb3e3477e860395925AAAA" \
-F "image=@sample1.jpeg"

curl -s -X POST "https://dapi.kakao.com/v2/vision/adult/detect" \
-H "Content-Type: multipart/form-data" \
-H "Authorization: KakaoAK 960807f886ad28fb3e3477e860395925AAAA" \
-F "image=@sample2.jpeg"

curl -s -X POST "https://dapi.kakao.com/v2/vision/adult/detect" \
-H "Content-Type: multipart/form-data" \
-H "Authorization: KakaoAK 960807f886ad28fb3e3477e860395925AAAA" \
-F "image=@sample3.jpeg"