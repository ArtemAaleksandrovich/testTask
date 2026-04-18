import {Card, Flex, Image, Typography} from "antd";
import {ShoppingCartOutlined} from "@ant-design/icons";
import type {Product} from "../../types/types.ts";

const { Text, Paragraph } = Typography;

interface ProductCardProps {
    product: Product;
    onClick(product: Product): void;
}

const ProductCard= ({product, onClick}: ProductCardProps) => {
    return (
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
            onClick={() => onClick(product)}
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
    )
}

export default ProductCard;