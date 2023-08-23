import { TextField, Typography } from '@mui/material';
import { Drawer, Divider, Col, Row } from 'antd';

const DescriptionItem = ({ title, content }) => (
    <div className="site-description-item-profile-wrapper">
        <p className="site-description-item-profile-p-label">{title}:</p>
        {content}
    </div>
);

export default function MyDrawer({ showDrawer, data }) {
    const [openDrawer, setOpenDrawer] = showDrawer;
    const { id, first_name, last_name, username, phone_number, gender,
        email, status, date_of_birth, website, language, role,address, image } = data;

    return (
        <>
            <Drawer
                width={"50%"}
                placement="right"
                closable={false}
                onClose={() => setOpenDrawer(false)}
                visible={openDrawer}
            >
                <p className="site-description-item-profile-p" style={{ marginBottom: 24 }}>
                    <Typography>User Profile</Typography>

                </p>
                <p className="site-description-item-profile-p">Personal</p>
                <Row>
                    <Col span={12}>
                        <Typography ><b>Full Name</b>:{first_name + " " + last_name}</Typography>
                    </Col>
                    <Col span={12}>
                        <Typography ><b>Username</b>:{username}</Typography>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col span={12}>
                        <Typography ><b>Gender</b>:{gender === "M" ? "Male" : "Female"}</Typography>
                    </Col>
                    <Col span={12}>
                        <Typography ><b>Status</b>:{status}</Typography>
                    </Col>
                </Row><br />
                <Row>
                    <Col span={12}>

                        <Typography ><b>Website</b>:{website}</Typography>
                    </Col>
                    <Col span={12}>
                        <Typography ><b>Birthday</b>:{date_of_birth}</Typography>
                    </Col>
                </Row><br />
                <Row>
                    <Col span={12}>

                        <Typography ><b>Language</b>:{language === "SP" ? "Spanish" : "English"}</Typography>
                    </Col>
                    <Col span={12}>
                        <Typography ><b>Role</b>:{role}</Typography>
                    </Col>
                </Row>

                <Divider />
                <p className="site-description-item-profile-p">Contacts</p>
                <Row>
                    <Col span={12}>
                        <Typography ><b>Email</b>:{email}</Typography>
                    </Col>
                    <Col span={12}>
                        <Typography ><b>Phone</b>:{phone_number}</Typography>
                    </Col>
                </Row>

                <Divider />
                <p className="site-description-item-profile-p">Address</p>
                <Row>
                    <Col span={12}>
                        <Typography ><b>Address 1</b>:{address?.address_line1}</Typography>
                    </Col>
                    <Col span={12}>
                        <Typography ><b>Address 2</b>:{address?.address_line2}</Typography>
                    </Col>
                </Row>

            </Drawer>
        </>
    );

}

