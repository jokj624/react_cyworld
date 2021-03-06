import React from 'react';
import styled from 'styled-components';

const OuterDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    margin-top: 20px;
    width: 90%;
`;

const News = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin: 0 5px;
    width: 50%;
    font-family: DOSGothic;
    font-size: 1.2em;
    .up {
        border-bottom: 1px solid #c9c9c9;
        color: #1f83c4;
    }
    ul {
        margin-top: 0px;
        font-size: .8em;
    }
    li {
        color: #123C73;
        margin-top: 10px;
    }
    table {
        margin-top: 5px;
        color: #123C73;
        font-size: .8em;
        border-spacing: 0 5px;
        span {
            font-size: .8em;
        }
    }
`;

const TopContent = () => {
    return (
        <OuterDiv>
            <News>
                <div className="up">๐ Updated News</div>
                <ul>
                    <li>์ญ์ญ์ด๋ค ์ธ๋ฏธ๋ ๋ฃ๋๋ผ</li>
                    <li>๊ณ ์ ๋ง์์ด์!</li>
                    <li>30๊ธฐ ๊ทผ๋ณธ ์๋ฒ</li>
                    <li>์์ผ๋ฉด ๋์ง๋ค.</li>
                </ul>
            </News>
            <News>
                <div className="up">๐ Nothing</div>
                <table >
                    <tbody>
                        <tr>
                            <td>์ฌ์ง์ฒฉ <span>0/31</span></td>
                            <td>๋ฐฉ๋ช๋ก <span>0/15</span></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>์ฅฌํฌ๋ฐ์ค <span>0/3</span></td>
                            <td>๋ค์ด์ด๋ฆฌ <span>0/0</span></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>์ด๊ฑฐ <span>12/12</span></td>
                            <td>๊ทธ๋ฅ ๋์์ธ์ <span>6/24</span></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>์ฌ์ฌํด์ <span>7/22</span></td>
                            <td>๋ฃ์ด๋ด <span>0/1</span></td>
                        </tr>
                    </tbody>
                </table>
            </News>
        </OuterDiv>
    );
};

export default TopContent;