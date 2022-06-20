import React, { useState } from 'react';
import styled from 'styled-components';
import LockView from './LockView';
import '../..//Wrapper.css';

const OuterDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const Block = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 90%;
    height: 100%;
`;
const InnerBlock = styled.div`
    display: flex;
    justify-content: center;
    algin-items: center;
    flex-direction: column;
    width: 100%;
    margin-top: 5%;
    p {
        font-family: DOSGothic;
        font-weight: bold;
        font-size: 1.1em;
        color: #black;
        margin-top: 15px;
        line-height: 25px;
    }
`;
const TitleDiv = styled.div`
    width: 100%;
    border-top: 1px solid #c9c9c9;
    padding-top: 5px;
    padding-bottom: 5px;
    line-height: 1;
    font-weight: bold;
    font-family: DOSGothic;
    font-size: 1.2em;
    background-color: #f2f2f2;
    text-align: center;
`;

const InfoDiv = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    font-size: 0.8em;
    font-color: #f9f9f9;
    margin-top: 5px;
    span {
        font-family: DOSGothic;
        font-weight: bold;
        font-size: 1.1em;
        color: #1f83c4;
    }
`;

const Form = styled.form`
    margin-top: 5%;
    input[type=submit] {
        font-size: 1em;
        font-family: DOSGothic;
        border: 1px solid #54acca;
        border-radius: 3px;
        background: #54acca;
        margin-left: 2%;
        color: white;
    }
`

const Check = styled.div`
    font-size: 0.8em;
    color: red;
    margin-top: 5px;
`; 
const DiaryView = () => {
    const [password, setPW] = useState("");
    const [view, setView] = useState(false);

    const handlePasswordInput = (event) => {
        setPW(event.currentTarget.value);
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        event.target.reset();
        if (password === "serverzzang") {
            setView(true);
        }
        else {
            document.getElementById('validation').innerHTML = '비밀번호가 일치하지 않습니다.';
            setTimeout(() => {
                document.getElementById('validation').innerHTML = '';
            }, 2000) // 시간. 2초 후 실행
        }
    };
    return (
        <>
        {!view &&
            <LockView>
                <Form onSubmit={handleSubmit}>
                    <label>
                        <input type="text" name="password" placeholder="비밀 번호 입력" onChange={handlePasswordInput}  />
                    </label>
                    <input type="submit" value="확인" />
                </Form>
                <Check id="validation"></Check>
            </LockView>
        }
        {view &&
        <OuterDiv>
            <Block>
                <InnerBlock>
                    <TitleDiv>To. 섭섭이들</TitleDiv>
                    <InfoDiv><span>채정아</span> 2022.6.25 스크랩 30</InfoDiv>
                    <p>
                        섭섭이덜 안녕 👊🏻 
                        <br/>
                        어느덧 마지막 세미나네요! 
                        <br/>
                        8번의 세미나 내내 과제도 열심히 하고 잘 들어줘서 고마워요
                        <br/>
                        처음 진행하는 세미나이다 보니 제 지식을 전달하는게 부족했을 수도 있어요
                        <br/>
                        하지만 여러분의 피드백으로 점점 더 발전하는 파트장이 된 것 같아 고맙습니다.
                        <br/>
                        서버 파트장 목표 중 하나가 바로 37명의 파트원 모두가 서버 파트장 후보가 될 수 있도록 이었어요 
                        <br/>
                        얼마나 이뤘을 진 모르겠지만, 저로 인해 여러분이 아주 조금이라도 성장했으면 됐습니다 :-)
                        <br/>
                        이 세미나가 끝이 아니고 시작이 되어 여러분의 서버 공부가 더 힘차게 노를 저었으면 좋겠네요!
                        <br/>
                        세미나 자료 만드는 건 솔직히 힘들었지만 ㅎㅎ
                        <br/> 
                        지식 공유의 힘이 무엇인지 깨달았던 30기였습니다.
                        <br/>
                        남은 30기도 더욱 즐겁게 즐기는 섭섭이들 되어 봅시다!
                        <br/>
                        함께해서 행복했던 세미나였습니다!
                    </p>
                </InnerBlock>
            </Block>
        </OuterDiv>
        }
        </>
    );
};

export default DiaryView;