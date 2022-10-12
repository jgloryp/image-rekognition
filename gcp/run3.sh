#!/bin/bash

curl -s -X POST "https://vision.googleapis.com/v1/images:annotate" \
-H "Authorization: Bearer "$(gcloud auth application-default print-access-token) \
-H "Content-Type: application/json; charset=utf-8" \
-d @request-image11.json