import type {TabsProps} from 'antd';
import {Tabs} from 'antd';
import {type Dispatch, type SetStateAction} from 'react';
import {Category} from "../../types/types.ts";

interface ProductsTabsProps {
    setProductsCategory: Dispatch<SetStateAction<Category>>
    productsCategory: Category;
}

const ProductsTabs = ({setProductsCategory, productsCategory}: ProductsTabsProps) => {

    const items: TabsProps['items'] = [
        {
            key: Category.ALL,
            label: 'Все',
        },
        {
            key: Category.CLOCK,
            label: 'Часы',
        },
        {
            key: Category.HEADPHONE,
            label: 'Наушники',
        },
        {
            key: Category.TABLET,
            label: 'Планшеты',
        },
    ];

    const onChange = (key: string) => {
        if (key === Category.ALL || key === Category.CLOCK || key === Category.HEADPHONE || key === Category.TABLET) {
            setProductsCategory(key);
        }
    }

    return <Tabs style={{marginTop: '0.5rem'}} defaultActiveKey={productsCategory} items={items} onChange={onChange}/>
};

export default ProductsTabs;