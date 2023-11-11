import { Form, Upload, UploadProps } from 'antd';
import { Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { RcFile } from 'antd/es/upload';

export default function Test(props: UploadProps) {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-5 min-w-xs md:p-12 bg-white">
      <Form>
        <Form.Item
          label={'LABELS.FORM_FILE'}
          name={'FIELDS.FORM_FILE'}
          getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
          extra="파일형식 : pdf, png, jpg / 15MB 이하 (최대 10개)"
          valuePropName="fileList"
        >
          <Upload
            // maxCount={10}
            // accept={'.pdf, .png, .jpg'}
            fileList={props.fileList}
            onChange={(info) => {
              const { file } = info;
              if (file.status === 'done') {
                const PreviewURL = URL.createObjectURL(
                  info.fileList.slice(-1)[0].originFileObj as RcFile,
                );
                file.url = PreviewURL;
              } else if (file.status === 'error') {
                return;
              }
            }}
            beforeUpload={(file) => {
              const { fileList } = props;
              if (fileList && fileList.length > 9) {
                return false;
              }
            }}
            customRequest={({ onSuccess, file }) => {
              try {
                onSuccess!('ok');
              } catch (e) {}
            }}
          >
            <Button icon={<UploadOutlined />}>{'파일 첨부'}</Button>
          </Upload>
        </Form.Item>
      </Form>
    </div>
  );
}
