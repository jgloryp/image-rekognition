import { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Input, Upload, Typography, Divider, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
// import "./App.css";
import "antd/dist/antd.css";

function App() {
  const [presignedData, setPresignedData] = useState({});
  const [moderationLabels, setModerationLabels] = useState({});
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_SUPPORTJS}/system/aws/s3-presigned-post?file_ext=png`,
        {
          headers: {
            ["x-api-key"]: "ba3ec450-5ea2-11ea-bd59-d78dab67a7f9AA",
            // ["x-s3-bucket"]: "각자 서비스에 따라 다름",
          },
        }
      )
      .then((res) => {
        setPresignedData(res.data);
      });
  }, []);

  const handleChange = (info) => {
    console.log(info.file.status);
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }

    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) => {
        setImageUrl(imageUrl);
        setLoading(false);
        return;
      });

      axios
        .post(
          `${process.env.REACT_APP_SUPPORTJS}/system/aws/rekognition/detect-moderation-labels`,
          presignedData.fields,
          {
            headers: {
              ["x-api-key"]: "ba3ec450-5ea2-11ea-bd59-d78dab67a7f9AA",
            },
          }
        )
        .then((res) => setModerationLabels(res.data));
    }
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 10;
    if (!isLt2M) {
      message.error("Image must smaller than 10MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <div>
      <Row>
        <Col span={16} offset={4}>
          <Divider />
          <Upload
            name="file"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action={presignedData.url}
            beforeUpload={beforeUpload}
            onChange={handleChange}
            data={presignedData.fields}
          >
            {imageUrl ? (
              <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
            ) : (
              uploadButton
            )}
          </Upload>
          <Divider />
          <Typography.Title level={3}>
            S3 - Presigned Upload Data
          </Typography.Title>
          <Input.TextArea
            value={JSON.stringify(presignedData, null, 2)}
            autoSize
          />
          <Divider />
          <Typography.Title level={3}>
            Rekognition - ModerationLabels
          </Typography.Title>
          <Input.TextArea
            value={JSON.stringify(moderationLabels, null, 2)}
            autoSize
          />
        </Col>
      </Row>
    </div>
  );
}

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

export default App;
