import logo from './logo.svg';
import './App.css';
import PageContainer from './container/PageContainer';
import Header from './components/Header'
import RouterConfig from './config/RouterConfig';
import Loading from './components/Loading';
import { Drawer } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {setDrawer} from './redux/slices/basketSlice'  

function App() {

  const {products,drawer} = useSelector((store) => store.basket) 
  const dispatch = useDispatch()
  return (
    <div >
      <PageContainer>
        <Loading />
        <Header />
        <RouterConfig />
        <Drawer  className='drawer' sx={{ padding: '20px' }} anchor='right' open={drawer} onClose={() => dispatch(setDrawer()) } >
          {products && products.map((product) => {
            return (
              <div key={product.id} className='flex-row' style={{ padding: '20px' }}>
                <img style={{ marginRight: '5px' }} src={product.image} width={50} height={50} />
                <p style={{ width: '320px', marginRight: '5px' }}>{product.title} ({product.count})</p>
                <p style={{ fontWeight: 'bold', marginRight: '10px', width: '60px' }}>{product.price} TL</p>
                <button style={{ padding: '5px', borderRadius: '5px', backgroundColor: 'rgb(185, 76, 76)', border: 'none', color: '#fff', width: '50px' }}>Sil</button>
              </div>
                    )
              })
              }
        </Drawer>
      </PageContainer>  
    </div>
  );
}

export default App;
