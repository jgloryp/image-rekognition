#!/bin/bash

curl -s -X POST "https://dapi.kakao.com/v2/vision/adult/detect" \
-H "Content-Type: multipart/form-data" \
-H "Authorization: KakaoAK 960807f886ad28fb3e3477e860395925AA" \
-F "image=@image11.png"
