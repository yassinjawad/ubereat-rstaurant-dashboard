import {Card, Descriptions, Divider, List, Button} from 'antd';
import dishes from '../../assets/data/dishes.json'

const DetailedOrder = () => {
    return (
        <Card title={'Order Title'} style={{margin: 20 }}>
      <Descriptions bordered column={{lg: 1, sm: 1}}>
        <Descriptions.Item label="Customer">
          Yassin Jawad</Descriptions.Item>
        <Descriptions.Item label="Customer Address">
          803 Mountainview Dr, Chesterbrook, PA</Descriptions.Item>
      </Descriptions>
      <Divider />
      <List 
      dataSource={dishes}
      renderItem={(dishItem) => (
        <List.Item>
          <div style={{fontWeight: 'bold'}}>{dishItem.name} x{dishItem.quantity}</div>
          <div>${dishItem.price}</div>
        </List.Item>
      )}
      />
      <Divider />
      <div style={styles.totalSumContainer}>
        <h2>Total:</h2>
        <h2 style={styles.totalPrice}>$42.96:</h2>
      </div>
      <Divider />
      <div style={styles.buttonContainer}>
      <Button block type="danger" size="large" style={styles.button}> 
          Decline Order
        </Button>
        <Button block type="primary" size="large" style={styles.button}> 
          Accept Order
        </Button>
        </div>
      <Button block type="primary" size="large"> 
        Food Is Done
      </Button>
    </Card>
    )

};

const styles = {
    totalSumContainer: {
      flexDirection: 'row',
      display: 'flex',
    },
    totalPrice: {
      marginLeft: 'auto',
      fontWeight: 'bold'
    },
    buttonContainer: {
      display: 'flex',
      paddingBottom: 30
  
    },
    button: {
      marginRight: 20,
      marginLeft: 20
  
    }
   };

export default DetailedOrder;
