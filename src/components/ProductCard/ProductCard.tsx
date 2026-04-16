import {Card, Flex, Image, Typography} from "antd";
import {ShoppingCartOutlined} from "@ant-design/icons";
import type {Product} from "../../types/types.ts";
import {useState} from "react";
import ProductModal from "../ProductModal/ProductModal.tsx";

const { Text, Paragraph } = Typography;

interface ProductCardProps {
    product: Product;
}

const ProductCard= ({product}: ProductCardProps) => {
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    const onCloseModal = () => {
        setIsOpenModal(false);
    }
    return (
        <>
            <Card
                hoverable
                cover={
                    <Flex
                        style={{
                            background: '#f5f5f5',
                            height: 240,
                            overflow: 'hidden',
                        }}
                    >
                        <Image
                            preview={false}
                            alt={product.title}
                            src={product.image}
                        />
                    </Flex>
                }
                onClick={() => setIsOpenModal(true)}
                style={{ cursor: 'pointer'}}
            >
                <Card.Meta
                    title={product.title}
                    description={
                        <Flex vertical gap={8} style={{ marginTop: 8 }}>
                            <Paragraph
                                ellipsis={{ rows: 2 }}
                                style={{ marginBottom: 0 }}
                                type="secondary"
                            >
                                {product.description}
                            </Paragraph>

                            <Flex justify="space-between" align="center">
                                <Text strong style={{ fontSize: 16, color: '#cf1322' }}>
                                    {product.price.toLocaleString('ru-RU')} ₽
                                </Text>

                                <ShoppingCartOutlined style={{ color: '#1890ff' }} />
                            </Flex>
                        </Flex>
                    }
                />
            </Card>
            <ProductModal product={product} isOpenModal={isOpenModal} onCloseModal={onCloseModal} />
        </>
    )
}

export default ProductCard;