Goole Cloud Vision API (SafeSearch)
https://cloud.google.com/vision/docs/detecting-safe-search?hl=ko


GCP IAM 서비스 계정 만들고 키 추가해서 JSON 형태로 발급받고 다운로드
$ export GOOGLE_APPLICATION_CREDENTIALS="./massive-period-347802-1d73ade860f3.json"
$ gcloud auth application-default login


요청 본문 형태
{
  "requests": [
    {
      "image": {
        "content": "base64-encoded-image"
      },
      "features": [
        {
          "type": "SAFE_SEARCH_DETECTION"
        },
      ]
    }
  ]
}



반환 값에 대한
키 설명
adult: 이미지에 대한 성인 콘텐츠 가능성을 나타냅니다. 성인용 콘텐츠에는 과도한 노출, 포르노 이미지 또는 만화 또는 성행위와 같은 요소가 포함될 수 있습니다.
spoof: 스푸핑 가능성. 웃기거나 불쾌하게 보이도록 이미지의 표준 버전을 수정했을 가능성입니다.
medical: 의료 이미지일 가능성이 있습니다.
violence: 이 이미지에 폭력적인 콘텐츠가 포함되어 있을 가능성이 있습니다.
racy: 요청 이미지에 선정적인 콘텐츠가 포함되어 있을 가능성. 선정적인 콘텐츠에는 헐렁하거나 얇은 옷, 전략적으로 가려진 노출, 음란하거나 도발적인 포즈, 민감한 신체 부위의 클로즈업 등이 포함될 수 있습니다(단, 이에 국한되지 않음).

밸류 Likelihood enum 설명
UNKNOWN: 알 수 없는 가능성.
VERY_UNLIKELY: 매우 가능성이 낮다.
UNLIKELY: 그럴 것 같지 않다.
POSSIBLE: 가능성이 있습니다.
LIKELY: 가능성이 높습니다.
VERY_LIKELY: 가능성이 매우 높습니다.


가격
~1,000개/월 : 무료
1,000~5백만/월 : $1.5 / 천개
5백만~/월 : $0.6 / 천개