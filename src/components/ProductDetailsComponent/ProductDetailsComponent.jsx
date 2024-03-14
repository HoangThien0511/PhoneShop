import { Col, Image, Row } from "antd";
import React from "react";
import imageProduct from "../../assets/images/test.webp";
import imageSmall from "../../assets/images/imagesmall.webp";
import { WrapperStyleColImage, WrapperStyleImageSmall } from "./style";

const ProductDetailsComponent = () => {
  return (
    <div>
      <Row style={{ padding: "16px", backgroundColor:'#fff' }}>
        <Col span={10}>
          <Image src={imageProduct} alt="image product" preview={false} />
          <Row style={{ paddingTop: "10px", justifyContent:'space-between'}}>
            <WrapperStyleColImage span={4} >
              <WrapperStyleImageSmall
                src={imageSmall}
                alt="image small"
                preview={false}
                
              />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall
                src={imageSmall}
                alt="image small"
                preview={false}
              />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall
                src={imageSmall}
                alt="image small"
                preview={false}
              />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall
                src={imageSmall}
                alt="image small"
                preview={false}
              />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall
                src={imageSmall}
                alt="image small"
                preview={false}
              />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall
                src={imageSmall}
                alt="image small"
                preview={false}
              />
            </WrapperStyleColImage>
          </Row>
        </Col>
        <Col span={14}>col</Col>
      </Row>
    </div>
  );
};

export default ProductDetailsComponent;
