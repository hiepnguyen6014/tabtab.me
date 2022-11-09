// import { login } from '@Network/Auth';
// import { forgotPassword } from '@Network/User';
import {
  ArrowLeftOutlined,
  CloseCircleOutlined,
  LockOutlined,
  LoginOutlined,
  MailFilled,
  MailOutlined,
  MobileOutlined,
} from '@ant-design/icons';
import { doLogin } from '@core';
import { reactLocalStorage } from '@utils';
import { convertPhoneNumber } from '@utils';
import {
  Button,
  Col,
  Divider,
  Form,
  Input,
  Modal,
  Row,
  notification,
} from 'antd';
import { Typography } from 'antd';
import axios from 'axios';
import React, { ReactElement, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  EmailImageWrapper,
  FormLoginLabel,
  ModalWrapper,
  ReturnLoginBtn,
} from './loginform.style';

interface LoginRequest {
  phoneNumber: string;
  password: string;
}

const { Title, Text } = Typography;

export default function Login(props: any): ReactElement {
  const { t: translation } = useTranslation();
  const [step, setStep] = useState('LOGIN_FORM');
  const [loading, setLoading] = useState(false);
  // const { redirectUrl } = props.match.params;
  // const { pathname, search } = props.location;
  const { title, open, onOk, onCancel, setIsModalOpen } = props;
  const onFinish = (values: LoginRequest) => {
    setLoading(true);
    const areaCodePhone = convertPhoneNumber(values.phoneNumber);
    const loginData = { phoneNumber: areaCodePhone, password: values.password };
    //dùng kiểu thủ công do tạo function bị lỗi not a function bực quá :((
    var config = {
      method: 'post',
      url: 'https://cdn.tabtab.imazin.asia/AppUsers/loginByPhone',
      headers: {
        'Content-Type': 'application/json',
      },
      data: loginData,
    };
    axios(config)
      .then(async function (res: any) {
        if (res.status === 200) {
          notification['success']({
            message: translation('login.success'),
          });
          await reactLocalStorage.setObject('userInfo', res.data.data);

          setLoading(false);
          setIsModalOpen(false);
          // window.location.reload();
        }
      })
      .catch(function (error: any) {
        setLoading(false);
        window.location.reload();
        notification['error']({
          message: translation('login.notiFail'),
          description: translation('login.notiFailDes'),
        });
      });
  };

  const onFinishForgotPassword = (values: any) => {
    setLoading(true);
    const data = {
      email: values.email,
    };
    // forgotPassword(data)
    //   .then((res: any) => {
    //     setLoading(false);
    //     setStep('SEND_EMAIL_SUCCESS');
    //   })
    //   .catch((err: any) => {
    //     setLoading(false);
    //     notification['error']({
    //       message: translation('login.notiEmailFail'),
    //       description: translation('common.notiFailDes'),
    //     });
    //   });
  };

  const handleChangeRouteSignUp = (redirectUrl: any) => {
    console.log(redirectUrl);
    // if (redirectUrl) {
    //   // chỗ này lỗi. origin: /mua-ban/chi-tiet => redirect url còn /mua-ban
    //   // nên phải tự cut string
    //   let newRedirectUrl = window.location.pathname;
    //   if (newRedirectUrl.includes(`${ROUTES.AUTOLOGIN}/`)) {
    //     newRedirectUrl = newRedirectUrl.replace(`${ROUTES.AUTOLOGIN}/`, '');
    //   }
    //   history.push(`${ROUTES.AUTOSIGNUP}/${newRedirectUrl}${search}`);
    // } else {
    //   history.push(ROUTES.SIGNUP);
    // }
  };

  return (
    <ModalWrapper
      title={translation('login.header')}
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      footer={null}
      mask={false}
    >
      {step === 'LOGIN_FORM' && (
        <div>
          <Text
            style={{ fontSize: 24, fontWeight: '700', fontFamily: 'Inter' }}
          >
            Welcome tabtab
          </Text>
          <div>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                color: '#7A7A7A',
                fontFamily: 'Inter',
              }}
            >
              {translation('login.notAccountYet')}
              <a
                style={{
                  fontSize: 16,
                  fontWeight: '700',
                  color: '#000000',
                  cursor: 'pointer',
                  fontFamily: 'Inter',
                }}
                className="text-decoration-underline"
              >
                {translation('login.signupNow')}
              </a>
            </Text>
          </div>
          <div className="my-4">
            <Form
              style={{ marginBottom: -10 }}
              name="loginForm"
              onFinish={onFinish}
              autoComplete="off"
              initialValues={{ remember: true }}
            >
              <div className="fieldsetinput" style={{ marginBottom: 28 }}>
                <div
                  className="legend"
                  style={{
                    marginLeft: 14,
                    marginBottom: -16,
                    fontFamily: 'Inter',
                    fontSize: 14,
                    fontWeight: '500',
                  }}
                >
                  {translation('login.account')}
                </div>
                <Form.Item
                  style={{
                    height: 'auto',
                    marginBottom: 0,
                    marginLeft: 20,
                    paddingBottom: 5,
                  }}
                  name="phoneNumber"
                  rules={[
                    {
                      required: true,
                      pattern: /^-?(\.[0-9]*)?(\d{9,12})$/,
                      message: translation('valid.invalidPhone'),
                    },
                  ]}
                >
                  <Input
                    style={{
                      borderRadius: 8,
                      fontFamily: 'Inter',
                      paddingLeft: 0,
                      fontSize: 16,
                      fontWeight: '700',
                    }}
                    placeholder={translation('login.descriptionAccount')}
                    bordered={false}
                    // prefix={<CheckCircleOutlined className="input__prefix" />}
                  />
                </Form.Item>
              </div>
              <div className="fieldsetinput" style={{ marginBottom: 32 }}>
                <div
                  className="legend"
                  style={{
                    marginLeft: 14,
                    marginBottom: -16,
                    fontFamily: 'Inter',
                    fontSize: 14,
                    fontWeight: '500',
                  }}
                >
                  {translation('login.password')}
                </div>
                <Form.Item
                  style={{
                    height: 'auto',
                    marginBottom: 0,
                    marginLeft: 14,
                    paddingBottom: 5,
                  }}
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: translation('valid.invalidPassword'),
                    },
                    {
                      min: 6,
                      message: translation('valid.invalidPasswordShort'),
                    },
                  ]}
                >
                  <Input.Password
                    className="inputpassword"
                    style={{
                      borderRadius: 8,
                      fontFamily: 'Inter',
                      paddingLeft: 4,
                    }}
                    placeholder="***********"
                    bordered={false}
                  />
                </Form.Item>
              </div>
              <Button
                htmlType="submit"
                size="large"
                style={{ height: 'auto' }}
                className="auth__btn"
                loading={loading}
              >
                <label style={{ fontFamily: 'Inter' }}>
                  {translation('login.login')}
                </label>
              </Button>
            </Form>
          </div>
          <div
            style={{
              fontSize: 16,
              fontWeight: 700,
              color: '#FF8800',
              fontFamily: 'Inter',
            }}
            onClick={() => {
              setStep('FORGOT_PASSWORD_FORM');
            }}
          >
            {translation('login.forgotPassword')}
          </div>

          {/* <div>
            <Divider style={{borderTopColor:"#D3D3D3"}}>
              <Text style={{ fontSize: 14, fontWeight: '400', color: "#7A7A7A", fontFamily: "Inter" }}>{translation("login.orLoginWith")}</Text>
            </Divider>
          </div>

          <LoginWithGoogleAndFacebook redirectUrl={redirectUrl} pathname={pathname} search={search} /> */}
          <Text
            style={{
              color: '#7A7A7A',
              fontSize: 16,
              fontWeight: '400',
              fontFamily: 'Inter',
              marginTop: 24,
            }}
          >
            {translation('login.byContinue')}{' '}
          </Text>
          <Text
            style={{
              color: '#7A7A7A',
              fontSize: 16,
              fontWeight: '400',
              fontFamily: 'Inter',
            }}
          >
            <span
              style={{ color: '#741FF9' }}
              className="cursor-pointer"
              onClick={() => {}}
            >
              <ins
                style={{ fontSize: 16, fontWeight: '500', fontFamily: 'Inter' }}
              >
                {translation('login.policy')}
              </ins>
            </span>{' '}
            {translation('login.subPolicy')}
          </Text>
        </div>
      )}
      {/* {step === 'FORGOT_PASSWORD_FORM' && (
        <div style={{ marginBottom: -35 }}>
          <div className="d-flex headerContainer justify-content-between">
            <Text></Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                marginBottom: 15,
                marginLeft: 32,
                fontFamily: 'Inter',
              }}
            >
              {translation('login.header')}
            </Text>
            <CloseCircleOutlined
              style={{ fontSize: 29, marginTop: -18 }}
              className="justify-content-center align-self-center"
              onClick={() => {
                setStep('LOGIN_FORM');
              }}
            />
          </div>
          <Divider style={{ marginBottom: 24, backgroundColor: '#D3D3D3' }} />
          <Text
            style={{ fontSize: 24, fontWeight: '700', fontFamily: 'Inter' }}
          >
            {translation('login.resetPassword')}
          </Text>
          <div className="text-center my-4">
            <Form
              style={{ marginTop: 36 }}
              name="forgotPasswordForm"
              onFinish={onFinishForgotPassword}
              autoComplete="off"
            >
              <div className="fieldsetinput" style={{ marginBottom: 32 }}>
                <div
                  className="legend"
                  style={{
                    marginLeft: 14,
                    marginBottom: -16,
                    fontFamily: 'Inter',
                    fontSize: 14,
                    fontWeight: '500',
                  }}
                >
                  {translation('signup.email')}
                </div>
                <Form.Item
                  style={{
                    height: 'auto',
                    marginBottom: 0,
                    marginLeft: 14,
                    paddingBottom: 5,
                  }}
                  name="phoneNumber"
                  rules={[
                    {
                      required: true,
                      type: 'email',
                      message: translation('valid.invalidEmail'),
                    },
                  ]}
                >
                  <Input
                    style={{
                      borderRadius: 8,
                      fontFamily: 'Inter',
                      paddingLeft: 4,
                      fontSize: 16,
                      fontWeight: '700',
                    }}
                    placeholder={translation('login.typeEmailToGetPassword')}
                    bordered={false}
                    // prefix={<CheckCircleOutlined className="input__prefix" />}
                  />
                </Form.Item>
              </div>
              <Button
                htmlType="submit"
                style={{ height: 'auto' }}
                className="auth__btn"
                loading={loading}
              >
                <div
                  style={{
                    padding: 3,
                    fontSize: 18,
                    fontWeight: '700',
                    fontFamily: 'Inter',
                  }}
                >
                  {translation('common.confirm')}
                </div>
              </Button>
            </Form>
          </div>
        </div>
      )}
      {step === 'SEND_EMAIL_SUCCESS' && (
        <div className="my-5 pb-5">
          <EmailImageWrapper>
            <MailFilled />
          </EmailImageWrapper>
          <Title level={2} className="color-main">
            {translation('login.confirmEmail')}
          </Title>
          <p className="text-center my-4">
            {translation('login.successTextEmail')}
          </p>
          <ReturnLoginBtn
            onClick={() => {
              setStep('LOGIN_FORM');
            }}
            icon={<LoginOutlined />}
          >
            {translation('login.gobackLogin')}
          </ReturnLoginBtn>
        </div>
      )} */}
    </ModalWrapper>
  );
}
