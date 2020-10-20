import ReactoTron from 'reactotron-react-js'
import { reactotronRedux } from 'reactotron-redux'

if (process.env.NODE_ENV === 'development') {
  const tron = ReactoTron.configure()
    .use(reactotronRedux())
    .connect()

  console.tron = tron

  tron.clear();
}
