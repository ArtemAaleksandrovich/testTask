import {Modal, Button, Flex, Divider, Typography, Image} from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import type {Product} from "../../types/types.ts";

const { Title, Text } = Typography;

interface ProductModalProps {
    product: Product;
    isOpenModal: boolean;
    onCloseModal(): void;
}

const ProductModal = ({ product, isOpenModal, onCloseModal }: ProductModalProps) => {
    const formattedPrice = product.price.toLocaleString('ru-RU');

    return (
        <Modal
            open={isOpenModal}
            onCancel={onCloseModal}
            footer={[
                <Button type="primary" danger>
                    Купить за {formattedPrice} ₽
                </Button>,
            ]}
            closeIcon={<CloseOutlined />}
            width={600}
        >
            <Flex vertical gap={8}>
                <Flex
                    justify="center"
                    align="center"
                    style={{
                        background: '#f5f5f5',
                        borderRadius: 8,
                        padding: 16,
                        minHeight: 200
                    }}
                >
                    <Image
                        src={product.image}
                        alt={product.title}
                        preview={false}
                        style={{
                            maxWidth: '100%',
                            maxHeight: 300,
                            objectFit: 'contain'
                        }}
                    />
                </Flex>
                <Flex vertical gap={4}>
                    <Text type="secondary" style={{ fontSize: 12, textTransform: 'uppercase' }}>
                        {product.category}
                    </Text>
                    <Title level={4} style={{ margin: 0 }}>
                        {product.title}
                    </Title>
                </Flex>
                <Text strong style={{ fontSize: 24, color: '#cf1322' }}>
                    {formattedPrice} ₽
                </Text>

                <Divider style={{ margin: '12px 0' }} />

                <Text
                    type="secondary"
                    style={{ marginBottom: 0 }}
                >
                    {product.description}
                </Text>
            </Flex>
        </Modal>
    );
};

export default ProductModal;