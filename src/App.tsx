import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import {
  Header,
  Footer,
  Avatar,
  Text,
  Title,
  TextWithRange,
} from './components';
import { ReactComponent as PlusIcon } from './assets/plus.svg';
import { ReactComponent as MinusIcon } from './assets/minus.svg';
import { ReactComponent as MailIcon } from './assets/mail.svg';
import { ReactComponent as PhoneIcon } from './assets/phone.svg';
import { ReactComponent as GithubIcon } from './assets/github.svg';
import { ReactComponent as TelegramIcon } from './assets/telegram.svg';
import { ReactComponent as AddressIcon } from './assets/address.svg';
import { useReactToPrint } from 'react-to-print';

const Wrapper = styled.div`
  max-width: 1000px;
  padding: 2rem 3rem;
  margin: 2rem auto;
`;

const Row = styled.div<{
  isStart?: boolean;
  isSpaceBetween?: boolean;
  isBlock?: boolean;
}>`
  display: ${(props) => (props.isBlock ? 'block' : 'flex')};
  flex-wrap: wrap;
  align-items: ${(props) => (props.isStart ? 'start' : 'center')};
  justify-content: ${(props) =>
    props.isSpaceBetween ? 'space-between' : 'start'};
  margin-bottom: 2rem;
`;

const Sidebar = styled.div`
  flex: 1;
  margin-right: 1rem;
`;

const Content = styled.div`
  flex: 3;
  margin-left: 1rem;
`;

const PlusBtn = styled.button`
  // display: block;
  background-color: transparent;
  padding: 5px;
  border: none;
  cursor: pointer;
  margin-left: 10px;
  svg {
    width: 14px;
    hegiht: 14px;
  }

  transition: background-color 0.3s;
  &:hover {
    transition: background-color 0.3s;
    background-color: rgb(233, 233, 233);
  }
`;

const AddNewButton = styled.button`
  display: block;
  opacity: 0;
  margin-top: 30px;
  display: flex;
  align-items: center;
  transition: opacity 0.3s;
  cursor: pointer;
  background-color: transparent;

  &:hover {
    opacity: 1;
    transition: opacity 0.3s;
  }
`;

function App() {
  const [workArrayLength, setWorkArrayLength] = useState(1);
  const [skillsArrayLength, setSkillsArrayLength] = useState(1);
  const [blocksArrayLength, setBlocksArrayLength] = useState(0);
  const cvRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => cvRef.current,
  });

  const onAdd = (type: string) => {
    switch (type) {
      case 'skill':
        setSkillsArrayLength(skillsArrayLength + 1);
        break;
      case 'work':
        setWorkArrayLength(workArrayLength + 1);
        break;
      case 'block':
        setBlocksArrayLength(blocksArrayLength + 1);
    }
  };
  const onDelete = (type: string) => {
    switch (type) {
      case 'skill':
        if (skillsArrayLength > 0) setSkillsArrayLength(skillsArrayLength - 1);
        break;
      case 'work':
        if (workArrayLength > 0) setWorkArrayLength(workArrayLength - 1);
        break;
      case 'block':
        if (workArrayLength > 0) setBlocksArrayLength(blocksArrayLength - 1);
    }
  };

  return (
    <div className="ui-wrapper">
      <Header onPrintClick={handlePrint} />
      <div className="ui-content-wrapper">
        <Wrapper ref={cvRef}>
          <div className="ui-container">
            <Row>
              <Sidebar>
                <Avatar />
              </Sidebar>
              <Content>
                <Row isSpaceBetween>
                  <div>
                    <Title size="2">Firstname Lastname</Title>
                    <Text>Small description</Text>
                  </div>
                  <div>
                    <Text
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <AddressIcon style={{ marginRight: '0.5rem' }} />
                      address
                    </Text>
                    <Text
                      style={{
                        marginTop: '0.2rem',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <GithubIcon style={{ marginRight: '0.5rem' }} />
                      github
                    </Text>
                    <Text
                      style={{
                        marginTop: '0.2rem',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <TelegramIcon style={{ marginRight: '0.5rem' }} />
                      telegram
                    </Text>
                    <Text
                      style={{
                        marginTop: '0.2rem',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <MailIcon style={{ marginRight: '0.5rem' }} />
                      mail@gmail.com
                    </Text>
                    <Text
                      style={{
                        marginTop: '0.2rem',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <PhoneIcon style={{ marginRight: '0.5rem' }} />
                      +7 839 428 24 42
                    </Text>
                  </div>
                </Row>
              </Content>
            </Row>
            <Row isBlock>
              <Title size="2">Education</Title>
              <Text>University</Text>
            </Row>
            <Row isBlock>
              <Title
                style={{
                  marginTop: '2rem',
                }}
                size="2"
                withPlus
                withMinus
                onAdd={onAdd}
                onDelete={onDelete}
                type="work"
              >
                Work experience
              </Title>
              {new Array(workArrayLength).fill(null).map((_, i) => (
                <Text style={{ marginBottom: '5px' }} key={i}>{`${
                  i + 1
                }. Work here`}</Text>
              ))}
            </Row>
            <Row isBlock>
              <Title
                style={{
                  marginTop: '2rem',
                }}
                size="2"
                withPlus
                withMinus
                onAdd={onAdd}
                onDelete={onDelete}
                type="skill"
              >
                Skills
              </Title>
              {new Array(skillsArrayLength).fill(null).map((_, i) => (
                <TextWithRange key={i} />
              ))}
            </Row>

            {new Array(blocksArrayLength).fill(null).map((_, i) => (
              <Row key={i} isBlock>
                <Title size="2" withMinus onDelete={onDelete} type="block">
                  New Title
                </Title>
                <Text>New Text</Text>
              </Row>
            ))}

            <AddNewButton
              onClick={() => setBlocksArrayLength(blocksArrayLength + 1)}
            >
              <PlusIcon style={{ marginRight: '10px' }} /> Add new block
            </AddNewButton>
          </div>
        </Wrapper>
      </div>
      <Footer />
    </div>
  );
}

export default App;
