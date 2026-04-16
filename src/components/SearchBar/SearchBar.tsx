import {SearchOutlined} from "@ant-design/icons";
import {Input} from "antd";
import type {Dispatch, SetStateAction} from "react";

interface SearchBarProps {
    searchValue: string;
    setSearchValue: Dispatch<SetStateAction<string>>;
}

const SearchBar = ({searchValue, setSearchValue}: SearchBarProps) => {
    return (
        <Input
            placeholder="Поиск по названию..."
            prefix={<SearchOutlined />}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            size="large"
            style={{ maxWidth: 400 }}
        />
    );
};

export default SearchBar;