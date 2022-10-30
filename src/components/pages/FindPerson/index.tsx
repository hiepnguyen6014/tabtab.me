import { FDesktop, SwapAdd } from './FindPerson.style';
import DefaultLayout from '../../layout/DefaultLayout/DefaultLayout';
import { Typography } from 'antd';
import { Plus } from '@root/public/icons';
import Filter from './Filter';
import AgentInfo from './AgentInfo';

export default function FindpersonComponent({ translate }) {
  return (
    <DefaultLayout t={translate}>
      <div style={{ background: '#F0F2F5' }}>
        <FDesktop>
          <label
            style={{
              fontSize: 14,
              fontWeight: '500',
              fontFamily: 'Inter',
              color: '#7A7A7A',
              marginTop: 20,
              marginBottom: 30,
            }}
          >
            Tên Section
            <label style={{ marginRight: 10, marginLeft: 10 }}>{'>'}</label>
            <label
              style={{
                fontSize: 14,
                fontWeight: '500',
                fontFamily: 'Inter',
                color: '#F9BD06',
              }}
            >
              find-person
            </label>
          </label>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography.Title level={2}>Text Demo</Typography.Title>
            <SwapAdd>
              <Plus />
              <label
                role="scale"
                style={{
                  marginLeft: 10,
                  fontSize: 14,
                  fontWeight: '700',
                  fontFamily: 'Inter',
                }}
              >
                Add as Agent
              </label>
            </SwapAdd>
          </div>
          <Filter />
          <AgentInfo />
        </FDesktop>
      </div>
    </DefaultLayout>
  );
}
