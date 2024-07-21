import {
  DownOutlined,
  Html5Outlined,
  ArrowDownOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Space } from "antd";
import "./header.scss";

const Header = () => {
  // Menu items for the first dropdown
  const itemsPlugins = [
    {
      key: "1",
      label: <a href="#">Plugin 1</a>,

    },
    {
      key: "2",
      label: <a href="#">Plugin 2</a>,
    },
    {
      key: "3",
      label: <a href="#">Plugin 3</a>,
    },
  ];

  // Menu items for the second dropdown
  const menuNav = [
    {
      key: "1",
      label: <a href="#home">Home</a>,
    },
    {
      key: "2",
      label: <a href="#">Conversations</a>,
    },
    {
      key: "3",
      label: <a href="#" >Plugins</a>,
      children: [
        {
          key: "3.1",
          label: <a href="#">Plugin 1</a>,
        },
        {
          key: "3.2",
          label: <a href="#">Plugin 2</a>,
        },
        {
          key: "3.3",
          label: <a href="#">Plugin 3</a>,
        },
      ],
    },
    {
      key: "4",
      label: <a href="#">Pricing</a>,
      
    },
    {
      key: "5",
      label: <a href="">Download</a>,
    },
    {
      key: "6",
      label: <a href="">Api</a>,
    },
  ];
const itemsLanguage = [
  {
    key: "1",
    label: <a href="#">EN</a>,
  },
  {
    key: "2",
    label: <a href="#">FR</a>,
  },
  {
    key: "3",
    label: <a href="#">ES</a>,
  },
  {
    key: "4",
    label: <a href="#">DE</a>,
  },
  {
    key: "5",
    label: <a href="#">IT</a>,
  },
  {
    key: "6",
    label: <a href="#">VN</a>,
  },
  {
    key: "7",
    label: <a href="#">JP</a>,
  },
  {
    key: "8",
    label: <a href="#">CN</a>,
  }
]
  return (
    <header>
      <div className="logo">
        <Html5Outlined />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#">Conversations</a>
          </li>
          <Dropdown
            menu={{
              items: itemsPlugins,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Plugins
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="">Download</a>
          </li>
          <li>
            <a href="">Api</a>
          </li>
        </ul>
          {/* item for language */}
        <Dropdown menu={{ items: itemsLanguage }} trigger={["click"]}>
          <Button>
            <Space>
              EN
              <ArrowDownOutlined />
            </Space>
          </Button>
        </Dropdown>

        <Dropdown
          className="menu-dropdown"
          menu={{ items: menuNav }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <MenuOutlined />
            </Space>
          </a>
        </Dropdown>
      </nav>
    </header>
  );
};

export default Header;
