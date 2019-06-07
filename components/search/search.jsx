import React from 'react';
import "./search.scss"
import Config from "../../config.json";
import { Input } from 'antd';
const Search = Input.Search;

class SearchBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }


    hiddenUl(e) {
        e.stopPropagation();
        this.searchNode.input.setValue("");
        this.setState({
            list: []
        })
    }

    render() {
        const { list } = this.state;
        return (
            <div className='searchContanier'>
                <Search
                    placeholder="搜索一下。。。"
                    onSearch={value => this.getList(value)}
                    ref={node => this.searchNode = node}
                />
                {list && list.length ? <ul id="myUL" ref='myUL' >
                    {list.map((item, i) => {
                        return (
                            <li key={i}><a href={`#/${item.type}/${item.name}`} onClick={(e) => { this.hiddenUl(e) }}>{`${item.name} ${item.moduleNameChinese}`}</a></li>
                        )
                    })}
                </ul> : ""}

            </div>
        )
    }

    getList(value) {

        let arr1 = Config["business"].filter(item => {
            if (item.name.indexOf(value) != -1) {
                item.type = "business";
                return item;
            }
        })

        let arr2 = Config["common"].filter(item => {
            if (item.name.indexOf(value) != -1) {
                item.type = "common";
                return item;
            }
        })

        let arr3 = Config["other"].filter(item => {
            if (item.name.indexOf(value) != -1) {
                item.type = "other";
                return item;
            }
        })

        let finalArr = arr1.concat(arr2, arr3);
        this.setState({
            list: finalArr
        })

    }

}
export default SearchBar;