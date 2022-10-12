#!/bin/bash

curl -v -X POST "https://dapi.kakao.com/v2/vision/adult/detect" \
-H "Content-Type: application/x-www-form-urlencoded" \
-H "Authorization: KakaoAK 960807f886ad28fb3e3477e860395925AA" \
--data-urlencode "image_url=https://dn5hzapyfrpio.cloudfront.net/upload/8c4/8c4c9c10-c08f-11ec-b403-f5bfee2a85d5.png" 