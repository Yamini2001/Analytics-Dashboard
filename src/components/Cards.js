import { Card, Row, Col, Chart } from 'antd';
import { AreaChart } from '@ant-design/charts';

const { Meta } = Card;

const gridStyle = {
  width: '33.33%',
  padding: '20px',
};

const items = [
  {
    title: 'EFFICIENCY',
    data: [
      { x: 'Jan', y: 1.19 },
      { x: 'Feb', y: 1.2 },
      { x: 'Mar', y: 1.18 },
      { x: 'Apr', y: 1.1921 },
    ],
    content: ( // Content for card description
      <div>
        <p>Lorem Ipsum</p>
        <p>1.1921</p>
        <p>+0.0015 (+0.13%)</p>
        <p>0.00 USD</p>
      </div>
    ),
  },
  {
    title: 'TIME TO MARKET',
    data: [
      { x: 'Jan', y: 350000 },
      { x: 'Feb', y: 300000 },
      { x: 'Mar', y: 330000 },
      { x: 'Apr', y: 327176 },
    ],
    content: ( // Content for card description
      <div>
        <p>Lorem Ipsum</p>
        <p>327,176</p>
        <p>-97,914.00 (-23.03%)</p>
        <p>131,040,723,108 JPY</p>
      </div>
    ),
  },
  // ... other items
  {
    title: 'PREDICTABILITY',
    data: [
      { x: 'Jan', y: 0.00315 },
      { x: 'Feb', y: 0.0032 },
      { x: 'Mar', y: 0.0031 },
      { x: 'Apr', y: 0.00313 },
    ],
    content: ( // Content for card description
      <div>
        <p>Lorem Ipsum</p>
        <p>0.00313010</p>
        <p>-0.00050430 (-13.88%)</p>
        <p>1,566 BTC</p>
      </div>
    ),
  },
];

const App = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Row gutter={16}>
        {items.map((item) => (
          <Col span={8} key={item.title} style={gridStyle}>
            <Card title={item.title}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ flexGrow: 1, paddingBottom: '16px' }}>
                  <AreaChart
                    data={item.data}
                    xField="x"
                    yField="y"
                    seriesField="title"
                    xAxis={{ tickLine: { alignTick: false } }}
                  />
                </div>
                <Meta content={item.content} />
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};


export default App;
