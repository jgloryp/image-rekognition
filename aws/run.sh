#!/bin/bash

aws rekognition detect-moderation-labels \
--image '{"S3Object":{"Bucket":"makenew-dev","Name":"upload/8c4/8c4c9c10-c08f-11ec-b403-f5bfee2a85d5gg.png"}}' \
--min-confidence 50 \
--region ap-northeast-1 
 