import React, { useState } from "react";
import { UploadOutlined, DeleteOutlined, CaretDownFilled } from "@ant-design/icons";
import { Avatar, Button, Input, Typography, Select, Upload } from "antd";
import "./setting.scss";

const Setting = () => {
  const [mobileUserId, setMobileUserId] = useState(""); // State để lưu giá trị ID tài khoản di động
  const props = {
    name: "file",
    //Đổi action
    action: "",
    headers: {
      authorization: "authorization-text",
    },
  };

  const handleInputChange = (e) => {
    setMobileUserId(e.target.value); // Cập nhật state khi thay đổi giá trị input
  };

  return (
    <>
      <div className="container">
        <div className="container-item">
          <div className="hearder-setting">
            <h1 className="text-hearder">Settings</h1>
            <p className="text-hearder">Manage and secure your account</p>
          </div>
          <div className="avatar">
            <div>
              <h3 className="text-bodyS">Profile picture</h3>
              <p className="text-bodyS">Accepted files JPG, PNG, SVG</p>
            </div>
            <div className="btn">
              {/* Dẫn giá trị từ backend vào src*/}
              <Avatar size={64} src="" />
              <Upload {...props}>
                <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>
              <Button
                className="ant-btn-delete"
                danger
                icon={<DeleteOutlined />}
                size="large"
              >
                Delete
              </Button>
            </div>
          </div>
          <div className="personal-infor">
            <div>
              <h3 className="text-bodyS">Personal Information</h3>
              <p className="text-bodyS">Shown on your public profile</p>
            </div>
            <div>
              {/* Dẫn giá trị từ backend vào value*/}
              <form className="form-input" action="" method="POST">
                <div className="form-grid">
                  <div className="form-item">
                    <Typography.Title level={4}>First Name</Typography.Title>
                    <Input  />
                  </div>
                  <div className="form-item">
                    <Typography.Title level={4}>Last Name</Typography.Title>
                    <Input />
                  </div>
                  <div className="form-item">
                    <Typography.Title level={4}>Email Address</Typography.Title>
                    {/* Dẫn giá trị từ backend vào value*/}
                    <Input  value={`email`} />
                  </div>
                  <div className="form-item">
                    <Typography.Title level={4}>Choose...</Typography.Title>
                    <Select
                      size={"large"}
                      defaultValue=""
                      options={[
                        { label: "Students", value: "a1"},
                        { label: "Professionals", value: "a2" },
                        { label: "Writer", value: "a3" },
                        { label: "Educator", value: "a4" },
                        { label: "Legal/Finance", value: "a5" },
                      ]}
                      suffixIcon={<CaretDownFilled />} 
                    />
                  </div>
                </div>
                <div className="container-button">
                  <Button className="ant-btn-save" type="primary">
                    Save
                  </Button>
                  <Button className="ant-btn-cancel">Cancel</Button>
                </div>
              </form>
            </div>
          </div>
          <div className="password-item">
            <div>
              <h3 className="text-bodyS">Password</h3>
              <p className="text-bodyS">Secure your account</p>
            </div>
            <Button type="primary">Reset Password</Button>
          </div>
          <div className="mobile-user">
            <div>
              <h3 className="text-bodyS">Link Your Mobile Account</h3>
              <p className="text-bodyS">
                Enter your mobile account ID to link your mobile account to your
                web account
              </p>
            </div>
            <form className="link-account" action="" method="POST">
              <Typography.Title level={4}>Mobile User ID</Typography.Title>
              <Input
                value={mobileUserId}
                onChange={handleInputChange}
                placeholder="Enter ID"
              />
              <div className="container-button">
                <Button
                  className="ant-btn-save"
                  type="primary"
                  disabled={!mobileUserId}
                >
                  Link Account
                </Button>
              </div>
            </form>
          </div>
          <div className="delete-account">
            <div>
              <h3 className="text-bodyS">Delete your account</h3>
              <p className="text-bodyS">
                Permanently remove all your data, including documents, chats,
                and personal information.
              </p>
            </div>
            <Button type="primary">Delete My Account</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
