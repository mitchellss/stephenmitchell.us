import React from 'react';
import { Breadcrumb, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import img1 from '../vineyard2.jpg';

export default class SkyPrecision extends React.Component {
    render() {
        return (
            <div>
                <Breadcrumb bsPrefix="breadcrumb1">
                    <LinkContainer to="/projects">
                        <Breadcrumb.Item>Projects</Breadcrumb.Item>
                    </LinkContainer>
                    <Breadcrumb.Item active>
                        SkyPrecision
                    </Breadcrumb.Item>
                </Breadcrumb>
                <div className="test">
                    <Image src={img1} fluid />
                    <h1 className="desktopimagetext2 blackbackground">SkyPrecision</h1>
                </div>
            </div>
        )
    }
}